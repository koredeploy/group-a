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
import Ratings from "../../components/ratings/Ratings";
import { FaSpinner } from "react-icons/fa";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        const products = await response.data;
        console.log("Fetched products:", products); // Debugging line
        setProducts(products);
        setFilteredProducts(products); // Initialize filtered products
        setLoading(false);
      } catch (error) {
        setError("Oops! Something went wrong, please refresh.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (searchItem) => {
    if (searchItem === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.itemName
          .toLowerCase()
          .startsWith(searchItem.toLowerCase().trim())
      );
      setFilteredProducts(filtered);
    }
  };

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

  const displayedProducts = showMore
    ? filteredProducts
    : filteredProducts.slice(0, 4);
  const displayedProducts1 = showMore1
    ? filteredProducts
    : filteredProducts.slice(0, 4);
  const displayedProducts2 = showMore2
    ? filteredProducts
    : filteredProducts.slice(0, 4);
  const displayedProducts3 = showMore3
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <div>
      <HeroSectionCategories handleSearch={handleSearch} isLoading={loading} />
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
          {loading ? (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className="no-product-found">No Product Found</p>
          ) : (
            <div className="categoryproducts">
              {/* First Displayed Product */}
              {displayedProducts.map((product) => (
                <div key={product._id}>
                  <div className="firstproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
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
                      <div className="innerproducts1">
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
          )}
        </div>
        <p onClick={handleSeeMore} className="seemorecart">
          {showMore ? "Show Less" : "See More"}
        </p>
        {/* Additional sections for other product categories */}
        {/* Second Displayed Product */}
        <div>
          <h2 className="categorywings">Grilled Chicken Caesar Salad</h2>
          {loading ? (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className="no-product-found">No Product Found</p>
          ) : (
            <div className="categoryproducts">
              {displayedProducts1.map((product) => (
                <div key={product._id}>
                  <div className="firstproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
                      <Ratings productId={product._id} />
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
          )}
        </div>
        <p onClick={handleSeeMore1} className="seemorecart">
          {showMore1 ? "Show Less" : "See More"}
        </p>
        {/* Third Displayed Product */}
        <div>
          <h2 className="categorywings">Chicken Noodles Soup</h2>
          {loading ? (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className="no-product-found">No Product Found</p>
          ) : (
            <div className="categoryproducts">
              {displayedProducts2.map((product) => (
                <div key={product._id}>
                  <div className="firstproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
                      <Ratings productId={product._id} />
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
          )}
        </div>
        <p onClick={handleSeeMore2} className="seemorecart">
          {showMore2 ? "Show Less" : "See More"}
        </p>
        {/* Fourth Displayed Product */}
        <div>
          <h2 className="categorywings">Grilled Chicken Breast</h2>
          {loading ? (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className="no-product-found">No Product Found</p>
          ) : (
            <div className="categoryproducts">
              {displayedProducts3.map((product) => (
                <div key={product._id}>
                  <div className="firstproduct">
                    <img
                      className="productsimg"
                      src={product.itemImage}
                      alt={product.itemName}
                    />
                    <div className="innerproducts1">
                      <Ratings productId={product._id} />
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
          )}
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
