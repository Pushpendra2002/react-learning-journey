import{useDispatch} from "react-redux";
import { addToCart } from "./features/cart/cartSlice";

const Product = ({ product }) => {
    const dispatch = useDispatch();
   

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;