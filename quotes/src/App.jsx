import { useState, useEffect } from "react";
import { getRandomQuote } from "./services/quote";

export default function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getRandomQuote().then(setQuote)
  }, []);

  function renewQuote(){
    getRandomQuote().then(setQuote)
  }

  // render
  return (
    <main className="w-auto h-screen p-6 flex flex-col place-items-center justify-center bg-gray-800 text-white">
      <div className="max-w-4xl">
        <section
          className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-md mb-6"
          id="quote"
        >
          <div className="bg-gray-800 py-4 px-8">
            <h1 className="text-2xl font-mono text-[#d8d8e9]">{quote}</h1>
          </div>
        </section>

        <section className="flex justify-end items-center gap-4" id="buttons">
          <button className="bg-like w-10 h-10 " id="like-button"></button>
          <button
            onClick={renewQuote}
            className="bg-refresh w-10 h-10 mr-3"
            id="refresh-button"
          ></button>
        </section>
      </div>
    </main>
  );
}
