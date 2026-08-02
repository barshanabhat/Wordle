function KeyboardKey({ value, onClick, status }) {
  return (
    <button
      className={status}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default KeyboardKey;