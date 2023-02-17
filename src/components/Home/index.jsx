import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItemCard";
import Carausel from "../Carausel";
import Footer from "../Footer";
import Loader from "../Loader";
import { BsFilterLeft } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Cookies from "js-cookie";
import "./index.css";
import { useAnimation, motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.12,
      delay: 0.05,
    },
  },
};

const mainVariants = {
  initial: {
    y: "30",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1
  },
  exit: {
    opacity: 0,
  },
};

const sortByOptions = [
  {
    id: 1,
    displayText: "Lowest",
    value: "Lowest",
  },
  {
    id: 2,
    displayText: "Highest",
    value: "Highest",
  },
];
function Home() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ rootMargin: "-140px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const decreaseIndex = () => {
    if (activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
  };
  const increaseIndex = () => {
    if (activePage < 4) {
      setActivePage((prev) => prev + 1);
    }
  };

  //Restaurant List API Call
  useEffect(() => {
    const getRestaurantList = async () => {
      setLoading(true);
      const offset = (activePage - 1) * 9;
      const apiUrl = `https://apis.ccbp.in/restaurants-list?sort_by_rating=${sortBy}&offset=${offset}&limit=9`;
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      const fetchedData = await response.json();
      const { restaurants } = fetchedData;
      const updatedData = restaurants.map((eachItem) => ({
        name: eachItem.name,
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        rating: eachItem.user_rating.rating,
        totalReviews: eachItem.user_rating.total_reviews,
        cuisine: eachItem.cuisine,
      }));
      setRestaurantList(updatedData);
      setLoading(false);
    };
    getRestaurantList(); //Calling API Func
    window.scrollTo(0, 0)
  }, [sortBy, activePage]);

  //filter Section
  const FilterCont = () => {
    return (
      <div className="items-cont">
        <div className="upper-section">
          <div>
            <h1
              className="restaurants-heading">
              Popular Restaurants
            </h1>
            <p className="para">
              Select Your favourite restaurant special dish and make your day
              happy.
            </p>
          </div>
          <div className="filter-cont">
            <BsFilterLeft className="filter-icon" />
            <select
              className="filter"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              {sortByOptions.map((eachItem) => (
                <option
                  className="options"
                  key={eachItem.id}
                  value={eachItem.value}
                >
                  Sort by {eachItem.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <hr />
        </div>
      </div>
    );
  };

  const fullView = () => {
    return (
      <m.div
        variants={mainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          damping: 13,
          mass: 0.6,
          type: "spring",
          when: "beforeChildren",
          ease: "easeInOut",
        }}
        className="home-cont main-container"
      >
        <Carausel />
        {FilterCont()}
        <div className="item-list-cont">
          <ul className="items-list">
            {restaurantList.map((each, i) => (
              <FoodItem details={each} key={each.id} i={i % 3} />
            ))}
          </ul>
          <m.div
          variants={itemVariants}
          initial="initial"
          animate={controls}
          ref={ref}
          className="pagination-cont">
            <button className="previous-btn" onClick={decreaseIndex}>
              <GrPrevious className="arrow" />
            </button>
            <p className="pagination-para">{activePage} of 4</p>
            <button className="next-btn" onClick={increaseIndex}>
              <GrNext className="arrow" />
            </button>
          </m.div>
        </div>
        <Footer />
      </m.div>
    );
  };

  // main render
  return <>{isLoading ? Loader() : fullView()}</>;
}

export default Home;
