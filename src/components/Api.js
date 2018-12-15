import pf from "petfinder-client";

export const petfinder = pf({
  key: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_API_SECRET
});
