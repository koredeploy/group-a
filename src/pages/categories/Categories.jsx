import React from "react";
import HeroSectionCategories from "../../components/HeroSectionCategories";
import "../../pages/categories/Categories.css";
import foodImg1 from "../../assets/categoty food1.png";
import foodImg2 from "../../assets/Category food2.png";
import foodImg3 from "../../assets/Category food3.png";
import foodImg4 from "../../assets/category food4.png";
import foodImg5 from "../../assets/category food5.png";
import InfoPage from "../Home/InfoPage/InfoPage";

const Categories = () => {
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
      </div>
      <InfoPage />
    </div>
  );
};

export default Categories;
