import React from "react";
import "../components/HeroSectionCategories.css";
import { IoMdSearch } from "react-icons/io";

const HeroSectionCategories = () => {
  return (
    <div>
      <div className="heroCategory">
        <p>You can search for restaurants and varieties of food</p>
        <div className=" search-input">
          <IoMdSearch className="searchIcon" />
          <IoMdSearch className="searchIconDesktop" />
          <input
            className="inputCategory"
            type="text"
            placeholder="Search for food..."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionCategories;
