### Exercicios aula 65, semana 19

## 1.
a) code:
~~~typescript
public async getById(id: string, token: string){

    const validedToken = this.tokenGenerator.verify(token);

    if (!validedToken) {
      throw new InvalidParameterError("Invalid token.")
    }else if (!id || id.length != 36) {
      throw new InvalidParameterError("Missing or invalid user id.")
    }

    try{
      const userInfos = await this.userDatabase.getUserById(id)

      return { userInfos }
    }catch(e){
      throw new InvalidParameterError(e.message)
    }
  }
~~~

## 2.
a)code:
~~~typescript
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
~~~
b)code:
~~~typescript
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
~~~

## 3.
a)code:
~~~typescript

~~~