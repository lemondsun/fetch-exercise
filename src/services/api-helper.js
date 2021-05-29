import axios from 'axios'
// uses a heroku app to solve CORS 
const baseURL = `https://radiant-bastion-31447.herokuapp.com/${process.env.REACT_APP_API}`;
const api = axios.create({
  baseURL: baseURL,
  }
)
//api call to database of items
export let getData = async () => {
  let response = await api.get( )
  return response
}

