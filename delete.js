let operation={
    "method":"DELETE"
}
fetch("http://localhost:3000/products/5",operation).then((response)=>{
    return response.json()
}) .then((data) => console.log("Deleted:", data))
  .catch((err) => console.error("Error:", err));                                             