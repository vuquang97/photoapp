import axios from "axios"

const instance = axios.create({
  baseURL: 'https://phunuvietnam-api.vti.com.vn',
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  },
})
export const postData = async (data) => {
  const res = await instance.post('generate_img', data, {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something',
    },
  })

return res
  }
  