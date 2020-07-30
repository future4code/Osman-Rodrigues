import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe('getAll', ()=>{
  let userDatabase = {}
  let hashGenerator = {}
  let tokenGenerator = {}
  let idGenerator = {}

  test('Request not allowed.', jest.fn( async ()=>{
    expect.assertions(2)

    const getAll = jest.fn((token:string)=>{})
    const verify = jest.fn((token:string)=>{})
    const token = 'token'

    tokenGenerator = {verify}
    userDatabase = {getAll}

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    )

    try{
      await userBusiness.getAll(token)
    }catch(e){
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("Not allowed.");
    }
  }))

  test('Should return an array of Users.', jest.fn( async ()=>{
    expect.assertions(4)

    const getAll = jest.fn(()=>[
      new User(
        '4ad9776c-5516-4dbc-8119-b2cc3b2a58cd', 
        'Carl Sagan',
        'sagan@carlt.com',
        '$2a$12$fp4XNDewvwaiYw9frX6KE.cn2Zg0lWMcNBJos/H97ybm6hUzdwdqC',
        UserRole.NORMAL
      ),
      new User(
        'e3bc93cd-5a83-4309-97e9-c7b5d5c26ed7',
        'Alan Turing',
        'turing@alan.com',
        '$2a$12$OMxEtM7lw1FcB03qPeuiW.HkxrTqpk7K3JzyN3GVH0hZRFca4HpEG',
        UserRole.ADMIN
      )
    ])

    const verify = jest.fn((token:string)=> true)
    
    const userToken = 'myToken'

    tokenGenerator = {verify}
    userDatabase = {getAll}

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    )

    const result = await userBusiness.getAll(userToken)
    
    expect(getAll).toHaveBeenCalled()
    expect(getAll).toHaveReturned()
    expect(verify).toHaveBeenCalledWith(userToken)
    expect(result.allUsers.length).toBeGreaterThan(0)
  }))
})