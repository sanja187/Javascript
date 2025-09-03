let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        id: 4,
        title: "Shorts",
        price: 250,
        category: "clothing"
    })
};

fetch("http://localhost:3000/products", options)
    .then(response => {
        if (response.ok) {
            console.log(response.statustext);
            
        } else {
            console.log("Data not shared");
        }
    })
    .catch(err => console.log("Error:"));
