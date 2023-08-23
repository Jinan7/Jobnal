import axios from 'axios'


const fetchUtil = axios.create({
    baseURL:'/api/v1'
})

export default fetchUtil