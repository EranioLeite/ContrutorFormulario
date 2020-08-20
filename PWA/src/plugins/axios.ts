var axios = require("axios");

var axiosInstance = axios.create({
  // baseURL: 'http://10.0.0.141:5000/api/',
  baseURL: "http://localhost:5000/api/",
  // baseURL: 'http://fvncional.ddns.net:5746/api/',\
  // baseURL: "http://rentcars.ramo.com.br:5000/api/",
  responseType: "json",
  responseEncoding: "utf8",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
  },
});

export default axiosInstance;
