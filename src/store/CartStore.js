import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (newProduct, navigate) => {
    const cart = get().cart;
    const existingProduct = cart.find(
      (product) => product._id === newProduct._id
    );
    if (!existingProduct) {
      set({ cart: [...cart, { ...newProduct, quantity: 1 }] });
      return navigate("/internal/dashboard");
    }
    const updatedCart = cart.map((product) => {
      if (product._id === newProduct._id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    set({ cart: updatedCart });

    navigate("/internal/dashboard");
  },
  increaseQuantity: (newProduct) => {
    const cart = get().cart;
    const updatedCart = cart.map((product) => {
      if (product._id === newProduct._id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    set({ cart: updatedCart });
  },
  decreaseQuantity: (newProduct) => {
    const cart = get().cart;
    const updatedCart = cart.map((product) => {
      if (product._id === newProduct._id) {
        return { ...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    });
    set({ cart: updatedCart });
  },
  removeFromCart: (newProduct) => {
    const cart = get().cart;
    const updatedCart = cart.filter(
      (product) => product._id !== newProduct._id
    );
    set({ cart: updatedCart });
  },
}));
export default useCartStore;
