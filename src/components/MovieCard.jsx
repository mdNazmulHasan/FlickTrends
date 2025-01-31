import PropTypes from "prop-types";

const MovieCard = ({
  movie: { poster_path, title, vote_average, release_date, original_language },
}) => {
  // Helper function to format the release year
  const getReleaseYear = (date) => (date ? date.split("-")[0] : "n/a");

  // Helper function to format the vote average
  const getVoteAverage = (vote) => (vote ? vote.toFixed(1) : "n/a");
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
        loading="lazy"
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="/star.svg" alt="star icon" />
            <p>{getVoteAverage(vote_average)}</p>
            <span>•</span>
            <p className="lang">{original_language}</p>
            <span>•</span>
            <p className="year">{getReleaseYear(release_date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    original_language: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
