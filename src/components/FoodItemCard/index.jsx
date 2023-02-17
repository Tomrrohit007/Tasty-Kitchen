import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useAnimation, motion as m} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function FoodItem(props) {
  const { details, i } = props
  const { id, name, imageUrl, rating, totalReviews, cuisine } = details
  const controls = useAnimation()
  const [ref, inView] = useInView({rootMargin:"-140px 0px"})
  
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
        delay:0.12*i
      }
    }
  }

  useEffect(()=>{
    if(inView){
      controls.start("visible")
    }
  }, [inView, controls])

  return (
    <Link to={`/restaurant/${id}`} className="links">
      <m.li variants={itemVariants} animate={controls} initial="initial" ref={ref} className="item-cont">
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

      </m.li>
    </Link>
  )
}

export default FoodItem;
