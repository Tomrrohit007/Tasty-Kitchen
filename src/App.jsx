import { Route, Routes, Navigate } from "react-router-dom"
import React, { Suspense } from "react"
import Loader from "./components/Loader"

const LoginPage = React.lazy(() => import("./components/LoginPage"))
const Header = React.lazy(() => import("./components/Header"))
const Home = React.lazy(() => import("./components/Home"))
const Cart = React.lazy(() => import("./components/Cart"))
const ItemDetailed = React.lazy(() => import("./components/ItemDetailed"))
const NotFound = React.lazy(() => import("./components/NotFound "))
const PaymentPage = React.lazy(()=>import("./components/PaymentPage"))

function App() {
  return (
    <div className="app-main-cont">
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Header />}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/restaurant/:id" element={<ItemDetailed />} />
            </Route>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/payment" element={<PaymentPage/>}/>
          </Route>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
