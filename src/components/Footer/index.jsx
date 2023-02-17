import "./index.css"
import {GrFacebook, GrTwitter} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs"
import {FaPinterestSquare} from "react-icons/fa"

import {useAnimation, motion as m} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const itemVariants = {
  initial:{
    opacity:0,
    height:"0%"
  },
  visible:{
    opacity:1,
    height:"100%",
    transition:{
      duration:0.5,
      delay:0.12
    }
  }
}



function Footer(){
    const controls = useAnimation()
    const [ref, inView] = useInView({rootMargin:"-140px 0px"})

    useEffect(()=>{
        if(inView){
            controls.start("visible")
        }
    }, [inView, controls])

    return(
        <m.div variants={itemVariants} animate={controls} initial="initial" ref={ref} className="footer">
            <span className="footer-logo">
                <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675691566/Zomato%20clone/Vector_cgrwrw.svg" alt="" className="footer-image" />
                <h1 className="tasty-logo-heading">Tasty Kitchen</h1>
            </span>
            <p  className="footer-para">The only thing we're are serious about is food.</p>
            <p className="contact">Contact us on</p>
            <div className="icons">
                <FaPinterestSquare className="insta-icon" />
                <BsInstagram className="insta-icon"/>
                <GrTwitter className="footer-icon"/>
                <GrFacebook className="footer-icon" />
            </div>
        </m.div>
    )
}

export default Footer