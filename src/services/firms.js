

import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/firms`)
  return request.then(response => response.data)
}

const getFirm = (name) => {
  const request = axios.get(`${baseUrl}/firm_products/all/${name}`)
  return request.then(response => response.data)
}


export default { getAll, getFirm }