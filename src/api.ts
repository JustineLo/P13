import axios from "axios";

const API_BASE_URL = 'http://localhost:3001/api/v1';

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_BASE_URL}/user/login`, {
    email,
    password,
  })
    return response.data;
}

export async function getProfile(token: string) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
    } catch (error) {
      throw error
    }
  }
  

export async function setProfile(inputs: {
  firstName: string,
  lastName: string,
}, token: string){
  try {
    const response = await axios.put(
      `${API_BASE_URL}/user/profile`,
      inputs, 
      { headers: {
        Authorization: `Bearer ${token}`,
      }});
    return response.data;
  } catch (error) {
    throw error;
  }
};