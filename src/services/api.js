import axios from "axios";

export const api_habits = axios.create({
  baseURL: "https://kenzie-habits.herokuapp.com/",
});

export const api_phrases = axios.create({
  baseURL: "https://positive-vibes-api.herokuapp.com/",
});
