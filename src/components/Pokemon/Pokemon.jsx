import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Pokemon({ name, image, id }) {
  console.log("name:", name);
  console.log("image:", image);

  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-name">{name}</div>
        <div>
          <img className="pokemon-image" src={image} alt={`${name} Image`} />
        </div>
      </Link>
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string, // Allow string type
    PropTypes.number, // Allow number type
  ]).isRequired,
};
