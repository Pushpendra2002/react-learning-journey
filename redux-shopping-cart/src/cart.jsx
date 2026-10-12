import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "./features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove from Cart
          </button>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;


