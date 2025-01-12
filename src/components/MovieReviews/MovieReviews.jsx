import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getReviewsMovie } from "../../api-query";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviewMovie, setReviewMovie] = useState([]);

  useEffect(() => {
    try {
      const queryMovieReviews = async () => {
        const {
          data: { results },
        } = await getReviewsMovie(moviesId);
        setReviewMovie(results);
      };
      queryMovieReviews();
    } catch (error) {
      toast.error(error);
    }
  }, [moviesId]);

  return (
    <div>
      {reviewMovie.length ? (
        <ul className={css["reviews-list"]}>
          {reviewMovie.map((item, index) => (
            <li key={index} className={css["reviews-item"]}>
              <h3>
                {index + 1}. User: {item.author}
              </h3>
              <p style={{ maxWidth: "95%" }}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css["no-reviews-err"]}>No information about reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;