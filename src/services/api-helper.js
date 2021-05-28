import axios from 'axios'

const baseURL = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: baseURL
})

export let getData = async () => {
  let response = await api.get()
  return response
}