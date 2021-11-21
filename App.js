import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'

import ShareBnbApi from './api';
import UserContext from './UserContext';

import Routes from "./Routes";

const ASYNC_STORAGE_TOKEN_KEY = "token";

function App() {
  const [needsInfo, setNeedsInfo] = useState(true);
  const [needsRedirect, setNeedsRedirect] = useState(false);
  // const [token, setToken] = useState(AsyncStorage.getItem(ASYNC_STORAGE_TOKEN_KEY));
   const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  console.debug(
    "App",
    "needsInfo=", needsInfo,
    "currentUser=", currentUser,
    "token=", token,
    "needsRedirect=", needsRedirect,
  );

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          try{ 
            let { username } = jwt_decode(token);
            ShareBnbApi.token = token;
            let resultUser = await ShareBnbApi.getCurrentUser(username);
            setCurrentUser(resultUser);
            setNeedsRedirect(false);
            setNeedsInfo(false);
          } catch (err) {
            console.log(err);
          }
          // put the token on the Api class so it can use it to call the API.
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  /** Handles site-wide signup.
   *
   *  Automatically logs them in (set token) upon signup, sets 
   *  AsyncStorage with the token and sets needsRedirect state
   *  to true.
   */
  async function handleSignUp(signUpData) {
    try {
      let token = await ShareBnbApi.signUp(signUpData);
      ShareBnbApi.token = token;
      setToken(token);
      setNeedsRedirect(true);
      // await AsyncStorage.setItem(ASYNC_STORAGE_TOKEN_KEY, token);
    } catch (err) {
      console.log(err);
    }
  }

  /** Handles site-wide login.
   *
   *  Logs in a user, sets AsyncStorage with token and sets 
   *  needsRedirect state to true.
   */
  async function handleLogin(loginData) {
    try {
      let token = await ShareBnbApi.login(loginData);
      ShareBnbApi.token = token;
      setToken(token);
      setNeedsRedirect(true);
      // await AsyncStorage.setItem(ASYNC_STORAGE_TOKEN_KEY, token);
    } catch (err) {
      console.log(err);
    }
  }

  /** Handles site-wide logout. 
   * 
   *  Sets currentUser and token to null and removes the token
   *  from AsyncStorage.
  */
  function handleLogout() {
    setCurrentUser(null);
    setToken(null);
    // AsyncStorage.removeItem(ASYNC_STORAGE_TOKEN_KEY);
  }

  return (
    <UserContext.Provider 
      value={{ 
        currentUser, 
        handleLogin, 
        handleSignUp, 
        handleLogout 
      }}>
      <Routes />
    </UserContext.Provider>
  );
}

export default App;

