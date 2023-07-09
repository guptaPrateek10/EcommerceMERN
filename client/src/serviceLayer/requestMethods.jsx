import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTkyMjg1ZGMyMzQwMjFkMTRjNWNkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODg4ODQxNSwiZXhwIjoxNjg5MTQ3NjE1fQ.nqrZhTq0nP6glmykjy3kWoDfnWsvZ9zN0p4tchesUlw";

export const publicRequests = axios.create({
  baseURL: BASE_URL,
});
export const userRequests = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
