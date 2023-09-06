export function getRandomQuote() {
  const RANDOM_QUOTE_URL = "https://quotes15.p.rapidapi.com/quotes/random/";
  const OPTIONS = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "180303a09emshb735ffad18f95f8p1f6978jsnd1c8e43a3f12",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  return fetch(RANDOM_QUOTE_URL, OPTIONS)
    .then((res) => res.json())
    .then((data) => {return data.content});
}
