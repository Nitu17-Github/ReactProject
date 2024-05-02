
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Header from "../../Component/Navbar/Header";
import Home from "../Home/Home";
import About from "../About/About"

import React from 'react'

function Rootroute() {
  return (
    <section className="mainsection">
        <Router>
            <Header></Header>
            <Routes>
              {/* <Route path="" element={<Home />} /> */}

                <Route path = "/home"element={<Home/>}/>
                <Route path= "/about" element = {<About/>}/>
            </Routes>
        </Router>
    </section>
  )
}

export default Rootroute