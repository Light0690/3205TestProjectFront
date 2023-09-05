import axios from "axios";

const instance = axios.create({
  baseURL: "https://3205testprojectback-production.up.railway.app/",
});

export default instance;
