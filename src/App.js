import { useState } from "react";
import * as Calculations from "./utils/calculations.js";

// const units = {
//   area: [
//     { value: "sqKilometre", opt: "Square Kilometre" },
//     { value: "sqMetre", opt: "Square Metre" },
//     { value: "sqMile", opt: "Square Mile" },
//     { value: "sqYard", opt: "Square Yard" },
//     { value: "sqFoot", opt: "Square Foot" },
//     { value: "sqInch", opt: "Square Inch" },
//     { value: "hectare", opt: "Hectare" },
//     { value: "acre", opt: "Acre" },
//   ],

//   frequency: [
//     { value: "hertz", opt: "Hertz" },
//     { value: "kHertz", opt: "Kilohertz" },
//     { value: "mHertz", opt: "Megahertz" },
//     { value: "gHertz", opt: "Gigahertz" },
//   ],

//   fuel: [
//     { value: "mpUSGallon", opt: "Miles per US Gallon" },
//     { value: "mpGallon", opt: "Miles per Gallon" },
//     { value: "kmpLitre", opt: "Kilometre per Litre" },
//     { value: "lp100Km", opt: "Liter per 100 Kilometre" },
//   ],

//   length: [
//     { value: "kilometre", opt: "Kilometre" },
//     { value: "metre", opt: "Metre" },
//     { value: "centimetre", opt: "Centimetre" },
//     { value: "millimetre", opt: "Millimetre" },
//     { value: "micrometre", opt: "Micrometre" },
//     { value: "nanometre", opt: "Nanometre" },
//     { value: "mile", opt: "Mile" },
//     { value: "yard", opt: "Yard" },
//     { value: "foot", opt: "Foot" },
//     { value: "inch", opt: "Inch" },
//   ],

//   mass: [
//     { value: "microgram", opt: "Microgram" },
//     { value: "milligram", opt: "Milligram" },
//     { value: "gram", opt: "Gram" },
//     { value: "kilogram", opt: "Kilogram" },
//     { value: "metricTon", opt: "Metric Ton" },
//     { value: "ounce", opt: "Ounce" },
//     { value: "pound", opt: "Pound" },
//     { value: "stone", opt: "Stone" },
//     { value: "usTon", opt: "US Ton" },
//   ],

//   pressure: [
//     { value: "bar", opt: "Bar" },
//     { value: "pascal", opt: "Pascal" },
//     { value: "pperSqInch", opt: "Pound per square inch" },
//     { value: "sAtmosphere", opt: "Standard Atmosphere" },
//     { value: "torr", opt: "Torr" },
//   ],

//   speed: [
//     { value: "miPerHour", opt: "Miles per hour" },
//     { value: "ftPerSecond", opt: "Foot per second" },
//     { value: "mPerSecond", opt: "Metre per second" },
//     { value: "kmPerHour", opt: "Kilometre per hour" },
//     { value: "knot", opt: "Knot" },
//   ],

//   temperature: [
//     { value: "celsius", opt: "Celsius" },
//     { value: "fahrenheit", opt: "Fahrenheit" },
//     { value: "kelvin", opt: "Kelvin" },
//     { value: "rankine", opt: "Rankine" },
//   ],

//   time: [
//     { value: "nSecond", opt: "Nanosecond" },
//     { value: "muSecond", opt: "Microsecond" },
//     { value: "mSecond", opt: "Millisecond" },
//     { value: "second", opt: "Second" },
//     { value: "minute", opt: "Minute" },
//     { value: "hour", opt: "Hour" },
//     { value: "day", opt: "Day" },
//     { value: "week", opt: "Week" },
//     { value: "month", opt: "Month" },
//     { value: "calYear", opt: "Calendar Year" },
//     { value: "decade", opt: "Decade" },
//     { value: "century", opt: "Century" },
//   ],

