fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      fetch(`http://localhost:3000/products/${product.id}`, {
        method: "DELETE"
      })
      .then(res => {
        if (res.ok) {
          console.log(`Deleted product with id ${product.id}`);
        } else {
          console.log(`Failed to delete id ${product.id}`);
        }
      });
    });
  })
  .catch(err => console.error("Error:", err));
