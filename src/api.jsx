import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID gwr4cAhddrWGnECWoXHLryMakzW8XqK0u4z_inMrpag',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;