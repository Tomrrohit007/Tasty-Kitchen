import "./index.css";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const mainVariants = {
  initial: {
    y: "30",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function PaymentPage() {
  let navigate = useNavigate();
  return (
    <m.div
      variants={mainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        damping: 13,
        mass: 0.6,
        type: "spring",
        when: "beforeChildren",
        ease: "easeInOut",
      }}
      className="payment-cont main-container"
    >
      <img
        src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1676219736/Zomato%20clone/check-circle.1_1_ivhodq.svg"
        alt=""
        className="payment-img"
      />
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="payment-para">
        Thank you for ordering <br /> Your payment have Successfully completed
      </p>
      <m.button
        whileHover={{y:-4, opacity:0.8}}
        whileTap={{scale:1.01}} 
        className="go-to-home"
        onClick={() => navigate("/")}
      >
        Go To Home Page
      </m.button>
    </m.div>
  );
}

export default PaymentPage;
