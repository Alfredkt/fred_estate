import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-key': '4f9eed92b0mshfa5338b290a8878p1e8920jsn4320dee3ed4d',
      'x-rapidapi-host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}