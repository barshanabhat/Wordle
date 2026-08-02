import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";

function App() {
  const [solutionWord] = useState("DREAM");
  const [currentGuess, setCurrentGuess] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("IN_PROGRESS");
  const [keyboardStatus, setKeyboardStatus] = useState({});

 function evaluateGuess(guess) {
  const result = [];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === solutionWord[i]) {
      result.push({
        letter: guess[i],
        status: "green",
      });
    } else if (solutionWord.includes(guess[i])) {
      result.push({
        letter: guess[i],
        status: "yellow",
      });
    } else {
      result.push({
        letter: guess[i],
        status: "gray",
      });
    }
  }

  return result;
}

function updateKeyboardStatus(evaluatedGuess) {
  const updatedKeyboard = { ...keyboardStatus };

  evaluatedGuess.forEach((item) => {
    const currentStatus = updatedKeyboard[item.letter];

    if (
      currentStatus === "green"
    ) {
      return;
    }

    if (
      currentStatus === "yellow" &&
      item.status === "gray"
    ) {
      return;
    }

    updatedKeyboard[item.letter] = item.status;
  });

  setKeyboardStatus(updatedKeyboard);
}

function handleKeyInput(key) {
  if (gameStatus !== "IN_PROGRESS") {
    return;
  }

  if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
  setCurrentGuess((previousGuess) => 
    previousGuess + key.toUpperCase()
  );
  return;
}

  if (key === "Backspace") {
    setCurrentGuess((previousGuess) =>
  previousGuess.slice(0, -1)
);
    return;
  }

 if (key === "Enter") {
  if (currentGuess.length !== 5) {
    return;
  }

  const evaluatedGuess = evaluateGuess(currentGuess);

  const newPastGuesses = [...pastGuesses, evaluatedGuess];

  setPastGuesses(newPastGuesses);

  updateKeyboardStatus(evaluatedGuess);

  if (currentGuess === solutionWord) {
    setGameStatus("WON");
  } else if (newPastGuesses.length === 6) {
    setGameStatus("LOST");
  }

  setCurrentGuess("");
}
}

 useEffect(() => {
  function handleKeyDown(event) {
    handleKeyInput(event.key);
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <div className="app">
     <h1>Wordle</h1>

    

      <GameBoard
  pastGuesses={pastGuesses}
  currentGuess={currentGuess}
/>

     <Keyboard
  onKeyPress={handleKeyInput}
  keyboardStatus={keyboardStatus}
/>

     <Modal
  gameStatus={gameStatus}
  solutionWord={solutionWord}
/>
    </div>
  );
}

export default App;