import { useState, useEffect } from "react";
import { getRandomQuote } from "./services/quote";
import { RaceBy } from "@uiball/loaders";
import { motion } from "framer-motion";

export default function App() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    getRandomQuote()
      .then(setQuote)
      .catch((e) => {
        console.log(e);
        setQuote(undefined);
        if (e.code === "ERR_NETWORK") {
          setConnected(false);
        }
      })
      .finally(setIsLoading);
  }, []);

  async function renewQuote() {
    setIsLoading(true);

    try {
      const newQuote = await getRandomQuote();
      setQuote(newQuote);
      setIsLoading(false);
      setConnected(true);
    } catch (e) {
      console.log(e);
      setQuote(undefined);
      setIsLoading(false);
      setConnected(false);
    }
  }

  // render
  return (
    <main className="w-auto h-screen p-6 flex flex-col place-items-center justify-center bg-gray-800 text-white">
      {connected ? (
        <motion.div
          id="connection"
          animate={{ y: -80 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-14 bg-gray-900 p-4 bg-opacity-70 rounded-sm text-red-500 font-semibold shadow-lg"
        >
          No tiene conexion a internet
        </motion.div>
        
      ) : (
        <motion.div
          id="connection"
          animate={{ y: 80 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-14 bg-gray-900 p-4 bg-opacity-70 rounded-sm text-red-500 font-semibold shadow-lg"
        >
          No tiene conexion a internet
        </motion.div>
      )}

      <div className="max-w-4xl">
        {isLoading ? (
          <div id="loader" className="bg-blue-800 w-fit mb-8">
            <RaceBy size={90} lineWeight={3} speed={1.5} color="white" />
          </div>
        ) : (
          <section
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-md mb-6"
            id="border-gradient"
          >
            <div id="quote" className="bg-gray-800 py-4 px-8">
              <h1 className="text-2xl font-mono text-[#d8d8e9]">
                {quote ? quote : "Just Do It."}
              </h1>
            </div>
          </section>
        )}

        <section
          className="flex justify-center items-center gap-4"
          id="buttons"
        >
          <button className="bg-like w-10 h-10 " id="like-button"></button>
          <button
            onClick={renewQuote}
            className="bg-refresh w-10 h-10"
            id="refresh-button"
          ></button>
        </section>
      </div>
    </main>
  );
}
