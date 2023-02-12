import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItemCard";
import Carausel from "../Carausel";
import Footer from "../Footer";
import { TailSpin } from "react-loader-spinner";
import { BsFilterLeft } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Cookies from "js-cookie";
import "./index.css";


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
  }
];
function Home() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setLoading] = useState(false)

  const decreaseIndex = () => {
    if(activePage>1){
      setActivePage((prev) => prev - 1)
    };
  };
  const increaseIndex = () => {
    if(activePage<4){
      setActivePage((prev) => prev + 1)
    }
  };

  //Restaurant List API Call
  useEffect(() => {
    const getRestaurantList = async () => {
      setLoading(true)
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
        setLoading(false)
    };
    getRestaurantList();   //Calling API Func
  }, [sortBy, activePage]);




  //filter Section
  const FilterCont = () => {
    return (
      <div className="items-cont">
        <div className="upper-section">
          <div>
            <h1 className="restaurants-heading">Popular Restaurants</h1>
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

  const fullView=()=>{
   return <div className="home-cont">
      <Carausel />
      {FilterCont()}
      <div className="item-list-cont">
        <ul className="items-list">
          {restaurantList.map((each) => (
            <FoodItem details={each} key={each.id} />
          ))}
        </ul>
        <div className="pagination-cont">
          <button className="previous-btn" onClick={decreaseIndex}>
            <GrPrevious className="arrow" />
          </button>
          <p className="pagination-para">{activePage} of 4</p>
          <button className="next-btn" onClick={increaseIndex}>
            <GrNext className="arrow" />
          </button>
        </div>
      </div>
      <Footer/>
    </div>

  }

  const loader = ()=>{
    return <div className="loader-cont">
              <TailSpin
          height="80"
          width="80"
          color="#F7931E"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
    </div>
  }

  // main render
  return (
    <>
    {isLoading?(loader()):(fullView())}
    </>
  )
}

export default Home;
