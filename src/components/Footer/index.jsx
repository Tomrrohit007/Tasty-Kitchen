import "./index.css"
import {GrFacebook, GrTwitter} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs"
import {FaPinterestSquare} from "react-icons/fa"
function Footer(){
    return(
        <div className="footer">
            <span className="footer-logo">
                <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675691566/Zomato%20clone/Vector_cgrwrw.svg" alt="" className="footer-image" />
                <h1 className="tasty-logo-heading">Tasty Kitchen</h1>
            </span>
            <p className="footer-para">The only thing we're are serious about is food.</p>
            <p className="contact">Contact us on</p>
            <div className="icons">
                <FaPinterestSquare className="insta-icon" />
                <BsInstagram className="insta-icon"/>
                <GrTwitter className="footer-icon"/>
                <GrFacebook className="footer-icon" />
            </div>
        </div>
    )
}

export default Footer