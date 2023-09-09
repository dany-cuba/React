import { getRandomQuote } from "../services/quote";
import { useState, useEffect } from "react";

export function useLoadQuote(restart) {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    async function fetchData(){
      try {
        const newQuote = await getRandomQuote();
        setQuote(newQuote)
        setConnected(true)
      } catch (e) {
        console.log(e);
        setQuote(undefined);  
        setConnected(false);
      } finally {
        setIsLoading(false);
      }
    } 
    fetchData()     
  }, [restart])

  return {quote, isLoading, connected}
}
