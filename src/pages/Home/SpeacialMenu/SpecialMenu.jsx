import React, { useEffect, useState } from "react";
import "../SpeacialMenu/SpecialMenu.css";
import axiosInstance from "../../../utils/axiosInstance";

const SpecialMenu = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        const product = await response.data;
        setProducts(product);
      } catch (error) {
        setError("ooops Something went wrong please refresh.");
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
      <div className="specialmenu">
        <div className="specialmenuinner">
          <h1 className="text-[50px] font-medium">Special Menu</h1>
          <small className="text-lg text-center">
            Discover our specially curated menu, designed to delight your taste
            buds <br /> with unique and seasonal dishes
          </small>
        </div>
        <div className="categoryproducts">
          {displayedProducts.map((product) => (
            <div key={product.id}>
              <div className="firstproduct">
                <img
                  className="productsimg"
                  src={product.itemImage}
                  alt={product.itemName}
                />
                <div className="innerproducts">
                  <small>Ratings</small>
                  <p>{product.itemName}</p>
                  <small>Mcdonalds</small>
                  <div className="productprice">
                    <p className="cartprice">{product.price}</p>
                    <p className="plussign">+</p>
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
                  <small>Ratings</small>
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
                    <small>Ratings</small>
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
    </div>
  );
};

export default SpecialMenu;
