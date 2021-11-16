// import jwt from "jsonwebtoken";
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

// import ShareBnbApi from './api';
// import UserContext from './UserContext';

import Routes from "./Routes";

// const LOCAL_STORAGE_TOKEN_KEY = "token";


function App() {
  // const [needsInfo, setNeedsInfo] = useState(true);
  // const [needsRedirect, setNeedsRedirect] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  // const [currentUser, setCurrentUser] = useState(null);

  // console.debug(
  //   "App",
  //   "needsInfo=", needsInfo,
  //   "currentUser=", currentUser,
  //   "token=", token,
  //   "needsRedirect=", needsRedirect,
  // );

  // useEffect(function loadUserInfo() {
  //   async function getCurrentUser() {
  //     if (token) {
  //       try {
  //         let { username } = jwt.decode(token);
  //         // put the token on the Api class so it can use it to call the API.
  //         ShareBnbApi.token = token;
  //         let resultUser = await ShareBnbApi.getCurrentUser(username);
  //         setCurrentUser(resultUser);
  //         setNeedsRedirect(false);
  //         setNeedsInfo(false);
  //       } catch (err) {
  //         console.error("App loadUserInfo: problem loading", err);
  //         setCurrentUser(null);
  //       }
  //     }
  //   }
  //   getCurrentUser();
  // }, [token]);

  return (
    // <UserContext.Provider value={currentUser}>
      <Routes/>
    // </UserContext.Provider>
  );
}

export default App;