//   volume: [
//     { value: "usGallon", opt: "US Liquid Gallon" },
//     { value: "usQuart", opt: "US Liquid Quart" },
//     { value: "usPint", opt: "US Liquid Pint" },
//     { value: "usCup", opt: "US Legal Cup" },
//     { value: "usOunce", opt: "US Fluid Ounce" },
//     { value: "usTablespoon", opt: "US Tablespoon" },
//     { value: "usTeaspoon", opt: "US Teaspoon" },
//     { value: "liter", opt: "Liter" },
//     { value: "milliliter", opt: "Milliliter" },
//   ],
// };

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

  temperature: [
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

const area = [
  { value: "sqKilometre", opt: "Square Kilometre" },
  { value: "sqMetre", opt: "Square Metre" },
  { value: "sqMile", opt: "Square Mile" },
  { value: "sqYard", opt: "Square Yard" },
  { value: "sqFoot", opt: "Square Foot" },
  { value: "sqInch", opt: "Square Inch" },
  { value: "hectare", opt: "Hectare" },
  { value: "acre", opt: "Acre" },
];

const frequency = [
  { value: "hertz", opt: "Hertz" },
  { value: "kHertz", opt: "Kilohertz" },
  { value: "mHertz", opt: "Megahertz" },
  { value: "gHertz", opt: "Gigahertz" },
];

const fuel = [
  { value: "mpUSGallon", opt: "Miles per US Gallon" },
  { value: "mpGallon", opt: "Miles per Gallon" },
  { value: "kmpLitre", opt: "Kilometre per Litre" },
  { value: "lp100Km", opt: "Liter per 100 Kilometre" },
];

const length = [
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
];

const mass = [
  { value: "microgram", opt: "Microgram" },
  { value: "milligram", opt: "Milligram" },
  { value: "gram", opt: "Gram" },
  { value: "kilogram", opt: "Kilogram" },
  { value: "metricTon", opt: "Metric Ton" },
  { value: "ounce", opt: "Ounce" },
  { value: "pound", opt: "Pound" },
  { value: "stone", opt: "Stone" },
  { value: "usTon", opt: "US Ton" },
];

const pressure = [
  { value: "bar", opt: "Bar" },
  { value: "pascal", opt: "Pascal" },
  { value: "pperSqInch", opt: "Pound per square inch" },
  { value: "sAtmosphere", opt: "Standard Atmosphere" },
  { value: "torr", opt: "Torr" },
];

const speed = [
  { value: "miPerHour", opt: "Miles per hour" },
  { value: "ftPerSecond", opt: "Foot per second" },
  { value: "mPerSecond", opt: "Metre per second" },
  { value: "kmPerHour", opt: "Kilometre per hour" },
  { value: "knot", opt: "Knot" },
];

const temperature = [
  { value: "celsius", opt: "Celsius" },
  { value: "fahrenheit", opt: "Fahrenheit" },
  { value: "kelvin", opt: "Kelvin" },
  { value: "rankine", opt: "Rankine" },
];

const time = [
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
];

const volume = [
  { value: "usGallon", opt: "US Liquid Gallon" },
  { value: "usQuart", opt: "US Liquid Quart" },
  { value: "usPint", opt: "US Liquid Pint" },
  { value: "usCup", opt: "US Legal Cup" },
  { value: "usOunce", opt: "US Fluid Ounce" },
  { value: "usTablespoon", opt: "US Tablespoon" },
  { value: "usTeaspoon", opt: "US Teaspoon" },
  { value: "liter", opt: "Liter" },
  { value: "milliliter", opt: "Milliliter" },
];

export default function App() {
  const [theme, setTheme] = useState(false);
  const [unit, setUnit] = useState("area");
  const [choiceOne, setChoiceOne] = useState("sqKilometre");
  const [choiceTwo, setChoiceTwo] = useState("sqMetre");
  const [inputValue, setInputValue] = useState("");
  const outputValue = Calculations[choiceOne][choiceTwo](inputValue);
  console.log(choiceOne, choiceTwo);

  function handleTheme() {
    setTheme(!theme);
  }

  function handleUnit(choice) {
    setUnit(choice);
  }

  function handleChoiceOne(choice) {
    setChoiceOne(choice);
  }

  function handleChoiceTwo(choice) {
    setChoiceTwo(choice);
  }

  function handleInput(input) {
    setInputValue(+input);
  }

  // function handleOutput() {
  //   setOutputValue(Calculations[choiceOne][choiceTwo](inputValue));
  // }

  return (
    <>
      <Theme onTheme={handleTheme} />
      <div className="container">
        <Logo />
        <div className="conversion-section">
          <div className="conversion-container">
            <UnitType onUnit={handleUnit} />
            <Choice
              option={unit}
              value={choiceOne}
              label={"FROM"}
              handleChoice={handleChoiceOne}
            />
            <Input
              label={"VALUE"}
              id={"input-el"}
              placeholder={"Convert a value..."}
              value={inputValue}
              onValue={handleInput}
            />
            <Choice
              option={unit}
              value={choiceTwo}
              label={"TO"}
              handleChoice={handleChoiceTwo}
            />
            <Input
              label={""}
              id={"result"}
              placeholder={"Converted value..."}
              value={outputValue}
              // onValue={""}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Theme({ onTheme }) {
  return (
    <button className="theme-mode-btn" onClick={() => onTheme()}>
      <span className="material-symbols-outlined"> dark_mode </span>
    </button>
  );
}

function Logo() {
  return (
    <div className="logo-section">
      <h1>
        <span className="logo-text">
          Unit Converter <span className="dot-logo">o</span>
        </span>
      </h1>
    </div>
  );
}

function UnitType({ onUnit }) {
  const unit = [
    { value: "area", opt: "Area" },
    { value: "frequency", opt: "Frequency" },
    { value: "fuel", opt: "Fuel Economy" },
    { value: "length", opt: "Length" },
    { value: "mass", opt: "Mass" },
    { value: "pressure", opt: "Pressure" },
    { value: "speed", opt: "Speed" },
    { value: "temp", opt: "Temperature" },
    { value: "time", opt: "Time" },
    { value: "volume", opt: "Volume" },
  ];

  return (
    <div className="select-unit-section">
      <label className="select-unit-label" htmlFor="select-unit">
        SELECT UNIT
      </label>
      <select
        name="SELECT UNIT"
        id="select-unit"
        onChange={(e) => onUnit(e.target.value)}
      >
        {unit.map((unit) => (
          <option value={unit.value} key={unit.value}>
            {unit.opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function Choice({ value, option, label, handleChoice }) {
  return (
    <div>
      <label>{label}</label>
      <select onChange={(e) => handleChoice(e.target.value)} value={value}>
        {units[option].map((option) => (
          <option value={option.value} key={option.value}>
            {option.opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function Input({ label, id, placeholder, value, onValue }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValue(e.target.value)}
      />
    </>
  );
}

// function Output({ label, id, placeholder, value, onValue }) {
//   return (
//     <>
//       <label htmlFor={id}>{label}</label>
//       <input type="number" id={id} placeholder={placeholder} />
//     </>
//   );
// }

function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/LuisCabantac/unit-converter/"
          target="_blank"
          rel="noreferrer"
        >
          &copy; 2024 Luis Cabantac
        </a>
      </p>
    </footer>
  );
}
