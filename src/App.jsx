import { useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}
export default App;
