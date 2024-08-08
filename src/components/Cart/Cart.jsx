import React from "react";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/cartpic.svg";
import clock from "../../assets/clock.svg";
import route from "../../assets/route.svg";
import delivered from "../../assets/delivered.svg";
import useCartStore from "../../store/CartStore";
import "../Cart/Cart.css";

// Define styles for buttons and images
const buttonClassActive = "border py-2 rounded-md w-full border-[#ff7834] bg-[#ff7834] text-white font-medium";
const buttonClassInactive = "border py-2 rounded-md w-full border-[#ff7834] bg-[#ff78347f] text-white font-medium cursor-not-allowed";
const cartImg = "rounded-full border bg-[#D9D9D938] border-[#D9D9D938] py-12 px-3 w-[14rem] mx-10 mt-4";
const orderImg = "border bg-[#ff78347c] border-[#ff78347c] rounded-full py-2 px-2";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore(state => ({
    cart: state.cart,
    increaseQuantity: state.increaseQuantity,
    decreaseQuantity: state.decreaseQuantity,
    removeFromCart: state.removeFromCart,
  }));

  // Calculate amounts
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 500; // Example fixed delivery fee
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/internal/checkout", { state: { subtotal, deliveryFee, total } });
    }
  };

  return (
    <div className="border bg-white max-h-[80vh] w-full max-w-[40rem] z-1 mx-auto my-[5.5rem] text-black">
      <div className="px-5 py-4 flex flex-col gap-5 justify-center">
        <h1 className="font-semibold text-[14px]">My Cart Preview</h1>
        {cart.length < 1 ? (
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={cart} alt="" className={cartImg} />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h1 className="text-[24px] font-medium">Oops....</h1>
              <span>Your cart is empty</span>
            </div>
            <div className="border-b-[.2px] w-full px-[5rem] border-[#B3B3B3]" />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((product) => (
              <div key={product._id} className="flex gap-4 items-center w-full">
                <img className="w-16 h-16" src={product.itemImage} alt={product.itemName} />
                <div className="flex flex-col flex-1">
                  <p>{product.itemName}</p>
                  <small>Muna Bee's Kitchen</small>
                  <div className="flex gap-2 items-center mt-2">
                    <button
                      className="cartbtnminus"
                      disabled={product.quantity <= 1}
                      onClick={() => decreaseQuantity(product)}
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      className="cartbtnplus"
                      onClick={() => increaseQuantity(product)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <p>{product.price}</p>
                    <button
                      className="removebtn"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col px-5 items-center justify-center gap-5 mt-5">
        <button className="border py-2 rounded-md w-full border-[#ff7834] font-medium">
          Get a discount
        </button>
        <button
          onClick={handleCheckout}
          className={cart.length > 0 ? buttonClassActive : buttonClassInactive}
          disabled={cart.length === 0}
        >
          Check Out
        </button>
      </div>

      <div className="px-8 flex flex-col gap-3 py-3">
        <h1 className="text-[12.38px] font-semibold">Order Tracking</h1>

        <div className="flex gap-3 items-center">
          <img src={clock} alt="Preparing" className={orderImg} />
          <div className="leading-5">
            <h2 className="text-[12.38px]">Preparing</h2>
            <span className="text-[12.38px] font-semibold">0 minutes left</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img src={route} alt="On Route" className={orderImg} />
          <div className="leading-5">
            <h2 className="text-[12.38px]">On Route</h2>
            <span className="text-[12.38px] font-semibold">0 minutes left</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img src={delivered} alt="Delivered" className={orderImg} />
          <div className="leading-5">
            <h2 className="text-[12.38px]">Delivered</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
