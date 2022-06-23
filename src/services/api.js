import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-habits.herokuapp.com/",
});


export const api_Phrases = axios.create({
  baseURL: "https://positive-vibes-api.herokuapp.com/quotes/random/",
});