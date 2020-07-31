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
public async getAll(){
  const allUsers = await this.userDatabase.getAll()

  if (allUsers.length === 0) {
    throw new NotFoundError("No registered users.")
  }
  
  return { allUsers }
}
~~~

## 4.
a)code:
~~~typescript
test('Request not allowed.', jest.fn(async ()=>{
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
~~~
b)code:
~~~typescript
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
~~~

## 5.
a)code:
~~~typescript
public async getProfile(token: string){
  const validedToken = this.tokenGenerator.verify(token);
  if(! validedToken){
    throw new InvalidParameterError('Not allowed.')
  }

  const profileInfos = await this.userDatabase.getById(validedToken.id)

  if ( ! profileInfos) {
    throw new NotFoundError("User not found.")
  }
  
  return { profileInfos }
}
~~~

## 6.
6.1 - code:
~~~typescript
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
~~~
6.2 - code:
~~~typescript
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
~~~
6.3 - code:
~~~typescript
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
~~~