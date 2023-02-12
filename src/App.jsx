import { Route, Routes, Navigate } from "react-router-dom"

import LoginPage from "./components/LoginPage"
import Header from "./components/Header"
import Home from "./components/Home"
import Cart from "./components/Cart"
import ItemDetailed from "./components/ItemDetailed"
import NotFound from "./components/NotFound "

function App() {
  return (
    <div className="app-main-cont">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route element={<Header/>}>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="/restaurant/:id" element={<ItemDetailed/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
        </Route>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="*" element = {<Navigate to="/not-found"/>} />
      </Routes>
  </div>
  )
}

export default App
