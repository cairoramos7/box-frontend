import axios from 'axios'

const api = axios.create({
    baseURL: 'https://box-ominibackend.herokuapp.com'
})

export default api
