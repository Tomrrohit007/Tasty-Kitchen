import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { motion as m, AnimatePresence } from "framer-motion";
import "./index.css";

function CartItem(props) {
  const { eachCartItem, increBtn, decreBtn, removeItemFromCart, i } = props;
  const { id, cost, count, name, imageUrl } = eachCartItem;
  const [itemCount, setItemCount] = useState(count);

  const mainVariants = {
    initial: {
      opacity: 0,
      y: -30,
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      x:"30vw"
    },
  };

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
        variants={mainVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        custom={i}
        transition={{
          damping: 12,
          mass: 0.3,
          type: "spring",
          ease: "easeInOut",
          delay:i*0.2
        }}
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
