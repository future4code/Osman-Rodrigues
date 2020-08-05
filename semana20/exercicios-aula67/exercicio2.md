### Exercicio 2

~~~javascript
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Olá mundo, sou uma mensagem da AWS'),
    };
    return response;
}
~~~