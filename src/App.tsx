import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const removeItem = (id) => {
    fetch("http://localhost:3000/products/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setProduct(products.filter((product) => product.id !== id));
      });
  };

  return (
    <div className="ahihi">
      <button onClick={increment}>{count}</button>

      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <button onClick={() => removeItem(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
