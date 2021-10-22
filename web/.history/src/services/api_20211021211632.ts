import axios from "axios";

const api = axios.create({
  baseURL: "hhtp://localhost:4000",
});

export { api };
