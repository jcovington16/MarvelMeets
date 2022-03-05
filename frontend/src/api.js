import axios from 'axios'

export const marvelMeets = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})