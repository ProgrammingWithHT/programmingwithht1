import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '1013e6d86dmsh1bf3305c6569d71p110d7djsnc07c356e23a8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  try{
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      console.log(data)
      return data;
  }catch(e){
    console.log(e);
  }
};