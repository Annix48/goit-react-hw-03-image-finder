import axios from 'axios';

const KEY = '30258033-539b073657ec4d24bd8f65bf5';
const BASE_URL = 'https://pixabay.com/api';

async function fetchPictures(query, page) {
  const url = `${BASE_URL}/?key=${KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;

  const { data } = await axios.get(url);

  return data;
}

export default fetchPictures;
