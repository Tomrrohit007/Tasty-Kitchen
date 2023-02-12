import "./index.css"
import { motion as m } from "framer-motion"
import { useNavigate } from "react-router-dom"


function PaymentPage() {
  let navigate = useNavigate()
  return (
    <m.div initial={{y:"10vh", opacity:0, scale:0.4}} animate={{y:0, opacity:1, scale:1}} transition={{type:"spring", mass:0.7, damping:12}} className="payment-cont">
      <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1676219736/Zomato%20clone/check-circle.1_1_ivhodq.svg" alt="" className="payment-img" />
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="payment-para">Thank you for ordering <br/> Your payment have Successfully completed</p>
      <button className="go-to-home" onClick={()=>navigate("/")}>Go To Home Page</button>
    </m.div>
  )
}

export default PaymentPage
