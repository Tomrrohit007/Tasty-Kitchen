import {useState} from 'react'

import { Link, useNavigate, Outlet, Navigate, useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"
import { CartGlobal } from '../CartContext/cartListContext'

function Header() {

  const {cartList} = CartGlobal()
  const cartCount = cartList.length

  let navigate = useNavigate()
  let location = useLocation()
  const [activeRoute, changeRoute] = useState(location.pathname)
  
  const onClickLogout=()=>{
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  const onClickHome=()=>{
    changeRoute("/")
  }

  const onClickCart=()=>{
    changeRoute("/cart")
  }

  
  const jwtToken = Cookies.get("jwt_token")
  if(jwtToken===undefined){
    return <Navigate replace to="/login" />
  }
  
  const onClickLogo=()=>{
    navigate("/")
    changeRoute(location.pathname)
  }
  
  return (
    <>
    <nav className='main-nav'>
      <div className='header-main-cont'>

      <button className='nav-bar' onClick={onClickLogo}>
        <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675343273/login_logo_lw9aq0.png" alt="" className="header-img" />
        <p className='name'>Tasty Kitchens</p>
      </button>
      <ul className='links'>
        <Link className='linkss' to="/" >
          <li className="nav-links home" >
            <button className={activeRoute==="/"? "active":""} onClick={onClickHome}>
              Home
            </button>
            </li>
        </Link>
        <Link className='linkss' to="/cart">
          <li className="nav-links cart" >
          <button className={activeRoute==="/cart"?"active":""} onClick={onClickCart}>
              Cart {cartCount>0  && <span className='cart-count'>{cartCount}</span>}
            </button>
          </li>
        </Link>
        <li className="nav-links">
          <button className='logout-btn' onClick={onClickLogout}>Logout</button>
        </li>
      </ul>
      </div>
    </nav>
      <Outlet/>
      </>

  )
}

export default Header
