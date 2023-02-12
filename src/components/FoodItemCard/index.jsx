import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function FoodItem(props) {
  const { details } = props;
  const { id, name, imageUrl, rating, totalReviews, cuisine } = details;
  return (
    <Link to={`/restaurant/${id}`} className="links">
      <li className="item-cont">
        <img src={imageUrl} alt="" className="items-img" />
        <div className="text-content">
          <h1 className="item-name">{name}</h1>
          <p className="item-type">{cuisine}</p>
          <span className="rating">
            <AiFillStar color="#FFCC00" />
            <p className="rating-average">{rating}</p>
            <p className="reviews-count">({totalReviews} reviews)</p>
          </span>

        </div>

      </li>
    </Link>
  )
}

export default FoodItem;
