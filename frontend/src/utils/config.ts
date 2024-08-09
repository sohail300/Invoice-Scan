import axios from "axios";

// export const BACKEND_URL = "http://localhost:3000";
export const BACKEND_URL = "https://backend-pdf-extractor.heysohail.me";

export const api = axios.create({
  baseURL: BACKEND_URL,
});
