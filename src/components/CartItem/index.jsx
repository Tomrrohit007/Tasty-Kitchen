import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./index.css";
import {useAnimation, motion as m} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const itemVariants = {
  initial:{
    opacity:0,
    y:-30
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:0.4,
      delay:0.12
    }
  },
  exit:{
    opacity: 0,
  }
}



function CartItem(props) {
  const { eachCartItem, increBtn, decreBtn, removeItemFromCart} = props;
  const { id, cost, count, name, imageUrl } = eachCartItem;
  const [itemCount, setItemCount] = useState(count);
  
  const controls = useAnimation()
  const [ref, inView] = useInView({rootMargin:"-140px 0px"})
  
  useEffect(()=>{
    if(inView){
      controls.start("visible")
    }
  }, [inView, controls])
  

  const onDecreasebtn = () => {
    if (itemCount > 1) {
      setItemCount((prev) => prev - 1);
      decreBtn(id);
    }
  };

  const onIncreasebtn = () => {
    setItemCount((prev) => prev + 1);
    increBtn(id);
  };

  const foodQuantity = () => {
    return (
      <span className="food-quantity btnns">
        <button className="buttons" onClick={onDecreasebtn}>
          <BiMinus className="minus-icon" />
        </button>
        {itemCount}
        <button className="buttons" onClick={onIncreasebtn}>
          <BsPlus className="plus-icon" />
        </button>
      </span>
    );
  };

  return (
      <m.li
        variants={itemVariants}
        animate={controls}
        ref={ref}
        initial="initial"
        exit="exit"
        className="cart-item"
      >
        <span className="image-name-cont">
          <img src={imageUrl} alt="" className="cart-img" />
          <h1 className="cart-item-name">{name}</h1>
        </span>
        {foodQuantity()}
        <p className="food-cost cart-item-cost">₹ {itemCount * cost}.00</p>
        <button className="delete-btn" onClick={() => removeItemFromCart(id)}>
          <AiFillDelete className="delete-icon" />
        </button>
      </m.li>
  );
}
export default CartItem;
