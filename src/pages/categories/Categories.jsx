import React, { useEffect, useState } from "react";
import HeroSectionCategories from "../../components/HeroSectionCategories";
import "../../pages/categories/Categories.css";
import foodImg1 from "../../assets/categoty food1.png";
import foodImg2 from "../../assets/Category food2.png";
import foodImg3 from "../../assets/Category food3.png";
import foodImg4 from "../../assets/category food4.png";
import foodImg5 from "../../assets/category food5.png";
import InfoPage from "../Home/InfoPage/InfoPage";
import axiosInstance from "../../utils/axiosInstance";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        const product = await response.data;
        console.log(product);
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
  const handleSeeMore1 = () => {
    setShowMore1((prevShowMore) => !prevShowMore);
  };
  const handleSeeMore2 = () => {
    setShowMore2((prevShowMore) => !prevShowMore);
  };
  const handleSeeMore3 = () => {
    setShowMore3((prevShowMore) => !prevShowMore);
  };

  const displayedProducts = showMore ? products : products.slice(0, 4);
  const displayedProducts1 = showMore1 ? products : products.slice(0, 4);
  const displayedProducts2 = showMore2 ? products : products.slice(0, 4);
  const displayedProducts3 = showMore3 ? products : products.slice(0, 4);

  return (
    <div>
      <HeroSectionCategories />
      <div className="category-food">
        <h2>Category</h2>
        <div className="foodImg">
          <div>
            <img src={foodImg1} alt="" />
            <p>Grain</p>
          </div>
          <div>
            <img src={foodImg2} alt="" />
            <p>Burger</p>
          </div>
          <div>
            <img src={foodImg3} alt="" />
            <p>Sea Food</p>
          </div>
          <div>
            <img src={foodImg4} alt="" />
            <p>Pizza</p>
          </div>
          <div>
            <img src={foodImg5} alt="" />
            <p>Chicken</p>
          </div>
        </div>
        <div>
          <h2 className="categorywings">Chicken Wings</h2>
          <div className="categoryproducts">
            {/* First Displayed Product */}
            {displayedProducts.map((product) => (
              <div key={product.id}>
                <div className="firstproduct bg-red-500">
                  <img
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                  />
                  <div className="innerproducts1 ">
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
                    <div className="innerproducts1">
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
        </div>
        <p onClick={handleSeeMore} className="seemorecart">
          {showMore ? "Show Less" : "See More"}
        </p>
        {/* ends here */}
        {/* Second Displayed Product starts */}
        <div>
          <h2 className="categorywings">Grilled Chicken Caeser Salad </h2>
          <div className="categoryproducts">
            {displayedProducts1.map((product) => (
              <div key={product.id}>
                <div className="firstproduct">
                  <img
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                  />
                  <div className="innerproducts1">
                    <small>Ratings</small>
                    <p>{product.itemName}</p>
                    <small>Mcdonalds</small>
                    <div className="productprice">
                      <p className="cartprice">{product.price}</p>
                      <p className="plussign">+</p>
                    </div>
                  </div>
                </div>
                {showMore1 && (
                  <div className="secondproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
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
        </div>
        <p onClick={handleSeeMore1} className="seemorecart">
          {showMore1 ? "Show Less" : "See More"}
        </p>
        {/* ends here */}
        {/* Third Displayed Product starts */}

        <div>
          <h2 className="categorywings">Chicken Noodles Soup</h2>
          <div className="categoryproducts">
            {displayedProducts2.map((product) => (
              <div key={product.id}>
                <div className="firstproduct">
                  <img
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                  />
                  <div className="innerproducts1">
                    <small>Ratings</small>
                    <p>{product.itemName}</p>
                    <small>Mcdonalds</small>
                    <div className="productprice">
                      <p className="cartprice">{product.price}</p>
                      <p className="plussign">+</p>
                    </div>
                  </div>
                </div>
                {showMore2 && (
                  <div className="secondproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
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
        </div>
        <p onClick={handleSeeMore2} className="seemorecart">
          {showMore2 ? "Show Less" : "See More"}
        </p>
        {/* ends here */}
        {/* Fourth Displayed Product starts */}

        <div>
          <h2 className="categorywings">Grilled Chicken Breast</h2>
          <div className="categoryproducts">
            {displayedProducts3.map((product) => (
              <div key={product.id}>
                <div className="firstproduct">
                  <img
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                  />
                  <div className="innerproducts1">
                    <small>Ratings</small>
                    <p>{product.itemName}</p>
                    <small>Mcdonalds</small>
                    <div className="productprice">
                      <p className="cartprice">{product.price}</p>
                      <p className="plussign">+</p>
                    </div>
                  </div>
                </div>
                {showMore3 && (
                  <div className="secondproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
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
        </div>
        <p onClick={handleSeeMore3} className="seemorecart">
          {showMore3 ? "Show Less" : "See More"}
        </p>
        {/* ends here */}
      </div>
      <InfoPage />
    </div>
  );
};

export default Categories;
