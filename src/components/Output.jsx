import { useEffect } from "react";
import { useUnit } from "../contexts/UnitContext";
import * as Calculations from "../utils/calculations";

function Output() {
  const { unit, input, output, choiceOne, choiceTwo, drkMode, dispatch } =
    useUnit();

  useEffect(
    function () {
      // console.log(Calculations[choiceOne][choiceTwo](input));
      // console.log(unit, choiceOne, choiceTwo);
      dispatch({
        type: "output",
        payload: Calculations[choiceOne][choiceTwo](input),
      });
    },
    [choiceOne, choiceTwo, input]
  );

  return (
    <>
      <label htmlFor="result"></label>
      <input
        type="number"
        id="result"
        className={`${drkMode ? "inputDark" : ""}`}
        placeholder="Converted value..."
        defaultValue={output}
      />
    </>
  );
}

export default Output;
