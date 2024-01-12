import { useDebugValue, useState } from 'react';

// Square child component
function Square({ value, onSquareClick }) {
  return (
    <div>
      <button
        className="bg-white border border-slate-400 h-24 w-24 text-4xl m-2 font-bold"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

//Board child component
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = 'Next Player ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="  font-bold my-4 text-3xl">{status}</div>
        <div className="flex">
          <div>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div className="flex items-center justify-center h-screen w-6/12 mx-auto">
      <div className="flex-1  items-center justify-center ">
        <Board></Board>
      </div>
      <div className="flex-1 ">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          esse similique neque distinctio obcaecati quaerat commodi perspiciatis
          qui quas nesciunt repellat adipisci suscipit, ipsum hic accusamus
          voluptas assumenda in reiciendis!
        </p>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
