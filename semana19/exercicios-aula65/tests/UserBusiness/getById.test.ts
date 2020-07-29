import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe('getById', ()=>{
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  
  
  test("User doesn't exist.", jest.fn( async()=>{
    expect.assertions(2)

    const getById = jest.fn((user: User) => {});
    userDatabase = {getById}

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    try{
      await userBusiness.getById('38b3d20b-0f0d-4775-96e1-7f84cd5ecf1c')
    }catch(e){
      expect(e.errorCode).toBe(404);
      expect(e.message).toBe("User not found.");
    }
  }))

  test("Should successfull return user infos.", jest.fn( async()=>{
    expect.assertions(4)

    const getById = jest.fn((id: string) =>{
      return new User(
        id, 
        'Hendrix', 
        'hendrix@jimmi.com', 
        '$2a$12$QWAPkO.Ws4BtOyd38qKMtupwEUzR97JtRGc6WxFXF6PfxmcWH4YlW', 
        UserRole.NORMAL)
    });
    userDatabase = {getById}
    
    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.getById('38b3d20b-0f0d-4775-96e1-7f84cd5ecf1c')

    expect(getById).toHaveBeenCalledWith('38b3d20b-0f0d-4775-96e1-7f84cd5ecf1c')
    expect(getById).toHaveReturned()
    expect(result.userInfos.getId().length).toBe(36)
    expect(result.userInfos.getPassword().length).toBe(60)
  }))
})