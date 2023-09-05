import { useState } from "react"
import confetti from "canvas-confetti"

const TURNS = {
  x: 'X',
  o: 'O'
}

const Square = ({children,isSelected, updateBoard, index, props}) => {

  const className = `${isSelected ? 'text-white bg-blue-500' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={`w-24 h-24 border-2 rounded-md grid place-items-center cursor-pointer text-[40px] ${props} ${className}`}>
      {children}
    </div>  
  )
}

const WINNER_COMBOS = [
  [0, 1, 2], // Primera fila
  [3, 4, 5], // Segunda fila
  [6, 7, 8], // Tercera fila
  [0, 3, 6], // Primera columna
  [1, 4, 7], // Segunda columna
  [2, 5, 8], // Tercera columna
  [0, 4, 8], // Diagonal izquierda a derecha
  [2, 4, 6], // Diagonal derecha a izquierda
];


function App() {
  
  const [board, setboard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.x)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
        ){ return boardToCheck[a] }
      
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setboard(newBoard)

    const newTurn = turn == TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)      
    } else if(checkEndGame(newBoard)){
      setWinner(false) 
    }
  }

  const resetGame = () => {
    setboard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  return (
    <main className=" w-fit m-10 text-center ">
      <h1 className=" text-[#eee] font-semibold text-2xl mb-4">Tic Tac Toe</h1>
      <button onClick={resetGame} className="py-4 px-3 m-6 bg-transparent border-2 border-white text-white rounded-md transition cursor-pointer font-bold hover:bg-[#eee] hover:text-black">Empezar de nuevo</button>
                
      <section className=" grid grid-cols-3 gap-3">
        {
          board.map((_, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square> 
            )
          })  
        }
        
      </section>
      <section className=" flex justify-center my-4 mx-auto w-fit relative border-transparent">
        <Square isSelected={turn == TURNS.x} props={"w-20 h-20 border-transparent pointer-events-none"}>{TURNS.x}</Square>
        <Square isSelected={turn == TURNS.o} props={"w-20 h-20 border-transparent pointer-events-none"}>{TURNS.o}</Square>
      </section>

      {
        winner != null && (
          <section className="absolute w-[100vw] h-[100vh] top-0 left-0 grid place-items-center bg-black bg-opacity-70">
            <div className="bg-zinc-800 h-80 w-80 border-2 border-white rounded-xl flex flex-col content-center justify-center gap-5">
              <h2>
                {
                  winner === false ? 'Empate' : 'Gano:'
                }
              </h2>
              <header className="my-0 mx-auto w-fit border-2 border-white rounded-xl gap-4 flex">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame} className="py-2 px-3 m-6 bg-transparent border-2 border-white text-white rounded-md w-24 transition cursor-pointer font-bold hover:bg-[#eee] hover:text-black">Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>
  )
}



export default App
