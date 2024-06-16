import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import AllBooks from './component/allbooks/AllBooks';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import ViewBookDetail from './component/bookDetail/ViewBookDetail'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path = "/get-book-by-id/:id" element ={<ViewBookDetail/>}/>
        <Route path = "/signup" element ={<SignUp/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
