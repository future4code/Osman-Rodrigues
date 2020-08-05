### Exercicio 3

~~~javascript
exports.handler = async (event) => {
    const {n1, n2} = event

    const response = {
        statusCode: 200,
        body: JSON.stringify(`O resultado da soma entre os números é ${n1+n2}`),
    };
    return response;
}
~~~