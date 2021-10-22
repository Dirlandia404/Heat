import axios from "axios";

const api = axios.create({
  baseURL: "hhtp://localhost:3000",
});

export { api };
