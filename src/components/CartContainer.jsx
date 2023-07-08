import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";
import Modal from "./Modal";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <>
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} data={item} />;
          })}
        </div>
        <footer>
          <div className="cart-total">
            <hr />
            <h4>
              total <span>₹{total}</span>
            </h4>
          </div>
          <button
            className="clear-btn btn"
            onClick={() => dispatch(openModal())}
          >
            clear cart
          </button>
        </footer>
      </section>
    </>
  );
};
export default CartContainer;
