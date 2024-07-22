import { useUnit } from "../contexts/UnitContext";

const units = {
  area: [
    { value: "sqKilometre", opt: "Square Kilometre" },
    { value: "sqMetre", opt: "Square Metre" },
    { value: "sqMile", opt: "Square Mile" },
    { value: "sqYard", opt: "Square Yard" },
    { value: "sqFoot", opt: "Square Foot" },
    { value: "sqInch", opt: "Square Inch" },
    { value: "hectare", opt: "Hectare" },
    { value: "acre", opt: "Acre" },
  ],

  frequency: [
    { value: "hertz", opt: "Hertz" },
    { value: "kHertz", opt: "Kilohertz" },
    { value: "mHertz", opt: "Megahertz" },
    { value: "gHertz", opt: "Gigahertz" },
  ],

  fuel: [
    { value: "mpUSGallon", opt: "Miles per US Gallon" },
    { value: "mpGallon", opt: "Miles per Gallon" },
    { value: "kmpLitre", opt: "Kilometre per Litre" },
    { value: "lp100Km", opt: "Liter per 100 Kilometre" },
  ],

  length: [
    { value: "kilometre", opt: "Kilometre" },
    { value: "metre", opt: "Metre" },
    { value: "centimetre", opt: "Centimetre" },
    { value: "millimetre", opt: "Millimetre" },
    { value: "micrometre", opt: "Micrometre" },
    { value: "nanometre", opt: "Nanometre" },
    { value: "mile", opt: "Mile" },
    { value: "yard", opt: "Yard" },
    { value: "foot", opt: "Foot" },
    { value: "inch", opt: "Inch" },
  ],

  mass: [
    { value: "microgram", opt: "Microgram" },
    { value: "milligram", opt: "Milligram" },
    { value: "gram", opt: "Gram" },
    { value: "kilogram", opt: "Kilogram" },
    { value: "metricTon", opt: "Metric Ton" },
    { value: "ounce", opt: "Ounce" },
    { value: "pound", opt: "Pound" },
    { value: "stone", opt: "Stone" },
    { value: "usTon", opt: "US Ton" },
  ],

  pressure: [
    { value: "bar", opt: "Bar" },
    { value: "pascal", opt: "Pascal" },
    { value: "pperSqInch", opt: "Pound per square inch" },
    { value: "sAtmosphere", opt: "Standard Atmosphere" },
    { value: "torr", opt: "Torr" },
  ],

  speed: [
    { value: "miPerHour", opt: "Miles per hour" },
    { value: "ftPerSecond", opt: "Foot per second" },
    { value: "mPerSecond", opt: "Metre per second" },
    { value: "kmPerHour", opt: "Kilometre per hour" },
    { value: "knot", opt: "Knot" },
  ],

  temp: [
    { value: "celsius", opt: "Celsius" },
    { value: "fahrenheit", opt: "Fahrenheit" },
    { value: "kelvin", opt: "Kelvin" },
    { value: "rankine", opt: "Rankine" },
  ],

  time: [
    { value: "nSecond", opt: "Nanosecond" },
    { value: "muSecond", opt: "Microsecond" },
    { value: "mSecond", opt: "Millisecond" },
    { value: "second", opt: "Second" },
    { value: "minute", opt: "Minute" },
    { value: "hour", opt: "Hour" },
    { value: "day", opt: "Day" },
    { value: "week", opt: "Week" },
    { value: "month", opt: "Month" },
    { value: "calYear", opt: "Calendar Year" },
    { value: "decade", opt: "Decade" },
    { value: "century", opt: "Century" },
  ],

  volume: [
    { value: "usGallon", opt: "US Liquid Gallon" },
    { value: "usQuart", opt: "US Liquid Quart" },
    { value: "usPint", opt: "US Liquid Pint" },
    { value: "usCup", opt: "US Legal Cup" },
    { value: "usOunce", opt: "US Fluid Ounce" },
    { value: "usTablespoon", opt: "US Tablespoon" },
    { value: "usTeaspoon", opt: "US Teaspoon" },
    { value: "liter", opt: "Liter" },
    { value: "milliliter", opt: "Milliliter" },
  ],
};

function Choice({ label, choice, type }) {
  const { dispatch, unit, drkMode } = useUnit();

  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(e) =>
          unit !== e.target.value &&
          dispatch({ type: type, payload: e.target.value })
        }
        value={choice}
        className={drkMode ? "selectDark" : ""}
      >
        {units[unit].map((option) => (
          <option value={option.value} key={option.value}>
            {option.opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Choice;
