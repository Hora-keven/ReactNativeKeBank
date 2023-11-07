import axios from "axios"

    
  
const headersToken = {
  
    'Content-Type': 'application/json',
    'Accept':'application/json',
  
  
  };
const apiWithToken = axios.create({
    baseURL:"http://10.109.71.20:8080/api/version1/",
    headers:headersToken
  })

  export default apiWithToken
  