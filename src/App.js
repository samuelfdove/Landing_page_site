import React from 'react';
import firebase from 'firebase/compat/app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
import Myboard from './myboard';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import { useEffect, useRef, useState } from 'react';

firebase.initializeApp({
  apiKey: "AIzaSyB3WWYgfm-j-gBEbrSp5H0EBWVN-w1KIFE",
  authDomain: "fswebsite1-63e95.firebaseapp.com",
  projectId: "fswebsite1-63e95xxxx",
  storageBucket: "fswebsite1-63e95.appspot.com",
  messagingSenderId: "743403913631",
  appId: "1:743403913631:web:62e23ba9a6ff8dad24bdaa",
  measurementId: "G-NQ0JTW2KLE"
})

function Header() {
  return(
    <Helmet>
      <title>Samuel Dove!</title>
      <meta name="description" content="Hello" />
      
      <script src="jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </Helmet>
  )
}

function Navbarr() {
  return(
  <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Samuel Dove</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/playchess">Play Chess</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
              </li>
              
            </ul>
            
          </div>
        </div>
    </nav>
  );
}

function Resume() {
  //TODO: restructure this to resize for each screen

  const [windowDimensions,detectResize] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectResize({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize',detectSize)

    return () => {
      window.removeEventListener('resize',detectSize)
    }
  }, [windowDimensions])

  return(
    <iframe src="https://drive.google.com/file/d/1Bxi6g5Bl8fyLWFcpvivkWMn8Fly72EdT/preview" width={windowDimensions.winWidth} height={windowDimensions.winHeight} allow="autoplay"></iframe>
  )
}


function App() {



  return (
    <Router>
      <div>
        <Header />
        <Navbarr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path='/playchess' element={<Myboard />} />

          <Route path='/resume' element={<Resume />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
