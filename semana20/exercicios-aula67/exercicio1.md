### Exercicio 1

a) Não.
b) code:
~~~typescript
return {
  statusCode: 400,
  body: JSON.stringify({ message: "Missing input" })
}
~~~
c) code:
~~~typescript
return {
  statusCode: 400,
  body: JSON.stringify({ message: "Missing input" })
}
~~~
d) code:
~~~typescript
return {
  statusCode: 400,
  body: JSON.stringify({ message: "Missing email" })
};
~~~
e) code:
~~~typescript
return {
  statusCode: 400,
  body: JSON.stringify({ message: "Invalid password" })
}
~~~
f) code:
~~~typescript
return {
  statusCode: 200,
  body: JSON.stringify({
    message: "User is correct"
  })
};
~~~
g) code: 
~~~typescript
 if (!user.email) {
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Missing email" })
  };
}else if (!user.email.includes('@')){
  return {
    statusCode: 422,
    body: JSON.stringify({ message: "Invalid email" })
  };
}
~~~
h) code: 
~~~typescript
const input = {
  info:{
    name: 'Blaus',
    email: 'blaus@sualb.com',
    password: '123456'
  }
}
~~~

