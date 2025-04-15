import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
// const backendUrl = "https://backend-five-lyart-36.vercel.app";
const backendUrl = "http://localhost:9000";


export const sendRequest = axios.create({ baseURL: backendUrl });
