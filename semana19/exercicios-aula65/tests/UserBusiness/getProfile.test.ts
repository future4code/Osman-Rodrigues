import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe('getProfile', ()=>{
  let userDatabase = {}
  let hashGenerator = {}
  let tokenGenerator = {}
  let idGenerator = {}

  test('Receive a invalid token.', jest.fn(async()=>{
    expect.assertions(2)

    const getById = jest.fn((user: User) => {})
    const verify = jest.fn((token: string)=> false)

    userDatabase = {getById}
    tokenGenerator = {verify}

    const token = ''

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    try{
      await userBusiness.getProfile(token)
    }catch(e){
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("Invalid token.");
    }
  }))

  test('With valid token, but not found any user.', jest.fn(async()=>{
    expect.assertions(2)

    const getById = jest.fn((user: User) => undefined)
    const verify = jest.fn((token: string)=> true)

    userDatabase = {getById}
    tokenGenerator = {verify}

    const token = 'myToken'

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    try{
      await userBusiness.getProfile(token)
    }catch(e){
      expect(e.errorCode).toBe(404);
      expect(e.message).toBe("User not found.");
    }
  }))

  test('Should return user profile infos.', jest.fn( async ()=>{
    expect.assertions(5)
    const getById = jest.fn(async (user: User) =>{
      return{
        id: "35b62ff4-64af-4721-a4c5-d038c6f730cf",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN"
    }})

    const verify = jest.fn((token:string)=> true)
    
    const userToken = 'myToken'

    tokenGenerator = {verify}
    userDatabase = {getById}

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    )

    const result = await userBusiness.getProfile(userToken)

    expect(verify).toHaveBeenCalledWith(userToken)
    expect(getById).toHaveBeenCalled()
    expect(getById).toHaveReturned()
    expect(result.profileInfos).not.toBe(undefined)
    expect(result.profileInfos).not.toBe(null)
  }))
})