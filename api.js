import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = 'https://vcheng33-sharebnb.herokuapp.com';

/** A class for ShareBnb API */
class ShareBnbApi {
  static token;

  /** A function to send requests to the server */
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = token 
      ? { Authorization: `Bearer ${ShareBnbApi.token}` }
      : {};
    const params = (method === "get")
      ? data
      : {};

    try {
      console.log('Inside try req', { url, method, data, params })
      let result = (await axios({ url, method, data, params, headers })).data;
      return result;
    } catch (err) {
      console.log({err});
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Takes in a listing id and returns the associated listing
  * 
  *  Returns:
  *  { id, name, street, city, state, country, description, photoUrls }
  */
  // static async getListing(id) {
  //   const result = await this.request(`listings/${id}`)
  //   return result.listing;
  // }
  static async getListing(id) {
    const result = await axios.get(`${BASE_URL}/listings/${id}`);
    return result.data.listing;
  }

  /** Takes in searchTermData and returns listings that fit the search
  *  criteria
  *
  *  Returns:
  *  [{ id, name, street, city, state, country, description, photoUrls },...]
  */
  static async getListings(searchTermData) {
    try {
      const result = await this.request(`listings/`, searchTermData)
      return result.listings;
    } catch (err) {
      console.log(err);
    }
  }

  static async getListingsDirectly(searchTermData) {
    try {
      const result = await axios.get(`${BASE_URL}/listings`, { params: searchTermData});
      return result.data.listings;
    } catch (err) {
      console.log(err);
    }

  }

  /** Takes in files and uploads files to S3.
  *
  *  Returns new listing:
  *  { id, name, street, city, state, country, description, photoUrls }
  */
  static async uploadNewListing(data) {
    const result = await this.request(`listings/`, data, "post");
    return result;
  }

  /** Deletes a listing */
  static async deleteListing(id) {
    const currentListing = await this.getListing(id);
    const result = await this.request(`listings/${id}`, { data: currentListing.username }, "delete");
    return result;
  }

  /** Takes in data about a new user and returns a token 
  */
  // static async signUp(signUpData) {
  //   const result = await this.request(`auth/register`, signUpData, "post");
  //   console.log({result});
  //   return result.token;
  // }

  static async signUp(signUpData) {
    const result = await axios.post(`${BASE_URL}/auth/register`, signUpData);
    console.log(`${BASE_URL}/auth/register`);
    console.log({ signUpData });
    console.log("token", result.data.token);
    return result.data.token;
  }

  /** Takes in data from the login form and returns a token if the inputs match
  *   the user's data
  */
  // static async login(loginData) {
  //   const result = await this.request(`auth/token`, loginData, "post");
  //   return result.token;
  // }
  static async login(loginData) {
    const result = await axios.post(`${BASE_URL}/auth/token`, loginData);
    console.log("token:", result.data.token);
    return result.data.token;
  }

  /** Takes in a username and returns the user data if the username is found
  *   in the database
  */
  // static async getCurrentUser(username) {
  //   const result = await this.request(`users/${username}`);
  //   return result.user;
  // }
  static async getCurrentUser(username) {
    const result = await axios.get(
      `${BASE_URL}/users/${username}`,
      {headers: {
        'Authorization': `Bearer ${ShareBnbApi.token}`
      }}
    );
    return result.data.user;
  }

}

export default ShareBnbApi;
