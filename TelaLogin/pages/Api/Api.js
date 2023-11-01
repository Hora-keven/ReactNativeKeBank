import axios from "axios"

const api = axios.create({
    baseURL:"http://10.109.71.20:8000/api/version1/"
})

export default api