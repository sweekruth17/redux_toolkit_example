import { useDispatch, useSelector } from "react-redux";
import { incItem, removeItem, decItem } from "../features/cart/cartSlice";
import { ChevronUp, ChevronDown } from "../icons";

const CartItem = ({ data }) => {
  console.log(data);
  const { id, img, title, price, amount } = data;
  const dispatch = useDispatch();

  return (
    <>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">₹{price}</h4>
          <button
            className="remove-btn"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            remove
          </button>
        </div>
        <div>
          <button className="amount-btn" onClick={() => dispatch(incItem(id))}>
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={() => dispatch(decItem(id))}>
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  );
};
export default CartItem;
