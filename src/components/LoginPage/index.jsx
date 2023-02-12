import {useState, useEffect} from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"
const LoginPage =()=>{
  
  let navigate = useNavigate()
  const [isWrongPwd, changePwdState] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  
  const onChangeUsername = event=>{
    setUsername(event.target.value)
  }
  
  const onChangePassword = event=>{
    setPassword(event.target.value)
  }
  
  const onLoginClicked=async event=>{
    event.preventDefault()
    
    const userData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData)
    }
    const response = await fetch("https://apis.ccbp.in/login", options)

    if(response.ok){
      changePwdState(false)
      const fetchData = await response.json()
      Cookies.set("jwt_token", fetchData.jwt_token, {expires:30})
      navigate("/")
    }
    else{
      changePwdState(true)
    }
    
}


  const jwtToken = Cookies.get("jwt_token")
  if(jwtToken!==undefined){
      return <Navigate replace to="/" />
  }


  return (
    <div className='login-page'>
      <div className='left-cont'>
        <div className='login-cont'>
            <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675343273/login_logo_lw9aq0.png" alt="" className="logo" />
            <p className='name'>Tasty Kitchens</p>
            <h1 className='login'>Login</h1>
            <form className='form' onSubmit={onLoginClicked}>
              <label className='label'>Username</label>
              <input type="text" className="input" onChange={onChangeUsername} />
              <label className="label">Password</label>
              <input type="password" className="input" onChange={onChangePassword}/>
              {isWrongPwd && <p className='err-msg'>Please enter a valid Username & Password</p>}
              <button className='login-btn' type='submit'>Login</button>
            </form>
        </div>
      </div>
      <img src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675343283/login_page_v2sgt6.svg" alt="" className="login-page-img" />
    </div>
  )
}

export default LoginPage
