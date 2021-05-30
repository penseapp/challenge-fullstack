import axios from 'axios'

const api = axios.create({
  baseURL: 'http://vs-store-api.herokuapp.com'
})

const STORAGE_URL = 'https://res.cloudinary.com/vswerts/image/upload/v1622393484'

export default api

export { STORAGE_URL }
