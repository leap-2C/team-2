import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const backendUrl =
  "https://teams.microsoft.com/l/message/19:a7a2724b2dfc40d2ab4f354e2a0c4879@thread.v2/1744605022703?context=%7B%22contextType%22%3A%22chat%22%7D";

export const sendRequest = axios.create({ baseURL: backendUrl });
