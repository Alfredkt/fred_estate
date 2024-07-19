import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers:  {
      'x-rapidapi-key': '643715cc10mshabfc14f4edf331bp12b3e5jsn991aece1118e',
      'x-rapidapi-host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}