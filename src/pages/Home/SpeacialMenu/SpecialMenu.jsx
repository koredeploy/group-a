import React, { useContext, useEffect, useState } from "react";
import "../SpeacialMenu/SpecialMenu.css";
import axiosInstance from "../../../utils/axiosInstance";
import Ratings from "../../../components/ratings/Ratings";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../context/CartContext";
import useCartStore from "../../../store/CartStore";

const SpecialMenu = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  const addToCart = useCartStore((state) => state.addToCart);
  console.log(addToCart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        const product = await response.data;
        setProducts(product);
      } catch (error) {
        setError("Ooops! Something went wrong, please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSeeMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <div>
      <div className="specialmenuinner">
        <h1>Special Menu</h1>
        <small>
          Discover our specially curated menu, designed to delight your taste
          buds with unique and seasonal dishes
        </small>
      </div>
      {loading ? (
        <div className="spinner-container">
          <FaSpinner className="spinner" />
        </div>
      ) : (
        <div className="specialmenu">
          <div className="categoryproducts1">
            {displayedProducts.map((product) => (
              <div key={product.id}>
                <div className="firstproduct">
                  <img
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                  />
                  <div className="innerproducts">
                    <Ratings productId={product._id} />
                    <p>{product.itemName}</p>
                    <small>Mcdonalds</small>
                    <div className="productprice">
                      <p className="cartprice">{product.price}</p>
                      <p
                        className="plussign"
                        onClick={() => addToCart(product, navigate)}
                      >
                        +
                      </p>
                    </div>
                  </div>
                </div>
                <div className="firstproduct1">
                  <img
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                  />
                  <div className="innerproducts">
                    <Ratings productId={product._id} />
                    <p>{product.itemName}</p>
                    <small>Mcdonalds</small>
                    <div className="productprice">
                      <p className="cartprice">{product.price}</p>
                      <p className="plussign">+</p>
                    </div>
                  </div>
                </div>
                {showMore && (
                  <div className="secondproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts">
                      <Ratings productId={product._id} />
                      <p>{product.itemName}</p>
                      <small>Mcdonalds</small>
                      <div className="productprice">
                        <p className="cartprice">{product.price}</p>
                        <p className="plussign">+</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p onClick={handleSeeMore} className="seemorecart">
            {showMore ? "Show Less" : "See More"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SpecialMenu;
