import React, { useEffect, useState } from "react";
import "../../components/ratings/Ratings.css";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";

const Ratings = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/rating/item1");
        const product = await response.data;

        setRating(product.rating);
      } catch (error) {
        setError("Oops! Something went wrong. Please refresh.");
      }
    };
    fetchData();
  }, []);

  const handleRating = async (newRating, productId) => {
    setRating(newRating);
    try {
      const { data } = await axiosInstance.post("/api/rating", {
        rating: newRating,
        productId,
      });
      toast.success("Rating Submitted!");

      console.log(data);
    } catch (error) {
      toast.error("Rating Submission failed.");
      console.log(error);
    }
  };
  return (
    <div className="ratings-container">
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star filled" : "star"}
            onClick={() => handleRating(star, productId)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
