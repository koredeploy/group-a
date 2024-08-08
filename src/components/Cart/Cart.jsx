import cart from "../../assets/cartpic.svg";
import clock from "../../assets/clock.svg";
import route from "../../assets/route.svg";
import delivered from "../../assets/delivered.svg";
import { useContext } from "react";
import useCartStore from "../../store/CartStore";

const buttonClass1 =
  "border py-2 rounded-md  w-full border-[#ff78347c] font-medium";
const buttonClass2 =
  "border py-2 rounded-md  w-full border-[#ff78347c] bg-[#ff78347f] font-medium";
const cartImg =
  "rounded-full border bg-[#D9D9D938] border-[#D9D9D938] py-12 px-3 w-[14rem] mx-10 mt-4";
const orderImg =
  "border bg-[#ff78347c] border-[#ff78347c] rounded-full py-2 px-2";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore((state) => ({
      cart: state.cart,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
      removeFromCart: state.removeFromCart,
    }));
  console.log(cart);

  return (
    <div className=" border bg-white h-[49rem] z-1 mx-[rem] ml-[rem] my-[5.5rem] text-black">
      <div className="px-5 py-4 flex flex-col gap-5  justify-center">
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
          <div>
            {cart.map((product) => {
              return (
                <div key={product._id}>
                  <p>{product.itemName}</p>
                  <img src={product.itemImage} alt="" />
                  <div className="flex gap-2">
                    <button
                      disabled={product.quantity <= 1}
                      onClick={() => decreaseQuantity(product)}
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button onClick={() => increaseQuantity(product)}>+</button>
                  </div>
                  <p>{product.price}</p>
                  <button onClick={() => removeFromCart(product)}>
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col px-5 items-center justify-center gap-5 mt-5">
        <button className={buttonClass1}>Get a discount</button>
        <button className={buttonClass2}>Check Out</button>
      </div>

      <div className="px-8 flex flex-col gap-3 py-3">
        <h1 className="text-[12.38px] font-semibold">Order Tracking</h1>

        <div className="flex gap-3 items-center">
          <img src={clock} alt="" className={orderImg} />
          <div className="leading-5">
            <h2 className="text-[12.38px]">Preparing</h2>
            <span className="text-[12.38px] font-semibold">0 minutes left</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img src={route} alt="" className={orderImg} />
          <div className="leading-5">
            <h2 className="text-[12.38px]">On Route</h2>
            <span className="text-[12.38px] font-semibold">0 minutes left</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img src={delivered} alt="" className={orderImg} />
          <div className="leading-5">
            <h2 className="text-[12.38px]">Delivered</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
