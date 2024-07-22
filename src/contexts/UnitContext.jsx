import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const UnitContext = createContext();

const initialState = {
  drkMode: false,
  unit: "area",
  choiceOne: "sqKilometre",
  choiceTwo: "sqMetre",
  input: "",
  output: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "drkMode":
      // localStorage.setItem(
      //   "darkMode",
      //   document.body.classList.contains("body-dk-mode")
      // );
      return { ...state, drkMode: !state.drkMode };
    case "unit":
      return { ...state, unit: action.payload };
    case "choiceOne":
      return { ...state, choiceOne: action.payload };
    case "choiceTwo":
      return { ...state, choiceTwo: action.payload };
    case "input":
      return { ...state, input: action.payload };
    case "output":
      return { ...state, output: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function UnitProvider({ children }) {
  const [{ drkMode, unit, choiceOne, choiceTwo, input, output }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      if (unit === "frequency") {
        dispatch({ type: "choiceOne", payload: "hertz" });
        dispatch({ type: "choiceTwo", payload: "kHertz" });
      }
      if (unit === "fuel") {
        dispatch({ type: "choiceOne", payload: "mpUSGallon" });
        dispatch({ type: "choiceTwo", payload: "mpGallon" });
      }
      if (unit === "length") {
        dispatch({ type: "choiceOne", payload: "kilometre" });
        dispatch({ type: "choiceTwo", payload: "metre" });
      }
      if (unit === "mass") {
        dispatch({ type: "choiceOne", payload: "microgram" });
        dispatch({ type: "choiceTwo", payload: "milligram" });
      }
      if (unit === "pressure") {
        dispatch({ type: "choiceOne", payload: "bar" });
        dispatch({ type: "choiceTwo", payload: "pascal" });
      }
      if (unit === "speed") {
        dispatch({ type: "choiceOne", payload: "miPerHour" });
        dispatch({ type: "choiceTwo", payload: "ftPerSecond" });
      }
      if (unit === "temp") {
        dispatch({ type: "choiceOne", payload: "celsius" });
        dispatch({ type: "choiceTwo", payload: "fahrenheit" });
      }
      if (unit === "time") {
        dispatch({ type: "choiceOne", payload: "nSecond" });
        dispatch({ type: "choiceTwo", payload: "muSecond" });
      }
      if (unit === "volume") {
        dispatch({ type: "choiceOne", payload: "usGallon" });
        dispatch({ type: "choiceTwo", payload: "usQuart" });
      }
      if (unit === "area") {
        dispatch({ type: "choiceOne", payload: "sqKilometre" });
        dispatch({ type: "choiceTwo", payload: "sqMetre" });
      }
    },
    [unit]
  );

  return (
    <UnitContext.Provider
      value={{
        drkMode,
        unit,
        choiceOne,
        choiceTwo,
        input,
        output,
        dispatch,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
}

function useUnit() {
  const context = useContext(UnitContext);
  if (context === undefined)
    throw new Error("useUnit was used outside the UnitContext");
  return context;
}

export { UnitProvider, useUnit };
