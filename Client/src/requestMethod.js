import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjFiODEzMDMyN2U5MWRiNWZjNmVjNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjMxNTQyMzIsImV4cCI6MTY2MzQxMzQzMn0.HaPORaUQyx6pkpFU9upJqiCUagvvlDaJlKFv22vy5yY"

export const publicRequest =axios.create({
baseURL: BASE_URL,
})
export const userRequest =axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});