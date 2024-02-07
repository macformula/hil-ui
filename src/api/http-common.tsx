import axios from "axios";

export default axios.create({
  baseURL: "http://api.macformularacing.com",
  headers: {
    "Content-type": "application/json"
  }
});