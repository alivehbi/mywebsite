import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Navbar } from "./Navbar/navbar";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Projects } from "./Pages/Projects/projects";
  export const Routers= ()=>{
    return(
        <Router>
         <Navbar/>
            <Routes>
            <Route path="/">
           

                <Route path="/mywebsite" element = {<HomePage/>}/>
                <Route path="/projects" element = {<Projects/>}/>

            </Route>
            </Routes>
        </Router>
    )
  }