import axios from "axios";

const apiKey = "bf902b2ca9db4c02b37cb565501b3167"
const headlines = "top-headlines"

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 3000,
});

export const getHeadlines = async (pageSize, page) =>{
  try {
    const response = await axiosInstance.get(headlines,{
      params :{
        pageSize:pageSize,
        page:page,
        country:"id",
        apiKey:apiKey,
      }
    });
    return response
  } catch (error) {
    return error
  }
}