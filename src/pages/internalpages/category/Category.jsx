import { useEffect, useState } from "react";
import { rice, burger, dip, chicken, pizza } from "../../../assets";
import arrow from "../../../assets/arrow 2.svg";
import Cart from "../../../components/Cart/Cart";
import axiosInstance from "../../../utils/axiosInstance";
import Ratings from "../../../components/ratings/Ratings";
import { FaSpinner } from "react-icons/fa";
import "../category/Category.css";

const ProductSection = ({ title, products, loading }) => (
  <div>
    <h2 className="categorywings">{title}</h2>
    {loading ? (
      <div className="spinner-container">
        <FaSpinner className="spinner" />
      </div>
    ) : (
      <div className="categoryproducts">
        {products.map((product) => (
          <div key={product._id}>
            <div className="firstproduct">
              <img
                className="productsimg"
                src={product.itemImage}
                alt={product.itemName}
              />
              <div className="innerproducts1">
                <Ratings productId={product._id} />
                <p className="text-black">{product.itemName}</p>
                <small className="text-black">Mcdonalds</small>
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
);

const Category = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/product");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Oops! Something went wrong, please refresh.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayedProducts = products.slice(0, 4); // Adjust slices for different sections if needed

  return (
    <div className="w-full flex mx-auto">
      <div className="sm:pl-[18rem] sm:px-[2rem] px-5 w-full sm:py-[7rem] py-[2rem] pt-[10rem]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-[#0C513F] font-semibold">Category</h1>
          <div className="sm:flex items-center gap-4">
            <h2 className="text-[#073126] text-[18px] font-medium">
              Filter By Restaurant
            </h2>

            <div className="flex items-center border py-1 px-3 gap-2 bg-[#FF7834] border-[#FF7834] text-white rounded-md">
              <button className="text-[14px]">Muna Bee&apos;s Kitchen</button>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <ProductSection
          title="Chicken Wings"
          products={displayedProducts}
          loading={loading}
        />
        <ProductSection
          title="Grilled Chicken Caesar Salad"
          products={displayedProducts}
          loading={loading}
        />
        <ProductSection
          title="Chicken Noodles Soup"
          products={displayedProducts}
          loading={loading}
        />
      </div>

      <Cart />
    </div>
  );
};

export default Category;
