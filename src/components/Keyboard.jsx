import KeyboardKey from "./Keyboardkey";

function Keyboard({ onKeyPress, keyboardStatus }) {

  const rows = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["Enter","Z","X","C","V","B","N","M","Backspace"]
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => (
            <KeyboardKey
  key={key}
  value={key}
  onClick={onKeyPress}
  status={keyboardStatus[key]}
/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;