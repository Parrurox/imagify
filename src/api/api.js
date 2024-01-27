import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Yyo27aI9QRsTv9T6s71W3tdIDyeaNqw6GIJP8WzL1rE",
    },
    params: {
      query: term,
    },
  });
  console.log(response);

  return response.data.results;
};

export default searchImages;
