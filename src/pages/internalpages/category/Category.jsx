import { useEffect, useState } from "react";
import { rice, burger, dip, chicken, pizza } from "../../../assets";
import arrow from "../../../assets/arrow 2.svg";
import Cart from "../../../components/Cart/Cart";
import axiosInstance from "../../../utils/axiosInstance";
import Ratings from "../../../components/ratings/Ratings";
import { FaSpinner } from "react-icons/fa";
import "../category/Category.css";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        const products = await response.data;
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError("Oops! Something went wrong, please refresh.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayedProducts = products.slice(0, 4);
  const displayedProducts1 = products.slice(0, 4);
  const displayedProducts2 = products.slice(0, 4);
  const displayedProducts3 = products.slice(0, 4);
  return (
    <div className="w-full flex mx-auto">
      <div className="pl-[18rem] px-[5rem] w-full py-[7rem]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-[#0C513F] font-semibold">Category</h1>
          <div className="flex items-center gap-4">
            <h2 className="text-[#073126] text-[18px] font-medium">
              Filter By Restaurant
            </h2>

            <div className="flex items-center border py-1 px-3 gap-2 bg-[#FF7834] border-[#FF7834] text-white rounded-md">
              <button className="text-[14px]">Muna `Bee&apos;s` Kitchen</button>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-full mt-8 gap-[2rem] text-base">
          <div className="flex flex-col items-center gap-3">
            <img src={chicken} alt="chicken" className="md:w-[13rem]" />
            <p>Chicken</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={dip} alt="dip" className="w-[13rem]" />
            <p>Sea Food</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={rice} alt="rice" className="md:w-[13rem]" />
            <p>Rice</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={pizza} alt="pizza" className="md:w-[13rem]" />
            <p>Pizza</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={burger} alt="burger" className="md:w-[13rem]" />
            <p>Burger</p>
          </div>
        </div>
        <div className="border-b mt-5 border-gray-300" />

        <div>
          <div>
            <h2 className="categorywings">Chicken Wings</h2>
            {loading ? (
              <div className="spinner-container">
                <FaSpinner className="spinner" />
              </div>
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
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Additional sections for other product categories */}
          {/* Second Displayed Product */}
          <div>
            <h2 className="categorywings">Grilled Chicken Caesar Salad</h2>
            {loading ? (
              <div className="spinner-container">
                <FaSpinner className="spinner" />
              </div>
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
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Third Displayed Product */}
          <div>
            <h2 className="categorywings">Chicken Noodles Soup</h2>
            {loading ? (
              <div className="spinner-container">
                <FaSpinner className="spinner" />
              </div>
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
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ends here */}
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default Category;
