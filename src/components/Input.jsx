import { useUnit } from "../contexts/UnitContext";

function Input() {
  const { dispatch, input, drkMode } = useUnit();

  return (
    <>
      <label htmlFor="inputEl">VALUE</label>
      <input
        type="number"
        id="inputEl"
        className={`${drkMode ? "inputDark" : ""}`}
        placeholder="Convert a value..."
        value={input}
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
      />
    </>
  );
}

export default Input;
