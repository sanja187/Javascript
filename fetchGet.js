let operation={
    "method":"GET"
}
fetch("http://localhost:3000/products",operation).then((response)=>{
    return response.json()
}).then(data=>console.log(data))                                                