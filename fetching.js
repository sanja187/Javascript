fetch("http://localhost:3001/products").then((response)=>{
    return response.json()
}).then(data=>console.log(data))