let operation = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "id":"6",
        "gender": "male"
    })
};

fetch("http://localhost:3000/products", operation)
    .then(response => {
        if (response.ok) {
            console.log(response.statusText);
            
        } else {
            throw new Error("Data not modified");
        }
    })
    .then(data => console.log("Updated:", data))
    .catch(err => console.log("Error:", err.message));
