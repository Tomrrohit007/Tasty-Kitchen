import "./index.css"
import { useNavigate } from "react-router-dom"

function NotFound(){
    let navigate = useNavigate()
    return(
        <div className="not-found-cont main-container">
            <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675755834/Zomato%20clone/erroring_1_rvazju.png" alt="not found" />
            <h1 className="not-found-heading">Page Not Found</h1>
            <p className="not-found-para">We are sorry, the page you requested could not be found. Please go back to the homepage</p>
            <button className="home-page-btn" onClick={()=>navigate("/")}>Home Page</button>
        </div>
    )
}

export default NotFound