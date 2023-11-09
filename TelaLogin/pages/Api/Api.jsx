import axios from "axios"




const headers = {
  
    'Content-Type': 'application/json',
    'Accept':'application/json',
  
  };


 const api = axios.create({
  
    baseURL:"http://10.234.93.228:8080/api/version1/",
    headers:headers
})



export default api