import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/about/About';
import AllBooks from './component/allbooks/AllBooks';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Profile from './component/profile/Profile'
import Cart from './component/cart/Cart'
import Setting from './component/profile/Setting';
import Favourite from './component/profile/Favourite' 
import OrderHistory from './component/profile/OrderHistory'
import ViewBookDetail from './component/bookDetail/ViewBookDetail'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './component/store/auth';

function App() {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem('id') &&
      localStorage.getItem('token') &&
      localStorage.getItem('role')
    ) {
      dispatch(authActions.login())
      dispatch(authActions.changeRole(localStorage.getItem(role)))
    }

  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/get-book-by-id/:id" element={<ViewBookDetail />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<Profile />}>
          <Route index element={<Favourite />} />  
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="setting" element={<Setting/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
