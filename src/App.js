import './App.css'
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TestList from './components/TestList';
import Connect from "./components/Connect";
import Javabdehi from "./components/Javabdehi";
import BlogPage from "./components/BlogPage";
import Footer from './components/Footer';
import NotFound from "./components/NotFound";

// loading
import GridLoader from "react-spinners/GridLoader";

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2500)
  },[])

  return (
    <div>
      {
        loading ?
        <GridLoader className="loader"
        color={'#28449F'}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        /> :
        <>
          <Navbar />
          <Routes>
            <Route path='/' Component={LandingPage} />
            <Route path='/testlist'  Component={TestList} />
            <Route path='/connect'  Component={Connect} />
            <Route path='/javabdehi'  Component={Javabdehi} />
            <Route path='/blogpage'  Component={BlogPage} />
            <Route path="/*" Component={NotFound} />
          </Routes>
          <Footer />
        </>
      }
    </div>
  );
}

export default App;


