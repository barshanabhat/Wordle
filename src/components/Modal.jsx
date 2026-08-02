function Modal({ gameStatus, solutionWord }) {
  if (gameStatus === "IN_PROGRESS") {
    return null;
  }

  return (
    <div className="modal">
      {gameStatus === "WON" ? (
        <h2>🎉 Congratulations! You won!</h2>
      ) : (
        <>
          <h2>Game Over</h2>
          <p>The correct word was:</p>
          <h3>{solutionWord}</h3>
        </>
      )}
    </div>
  );
}

export default Modal;