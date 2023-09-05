

export default function App({quote}) {





    return ( 
        
        <main className="w-auto h-screen p-6 flex flex-col place-items-center justify-center bg-gray-800 text-white">
            
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-sm mb-3">
                <div className="bg-gray-800 py-4 px-8">
                    <h1 className="text-2xl font-mono text-white">{quote}</h1>
                </div>
            </section>
            <section className="">
                <button className="p-2 mr-4 bg-white">
                    Like
                </button>
                <button className="p-2 bg-white">
                    Refresh
                </button>
            </section>
        </main>

    )
}
