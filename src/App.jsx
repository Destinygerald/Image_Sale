import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import dotenv from 'dotenv';
import './App.css'

import NotFound from './pages/404/Page.jsx'
import LandingPage from "./pages/landingpage/Page.jsx"
import Landing_Page from './pages/landing/Page.jsx'
import Register from './pages/register/Page.jsx'
import Login from './pages/login/Page.jsx'
import Dashboard from './pages/dashboard/Page.jsx'
import BidPopupReducer from './context/Bidpopup.jsx'
import ProfileReducer from './context/Profile.jsx'

import Topbar from './components/Topbar.jsx'
// import Lenis from "lenis"

// dotenv.config({ path: '../.env' })

const store = configureStore({
  reducer: {
    bid_popup: BidPopupReducer,
    profile: ProfileReducer
  }
})

function App() {

  // const lenis = new Lenis()

  // useEffect(() => {
  //   lenis.on('scroll', (e) => {
  //     // console.log(e)
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)

  // }, [])

  return (
    <div className="app">
      <Provider store={store}>
        <Topbar />

        <Routes>
          <Route path='/' element={<Landing_Page />} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/lp' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
