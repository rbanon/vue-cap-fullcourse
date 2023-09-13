import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyAEAWCQSZoVIO2v44PWP9H1Qy7x0exuz8Y",
  },
});

// console.log(process.env.NODE_ENV); // TEST durante testing

export default authApi;
