import React from "react";
import "../components/HeroSectionCategories.css";
import { IoMdSearch } from "react-icons/io";

const HeroSectionCategories = ({ handleSearch, isLoading }) => {
  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

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
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionCategories;
