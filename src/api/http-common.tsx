import axios from "axios";

export default axios.create({
  baseURL: "https://api.macformularacing.com",
  headers: {
    "Content-type": "application/json"
  }
});