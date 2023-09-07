import axios from "axios";

export async function getRandomQuote() {
  const REQUEST_OPTIONS = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    params: {
      language_code: 'es'
    },
    headers: {
      "X-RapidAPI-Key": "180303a09emshb735ffad18f95f8p1f6978jsnd1c8e43a3f12",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  }

  return axios(REQUEST_OPTIONS)
    .then((res) => {return res.data.content})
    
    
}
