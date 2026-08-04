function Modal({ gameStatus, solutionWord, onPlayAgain }) {
  if (gameStatus === "IN_PROGRESS") {
    return null;
  }

  return (
    <div className="modal">
      {gameStatus === "WON" ? (
  <>
    <h2>🎉 Congratulations! You won!</h2>
    <button onClick={onPlayAgain}>Play Again</button>
  </>
) : (
  <>
    <h2>Game Over</h2>
    <p>The correct word was:</p>
    <h3>{solutionWord}</h3>
    <button onClick={onPlayAgain}>Play Again</button>
  </>
)}
    </div>
  );
}

export default Modal;