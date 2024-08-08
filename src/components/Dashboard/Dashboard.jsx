import React, { useState, useEffect } from "react";
import banner from "../../assets/banner.svg";
import banner2 from "../../assets/banner2.svg";
import banner3 from "../../assets/banner3.svg";
import banner4 from "../../assets/banner4.svg";
import ice from "../../assets/ice.svg";
import arrowside from "../../assets/arrowside.svg";
import "../Dashboard/Dashboard.css";

import Cart from "../Cart/Cart";
import { FaSpinner } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";
import Ratings from "../ratings/Ratings";
import useCartStore from "../../store/CartStore";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const banners = [banner2, banner, banner3, banner4, ice];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        setProducts(response.data);
      } catch (error) {
        setError("Ooops! Something went wrong, please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToCart = useCartStore((state) => state.addToCart);
  console.log(addToCart);

  const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <div className="w-full flex">
      <div className="pl-[18rem] px-[2rem] w-full py-[7rem]">
        <div className="relative">
          <img
            src={banners[currentBannerIndex]}
            alt="Banner"
            className="w-full rounded-2xl transition-opacity duration-1000"
          />
          {currentBannerIndex !== 0 && (
            <button className="absolute bottom-10 border w-40 h-14 left-0 mx-9 text-white border-[#FF7834] bg-[#FF7834] rounded-xl uppercase">
              Order now
            </button>
          )}
        </div>
        <div className="flex items-center justify-between py-5">
          <h1 className="text-[24px] font-semibold text-black">Restaurant</h1>
          <div className="flex gap-3 items-center">
            <h2 className="text-[#FF7834] text-[17.77px] font-normal">
              View all
            </h2>
            <img src={arrowside} alt="Arrow side" />
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-semibold text-black">Top Order</h1>
          {loading ? (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
            </div>
          ) : (
            <div className="menu-special">
              <div className="products-category">
                {displayedProducts.map((product) => (
                  <div key={product.id} className="product-container">
                    <div className="product-item">
                      <img
                        className="product-image"
                        src={product.itemImage}
                        alt={product.itemName}
                      />
                      <div className="product-details">
                        <Ratings productId={product._id} />
                        <p className="text-black">{product.itemName}</p>
                        <small className="text-black">Mcdonalds</small>
                        <div className="product-price-container">
                          <p className="product-price">{product.price}</p>
                          <p
                            className="add-to-cart"
                            onClick={() => addToCart(product, navigate)}
                          >
                            +
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Dashboard;
