import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import "./index.css";
import {useAnimation, motion as m} from "framer-motion"
import { useInView } from "react-intersection-observer";




function AvailableFood(props) {
  const { foodItemData, onAddToList, onIncreaseCount, onDecreaseCount, index } = props;
  const { cost, name, imageUrl, rating, id } = foodItemData;
  
  const [count, setCount] = useState(1);
  const [foodAdded, changeState] = useState(false);
  
  const controls = useAnimation()
  const [ref, inView] = useInView({rootMargin:"-100px 0px"})
  
  const itemVariants = {
    initial:{
      opacity:0,
      y:"10vh"
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.4,
        delay:0.12*index
      }
    }
  }
  useEffect(()=>{
    if(inView){
      controls.start("visible")
    }
  }, [inView, controls])


  const onClickPlus = () => {
    setCount((prev) => prev + 1);
    onIncreaseCount(id)
  };

  const onClickMinus = () => {
    count > 1 && setCount((prev) => prev - 1) 
    count ===1 && changeState(false)
    onDecreaseCount(id)
  };

  const onAddToCart = () => {
    changeState(true);
    const item = {
      id,
      name,
      cost,
      count,
      imageUrl,
    };
    onAddToList(item)
  }

  const foodQuantity = () => {
    return (
      <span className="food-quantity">
        <button className="buttons" onClick={onClickMinus}>
          <BiMinus className="minus-icon" />
        </button>
        {count}
        <button className="buttons" onClick={onClickPlus}>
          <BsPlus className="plus-icon" />
        </button>
      </span>
    );
  };

  return (
    <m.li variants={itemVariants} animate={controls} initial="initial" ref={ref} className="food-item">
      <img src={imageUrl} alt="" className="food-img" />
      <div className="text-cont">
        <p className="food-name">{name}</p>
        <p className="food-cost">₹ {cost}.00</p>
        <p className="food-rating">
          <AiFillStar style={{ paddingRight: 8 }} color="#FFCC00" /> {rating}
        </p>
        {foodAdded === false ? (
          <m.button
            whileHover={{ y: -3 }}
            className="add-btn"
            onClick={onAddToCart}
          >
            Add
          </m.button>
        ) : (
          foodQuantity()
        )}
      </div>
    </m.li>
  );
}
export default AvailableFood;
