import { Formik, Form, Field } from "formik";
import css from "./MoviesPage.module.css";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovieOnKeyWord } from "../../api-query";

const MoviesPage = () => {
  const initialValues = {
    movieQuery: "",
  };

  const [query, setQuery] = useState("");
  const [dataMovie, setDataMovie] = useState([]);

  const handleSubmit = (values) => {
    if (!values.movieQuery) {
      toast.error("Field is empty, please enter your query...");
      return;
    }
    setQuery(values.movieQuery);
  };

  useEffect(() => {
    try {
      const searchMovie = async () => {
        if (!query) return;
        const { data } = await searchMovieOnKeyWord(query);

        setDataMovie(data.results);
      };

      searchMovie();
    } catch (error) {
      toast.error(error);
    }
  }, [query]);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="movieQuery"
            placeholder="Enter movie title"
          />
          <button className={css.subbtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>

      <MovieList movies={dataMovie} query={query} />
    </div>
  );
};

export default MoviesPage;