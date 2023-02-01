import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputForm from "./pages/App";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import Error from "./pages/ErrorPage";

function Connections() {
    return <Router>
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link style={{ color: 'white', margin: '0 10px', fontSize: '1.2em' }} to="/">Home</Link>
            <Link style={{ color: 'white', margin: '0 10px', fontSize: '1.2em' }} to="/about">About</Link>
            <Link style={{ color: 'white', margin: '0 10px', fontSize: '1.2em' }} to="/projects">Projects</Link>
        </nav>
        
        <Routes>
            <Route path ="/" element={<InputForm />}></Route>
            <Route path ="/about" element={<AboutMe />}></Route>
            <Route path ="/projects" element={<Projects />}></Route>
            <Route path="*" element={<Error />}></Route>

        </Routes>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'fixed',
            bottom: '0'
            }}>
            <footer style={{ color: 'white' }}>
                <h2 style={{ margin: '0' }}></h2>
            </footer>
        </div>
        
        
      

    </Router>;



}


export default Connections;