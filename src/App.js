import React from 'react';
import firebase from 'firebase/compat/app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useRef, useState } from 'react';

import Myboard from './myboard';
import Home from './Home';
import PoolAI from './PoolAI';
import Navbarr from './Navbarr';
import Resume from './Resume';
import Userdataset from './Userdataset';
import Piecedataset from './Piecedataset';


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

          <Route path='/poolai' element={<PoolAI />} />

          <Route path='/piecedataset' element={<Piecedataset />} />

          <Route path='/userdataset' element={<Userdataset />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
