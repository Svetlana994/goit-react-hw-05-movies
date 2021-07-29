import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as moviesAPI from "../../services/movies-api";
import defaultImg from "../../default-images/def-avatar.png";

function Review({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function gerReviews() {
      const response = await moviesAPI.fetchMovieReview(movieId);
      setReviews(response.results);
    }
    gerReviews();
  }, [movieId]);

  return (
    reviews && (
      <>
        <div>
          {reviews.map(({ id, author, content, author_details }) => (
            <div key={id}>
              <img
                src={author_details.avatar_path}
                alt="author"
                width={200}
                onError={(e) => (e.target.src = defaultImg)}
              />
              <h3>{author}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
        {!reviews.length && (
          <h2>We don't have any reviews for this movie...</h2>
        )}
      </>
    )
  );
}

Review.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Review;
