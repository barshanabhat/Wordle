import Tile from "./Tile";

function Row({ rowData, currentGuess }) {
  return (
    <div className="row">
      {Array.from({ length: 5 }).map((_, index) => (
        <Tile
          key={index}
          letter={
            rowData[index]
              ? rowData[index].letter
              : currentGuess[index] || ""
          }
          status={
            rowData[index]
              ? rowData[index].status
              : ""
          }
        />
      ))}
    </div>
  );
}

export default Row;