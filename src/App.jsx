import React, { Suspense, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

const LoginPage = React.lazy(() => import("./components/LoginPage"));
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./components/Home"));
const Cart = React.lazy(() => import("./components/Cart"));
const ItemDetailed = React.lazy(() => import("./components/ItemDetailed"));
const NotFound = React.lazy(() => import("./components/NotFound "));
const PaymentPage = React.lazy(() => import("./components/PaymentPage"));


function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
      window.scrollTo(0, 0); 
  }, [pathname]);

  return (
    <div className="app-main-cont">
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute Comp={Header} />}>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/restaurant/:id" element={<ItemDetailed />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
