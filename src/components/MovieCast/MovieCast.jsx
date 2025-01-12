import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovie } from "../../api-query";
import toast from "react-hot-toast";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {
    try {
      const queryMovieCast = async () => {
        const {
          data: { cast },
        } = await getCastMovie(moviesId);

        setCastMovie(cast);
      };
      queryMovieCast();
    } catch (error) {
      toast.error(error);
    }
  }, [moviesId]);

  return (
    <div>
      {castMovie.length ? (
        <ul className={css["actor-list"]}>
          {castMovie.map((item, index) => (
            <li key={index}>
              <div className={css["actor-container"]}>
                <p>
                  <strong>Role:</strong> {item.character} -{" "}
                  <strong>Actor:</strong> {item.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css["no-reviews-err"]}>No information about actors</p>
      )}
    </div>
  );
};

export default MovieCast;