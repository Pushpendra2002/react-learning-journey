import Product from "./Product";
import Cart from "./cart";

function App() {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
  };

  return (
    <>
      <Product product={product} />
      <Cart />
    </>
  );
}

export default App;