import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";
import {motion as m } from "framer-motion";

const parentVariants = {
  initial: {
    scale: 0.4,
    opacity: 0.2,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 12,
      staggerChildren: 0.04,
      when: "beforeChildren",
    },
  }
};

const mainVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};


const formVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.6,
      duration:0.1,
      damping: 11,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  initial: { opacity: 0, y: 30 },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.6,
      damping: 11,
    },
  },
  focus:{
    borderBottom:"2px solid #b3b0af", y:-5
  }
};

const LoginPage = () => {
  let navigate = useNavigate();
  const [isWrongPwd, changePwdState] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onLoginClicked = async (event) => {
    event.preventDefault();

    const userData = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userData),
    };
    const response = await fetch("https://apis.ccbp.in/login", options);

    if (response.ok) {
      changePwdState(false);
      const fetchData = await response.json();
      Cookies.set("jwt_token", fetchData.jwt_token, { expires: 30 });
      navigate("/");
    } else {
      changePwdState(true);
    }
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

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
      className="login-page"
    >
      <div className="left-cont">
        <m.div
          className="login-cont"
          variants={parentVariants}
          animate="animate"
          initial="initial"
        >
          <m.img
            variants={childVariants}
            src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675343273/login_logo_lw9aq0.png"
            alt=""
            className="logo"
          />
          <m.p variants={childVariants} className="name">
            Tasty Kitchens
          </m.p>
          <m.h1 variants={childVariants} className="login">
            Login
          </m.h1>
          <m.form variants={formVariants} className="form" onSubmit={onLoginClicked}>
            <m.label variants={childVariants} className="label">
              Username
            </m.label>
            <m.input
              variants={childVariants}
              whileFocus="focus"
              type="text"
              className="input"
              onChange={onChangeUsername}
            />
            <m.label variants={childVariants} className="label">
              Password
            </m.label>
            <m.input
              variants={childVariants}
              whileFocus="focus"
              type="password"
              className="input"
              onChange={onChangePassword}
            />
            {isWrongPwd && (
              <p className="err-msg">
                Please enter a valid Username & Password
              </p>
            )}
            <m.button
              whileTap={{scale:0.9}}
              whileHover={{scale:1.03}}
              variants={childVariants}
              className="login-btn"
              type="submit"
            >
              Login
            </m.button>
          </m.form>
        </m.div>
      </div>
      <m.img
        initial={{ x: "70vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", mass: 0.6, damping: 13 }}
        src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675343283/login_page_v2sgt6.svg"
        alt=""
        className="login-page-img"
      />
    </m.div>
  );
};

export default LoginPage;
