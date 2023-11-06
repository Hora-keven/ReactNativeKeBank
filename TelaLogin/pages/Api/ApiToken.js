import axios from "axios"
import { ApiContext } from "../context/APicontext";
import { useContext } from "react";

function returnToken(){
    const {token} = useContext(ApiContext)
    return token
  }
  
const headersToken = {
  
    'Content-Type': 'application/json',
    'Accept':'application/json',
    "Authorization":`Token ${returnToken}`
  
  };
const apiWithToken = axios.create({
    baseURL:"http://10.109.71.20:8080/api/version1/",
    headers:headersToken
  })
  