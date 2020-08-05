### Exercicio 4

~~~javascript
exports.handler = async (event) => {
    const {input} = event
    let checkedResponse 

    if(input.includes('@')){
        checkedResponse = {isEmail: true}
    }else{
        checkedResponse = {isEmail: false, reason: 'String não possui arroba'}
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(checkedResponse),
    };
    return response;
}
~~~