import axios from "axios";

// export const API = axios.create({
//   baseURL: "https://rento.envisionedstrategyconsulting.tech",
// });

// export const IMAGE_URL = "https://rento.envisionedstrategyconsulting.tech";

export const API = axios.create({
  baseURL: "http://192.168.80.227:3001",
});

export const IMAGE_URL = "http://192.168.80.227:3001";

export const NEXT_PUBLIC_ADMIN_URL =
  "https://rentoadmin.envisionedstrategyconsulting.tech";
