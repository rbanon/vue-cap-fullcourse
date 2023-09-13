import axios from "axios";

const journalApi = axios.create({
  baseURL:
    "https://vue-demos-2c80f-default-rtdb.europe-west1.firebasedatabase.app",
});

journalApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("idToken");
  if (token) {
    config.params = { auth: token };
  }
  return config;
});

// console.log(process.env.NODE_ENV); // TEST durante testing

export default journalApi;
