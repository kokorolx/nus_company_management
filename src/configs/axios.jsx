import axios from 'axios';
//----------------------------
axios.defaults.baseURL = "https://nus-react-demo-backend.herokuapp.com"
axios.defaults.headers.common["api_key"] = "comp-1568431573-U7mA33Mr38xr8yWT4lpLQg"
// axios.defaults.baseURL = process.env.REACT_APP_API_URL
// axios.defaults.headers.common["api_key"] = process.env.REACT_APP_API_KEY
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
//----------------------------
// public axios
window.axios = axios

export default axios;
