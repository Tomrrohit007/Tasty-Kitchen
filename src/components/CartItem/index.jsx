import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import "./index.css"

function CartItem(props) {
  const { eachCartItem, increBtn, decreBtn } = props;
  const { id, cost, count, name, imageUrl } = eachCartItem;
  const [itemCount, setItemCount] = useState(count)


  const onDecreasebtn=()=>{

    if(itemCount>1){

    setItemCount((prev)=>prev-1)
    decreBtn(id)

    }

  }

  const onIncreasebtn=()=>{
    setItemCount((prev)=>prev+1)
    increBtn(id)
  }
  

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
    )
  }

  return (
    <li className="cart-item">
      <span className="image-name-cont">
        <img src={imageUrl} alt="" className="cart-img" />
        <h1 className="cart-item-name">{name}</h1>
      </span>
      {foodQuantity()}
        <p className="food-cost cart-item-cost">₹  {itemCount * cost}.00</p>
    </li>
  )
}
export default CartItem;
