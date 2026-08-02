import Row from "./Row";

function GameBoard({ pastGuesses, currentGuess }) {
  return (
    <div className="game-board">
      {Array.from({ length: 6 }).map((_, index) => {
        let rowData = [];

        if (index < pastGuesses.length) {
          rowData = pastGuesses[index];
        }

        return (
          <Row
            key={index}
            rowData={rowData}
            currentGuess={
              index === pastGuesses.length
                ? currentGuess
                : ""
            }
          />
        );
      })}
    </div>
  );
}

export default GameBoard;