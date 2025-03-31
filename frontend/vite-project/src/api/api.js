import AXIOS from './axios.js'

const API = AXIOS.create ({
    baseURL: 'http://localhost:5000',
})

export default API