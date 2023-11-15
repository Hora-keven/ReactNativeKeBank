import axios from "axios"




const headers = {
  
    'Content-Type': 'application/json',
    'Accept':'application/json',
  
  };


 const api = axios.create({
  
    baseURL:"http://192.168.0.106:8080/api/version1/",
    headers:headers
})



export default api