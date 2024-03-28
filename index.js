const convertBtn = document.querySelector("#convert-btn");
const resetBtn = document.querySelector("#reset-btn");
const result = document.querySelector("#result");

document
  .querySelector("#select-unit")
  .addEventListener("change", function (event) {
    const unitSelect = event.target.value;

    document.querySelectorAll(".length-unit").forEach((element) => {
      element.style.display = "none";
    });

    document.querySelectorAll(".mass-unit").forEach((element) => {
      element.style.display = "none";
    });

    document.querySelectorAll(".volume-unit").forEach((element) => {
      element.style.display = "none";
    });

    document.querySelectorAll(".temperature-unit").forEach((element) => {
      element.style.display = "none";
    });

    if (unitSelect === "length") {
      document.querySelectorAll(".length-unit").forEach((element) => {
        element.style.display = "block";
        result.value = "";
      });
    } else if (unitSelect === "mass") {
      document.querySelectorAll(".mass-unit").forEach((element) => {
        element.style.display = "block";
        result.value = "";
      });
    } else if (unitSelect === "volume") {
      document.querySelectorAll(".volume-unit").forEach((element) => {
        element.style.display = "block";
        result.value = "";
      });
    } else if (unitSelect === "temp") {
      document.querySelectorAll(".temperature-unit").forEach((element) => {
        element.style.display = "block";
        result.value = "";
      });
    }
  });

document.querySelector("#length-choiceOne").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#length-choiceTwo").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#volume-choiceOne").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#volume-choiceTwo").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#mass-choiceOne").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#mass-choiceTwo").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#temp-choiceOne").addEventListener("change", () => {
  getSelectedUnit();
});

document.querySelector("#temp-choiceTwo").addEventListener("change", () => {
  getSelectedUnit();
});

convertBtn.addEventListener("click", () => {
  getSelectedUnit();
});

function getSelectedUnit() {
  const selectUnit = document.querySelector("#select-unit").value;
  const inputEl = Number(document.querySelector("#input-el").value);

  if (inputEl !== "") {
    if (selectUnit === "length") {
      const lengthOne = document.querySelector("#length-choiceOne").value;
      const lengthTwo = document.querySelector("#length-choiceTwo").value;
      checkLengthChoiceTwo(inputEl, lengthOne, lengthTwo);
    } else if (selectUnit === "volume") {
      const volumeOne = document.querySelector("#volume-choiceOne").value;
      const volumeTwo = document.querySelector("#volume-choiceTwo").value;
      checkVolumeChoiceTwo(inputEl, volumeOne, volumeTwo);
    } else if (selectUnit === "mass") {
      const massOne = document.querySelector("#mass-choiceOne").value;
      const massTwo = document.querySelector("#mass-choiceTwo").value;
      checkMassChoiceTwo(inputEl, massOne, massTwo);
    } else if (selectUnit === "temp") {
      const tempOne = document.querySelector("#temp-choiceOne").value;
      const tempTwo = document.querySelector("#temp-choiceTwo").value;
      checkTempChoiceTwo(inputEl, tempOne, tempTwo);
    }
  }
}

resetBtn.addEventListener("click", () => {
  document.querySelector("#input-el").value = "";
  result.value = "";
});

function checkLengthChoiceTwo(inputValue, choiceOne, choiceTwo) {
  switch (choiceOne) {
    case "kilometre":
      kilometreCalc(inputValue, choiceTwo);
      break;
    case "metre":
      metreCalc(inputValue, choiceTwo);
      break;
    case "centimetre":
      centimetreCalc(inputValue, choiceTwo);
      break;
    case "millimetre":
      millimetreCalc(inputValue, choiceTwo);
      break;
    case "micrometre":
      micrometreCalc(inputValue, choiceTwo);
      break;
    case "nanometre":
      nanometreCalc(inputValue, choiceTwo);
      break;
    case "mile":
      mileCalc(inputValue, choiceTwo);
      break;
    case "yard":
      yardCalc(inputValue, choiceTwo);
      break;
    case "foot":
      footCalc(inputValue, choiceTwo);
      break;
    case "inch":
      inchCalc(inputValue, choiceTwo);
      break;
  }
}

function checkVolumeChoiceTwo(inputValue, choiceOne, choiceTwo) {
  switch (choiceOne) {
    case "us-gallon":
      usGallonCalc(inputValue, choiceTwo);
      break;
    case "us-quart":
      usQuartCalc(inputValue, choiceTwo);
      break;
    case "us-pint":
      usPintCalc(inputValue, choiceTwo);
      break;
    case "us-cup":
      usCupCalc(inputValue, choiceTwo);
      break;
    case "us-ounce":
      usOunceCalc(inputValue, choiceTwo);
      break;
    case "us-tablespoon":
      usTablespoonCalc(inputValue, choiceTwo);
      break;
    case "us-teaspoon":
      usTeaspoonCalc(inputValue, choiceTwo);
      break;
    case "liter":
      literCalc(inputValue, choiceTwo);
      break;
    case "milliliter":
      milliliterCalc(inputValue, choiceTwo);
      break;
  }
}

function checkMassChoiceTwo(inputValue, choiceOne, choiceTwo) {
  switch (choiceOne) {
    case "microgram":
      microgramCalc(inputValue, choiceTwo);
      break;
    case "milligram":
      milligramCalc(inputValue, choiceTwo);
      break;
    case "gram":
      gramCalc(inputValue, choiceTwo);
      break;
    case "kilogram":
      kilogramCalc(inputValue, choiceTwo);
      break;
    case "metric-ton":
      metricTonCalc(inputValue, choiceTwo);
      break;
    case "ounce":
      ounceCalc(inputValue, choiceTwo);
      break;
    case "pound":
      poundCalc(inputValue, choiceTwo);
      break;
    case "stone":
      stoneCalc(inputValue, choiceTwo);
      break;
    case "us-ton":
      usTonCalc(inputValue, choiceTwo);
      break;
  }
}

function checkTempChoiceTwo(inputValue, choiceOne, choiceTwo) {
  switch (choiceOne) {
    case "celsius":
      celsiusCalc(inputValue, choiceTwo);
      break;
    case "fahrenheit":
      fahrenheitCalc(inputValue, choiceTwo);
      break;
    case "kelvin":
      kelvinCalc(inputValue, choiceTwo);
      break;
    case "rankine":
      rankineCalc(inputValue, choiceTwo);
      break;
  }
}

function kilometreCalc(value, type) {
  let km = 0;
  if (type === "kilometre") km = value;
  else if (type === "metre") km = value * 1000;
  else if (type === "centimetre") km = value * 100000;
  else if (type === "millimetre") km = value * 1000000;
  else if (type === "micrometre") km = value * 1e9;
  else if (type === "nanometre") km = value * 1e12;
  else if (type === "mile") km = value / 1.609344;
  else if (type === "yard") km = value / 0.0009144;
  else if (type === "foot") km = value * 3280.84;
  else if (type === "inch") km = value * 39370.1;
  else km = "Invalid";

  result.value = km;
}

function metreCalc(value, type) {
  let metre = 0;
  if (type === "kilometre") metre = value / 1000;
  else if (type === "metre") metre = value;
  else if (type === "centimetre") metre = value * 100;
  else if (type === "millimetre") metre = value * 1000;
  else if (type === "micrometre") metre = value * 1000000;
  else if (type === "nanometre") metre = value * 1000000000;
  else if (type === "mile") metre = value / 1609.344;
  else if (type === "yard") metre = value / 0.9144;
  else if (type === "foot") metre = value / 0.3048;
  else if (type === "inch") metre = value / 0.0254;
  else metre = "Invalid";

  result.value = metre;
}

function centimetreCalc(value, type) {
  let cm = 0;
  if (type === "kilometre") cm = value / 100000;
  else if (type === "metre") cm = value / 100;
  else if (type === "centimetre") cm = value;
  else if (type === "millimetre") cm = value * 10;
  else if (type === "micrometre") cm = value * 10000;
  else if (type === "nanometre") cm = value * 1e7;
  else if (type === "mile") cm = value / 160934.4;
  else if (type === "yard") cm = value / 91.44;
  else if (type === "foot") cm = value / 30.48;
  else if (type === "inch") cm = value / 2.54;
  else cm = "Invalid";

  result.value = cm;
}

function millimetreCalc(value, type) {
  let mm = 0;
  if (type === "kilometre") mm = value / 1000000;
  else if (type === "metre") mm = value / 1000;
  else if (type === "centimetre") mm = value / 10;
  else if (type === "millimetre") mm = value;
  else if (type === "micrometre") mm = value * 1000;
  else if (type === "nanometre") mm = value * 1e6;
  else if (type === "mile") mm = value / 1609344;
  else if (type === "yard") mm = value / 91.44;
  else if (type === "foot") mm = value / 304.8;
  else if (type === "inch") mm = value / 25.4;
  else mm = "Invalid";

  result.value = mm;
}

function micrometreCalc(value, type) {
  let mcm = 0;
  if (type === "kilometre") mcm = value / 1e9;
  else if (type === "metre") mcm = value / 1e6;
  else if (type === "centimetre") mcm = value / 10000;
  else if (type === "millimetre") mcm = value / 1000;
  else if (type === "micrometre") mcm = value;
  else if (type === "nanometre") mcm = value * 1000;
  else if (type === "mile") mcm = value / 1.609e9;
  else if (type === "yard") mcm = value / 914400;
  else if (type === "foot") mcm = value / 304800;
  else if (type === "inch") mcm = value / 25400;
  else mcm = "Invalid";

  result.value = mcm;
}

function nanometreCalc(value, type) {
  let nm = 0;
  if (type === "kilometre") nm = value / 1e12;
  else if (type === "metre") nm = value / 1e9;
  else if (type === "centimetre") nm = value / 1e7;
  else if (type === "millimetre") nm = value / 1e6;
  else if (type === "micrometre") nm = value / 1000;
  else if (type === "nanometre") nm = value;
  else if (type === "mile") nm = value / 1.609e12;
  else if (type === "yard") nm = value / 9.144e8;
  else if (type === "foot") nm = value / 3.048e8;
  else if (type === "inch") nm = value / 2.54e7;
  else nm = "Invalid";

  result.value = nm;
}

function mileCalc(value, type) {
  let mi = 0;
  if (type === "kilometre") mi = value * 1.609344;
  else if (type === "metre") mi = value * 1609.344;
  else if (type === "centimetre") mi = value * 160934.4;
  else if (type === "millimetre") mi = value * 1609344;
  else if (type === "micrometre") mi = value * 1.609e9;
  else if (type === "nanometre") mi = value * 1.609e12;
  else if (type === "mile") mi = value;
  else if (type === "yard") mi = value * 1760;
  else if (type === "foot") mi = value * 5280;
  else if (type === "inch") mi = value * 63360;
  else mi = "Invalid";

  result.value = mi;
}

function yardCalc(value, type) {
  let yd = 0;
  if (type === "kilometre") yd = value * 0.0009144;
  else if (type === "metre") yd = value * 0.9144;
  else if (type === "centimetre") yd = value * 91.44;
  else if (type === "millimetre") yd = value * 914.4;
  else if (type === "micrometre") yd = value * 914400;
  else if (type === "nanometre") yd = value * 9.144e8;
  else if (type === "mile") yd = value / 1760;
  else if (type === "yard") yd = value;
  else if (type === "foot") yd = value * 3;
  else if (type === "inch") yd = value * 36;
  else yd = "Invalid";

  result.value = yd;
}

function footCalc(value, type) {
  let ft = 0;
  if (type === "kilometre") ft = value / 3280.84;
  else if (type === "metre") ft = value / 3.281;
  else if (type === "centimetre") ft = value * 30.48;
  else if (type === "millimetre") ft = value * 304.8;
  else if (type === "micrometre") ft = value * 304800;
  else if (type === "nanometre") ft = value * 3.048e8;
  else if (type === "mile") ft = value / 5280;
  else if (type === "yard") ft = value / 3;
  else if (type === "foot") ft = value;
  else if (type === "inch") ft = value * 12;
  else ft = "Invalid";

  result.value = ft;
}

function inchCalc(value, type) {
  let ft = 0;
  if (type === "kilometre") ft = value / 3280.84;
  else if (type === "metre") ft = value / 3.281;
  else if (type === "centimetre") ft = value * 30.48;
  else if (type === "millimetre") ft = value * 304.8;
  else if (type === "micrometre") ft = value * 304800;
  else if (type === "nanometre") ft = value * 3.048e8;
  else if (type === "mile") ft = value / 5280;
  else if (type === "yard") ft = value / 3;
  else if (type === "foot") ft = value / 12;
  else if (type === "inch") ft = value;
  else ft = "Invalid";

  result.value = ft;
}

function usGallonCalc(value, type) {
  let usg = 0;
  if (type === "us-gallon") usg = value;
  else if (type === "us-quart") usg = value * 4;
  else if (type === "us-pint") usg = value * 8;
  else if (type === "us-cup") usg = value * 15.773;
  else if (type === "us-ounce") usg = value * 128;
  else if (type === "us-tablespoon") usg = value * 256;
  else if (type === "us-teaspoon") usg = value * 768;
  else if (type === "liter") usg = value * 3.785;
  else if (type === "milliliter") usg = value * 3785;
  else usg = "Invalid";
  result.value = usg;
}

function usQuartCalc(value, type) {
  let usq = 0;
  if (type === "us-gallon") usq = value / 4;
  else if (type === "us-quart") usq = value;
  else if (type === "us-pint") usq = value * 2;
  else if (type === "us-cup") usq = value * 3.942;
  else if (type === "us-ounce") usq = value * 32;
  else if (type === "us-tablespoon") usq = value * 64;
  else if (type === "us-teaspoon") usq = value * 192;
  else if (type === "liter") usq = value / 1.057;
  else if (type === "milliliter") usq = value * 946.353;
  else usq = "Invalid";
  result.value = usq;
}

function usPintCalc(value, type) {
  let usp = 0;
  if (type === "us-gallon") usp = value / 8;
  else if (type === "us-quart") usp = value / 2;
  else if (type === "us-pint") usp = value;
  else if (type === "us-cup") usp = value * 1.972;
  else if (type === "us-ounce") usp = value * 16;
  else if (type === "us-tablespoon") usp = value * 32;
  else if (type === "us-teaspoon") usp = value * 96;
  else if (type === "liter") usp = value * 0.473176;
  else if (type === "milliliter") usp = value * 473.176;
  else usp = "Invalid";
  result.value = usp;
}

function usCupCalc(value, type) {
  let usc = 0;
  if (type === "us-gallon") usc = value / 15.772;
  else if (type === "us-quart") usc = value / 3.943;
  else if (type === "us-pint") usc = value / 1.972;
  else if (type === "us-cup") usc = value;
  else if (type === "us-ounce") usc = value * 8.11537;
  else if (type === "us-tablespoon") usc = value * 16.2307;
  else if (type === "us-teaspoon") usc = value * 48.6922;
  else if (type === "liter") usc = value * 0.24;
  else if (type === "milliliter") usc = value * 240;
  else usc = "Invalid";
  result.value = usc;
}

function usOunceCalc(value, type) {
  let uso = 0;
  if (type === "us-gallon") uso = value * 0.0078125;
  else if (type === "us-quart") uso = value * 0.03125;
  else if (type === "us-pint") uso = value * 0.0625;
  else if (type === "us-cup") uso = value * 0.123223;
  else if (type === "us-ounce") uso = value;
  else if (type === "us-tablespoon") uso = value * 2;
  else if (type === "us-teaspoon") uso = value * 6;
  else if (type === "liter") uso = value * 0.0295735;
  else if (type === "milliliter") uso = value * 29.5735;
  else uso = "Invalid";
  result.value = uso;
}

function usTablespoonCalc(value, type) {
  let ustb = 0;
  if (type === "us-gallon") ustb = value * 0.00390625;
  else if (type === "us-quart") ustb = value * 0.015625;
  else if (type === "us-pint") ustb = value * 0.03125;
  else if (type === "us-cup") ustb = value * 0.0616115;
  else if (type === "us-ounce") ustb = value * 0.5;
  else if (type === "us-tablespoon") ustb = value;
  else if (type === "us-teaspoon") ustb = value * 3;
  else if (type === "liter") ustb = value / 67.628;
  else if (type === "milliliter") ustb = value * 14.7868;
  else ustb = "Invalid";
  result.value = ustb;
}

function usTeaspoonCalc(value, type) {
  let usts = 0;
  if (type === "us-gallon") usts = value / 768;
  else if (type === "us-quart") usts = value / 192;
  else if (type === "us-pint") usts = value / 96;
  else if (type === "us-cup") usts = value / 48.692;
  else if (type === "us-ounce") usts = value / 6;
  else if (type === "us-tablespoon") usts = value / 3;
  else if (type === "us-teaspoon") usts = value;
  else if (type === "liter") usts = value / 202.9;
  else if (type === "milliliter") usts = value * 4.92892;
  else usts = "Invalid";
  result.value = usts;
}

function literCalc(value, type) {
  let l = 0;
  if (type === "us-gallon") l = value / 3.785;
  else if (type === "us-quart") l = value * 1.057;
  else if (type === "us-pint") l = value * 2.113;
  else if (type === "us-cup") l = value * 4.167;
  else if (type === "us-ounce") l = value * 33.814;
  else if (type === "us-tablespoon") l = value * 67.628;
  else if (type === "us-teaspoon") l = value * 202.9;
  else if (type === "liter") l = value;
  else if (type === "milliliter") l = value * 1000;
  else l = "Invalid";
  result.value = l;
}

function milliliterCalc(value, type) {
  let ml = 0;
  if (type === "us-gallon") ml = value / 3785;
  else if (type === "us-quart") ml = value / 946.4;
  else if (type === "us-pint") ml = value / 473.2;
  else if (type === "us-cup") ml = value / 240;
  else if (type === "us-ounce") ml = value / 29.574;
  else if (type === "us-tablespoon") ml = value / 14.787;
  else if (type === "us-teaspoon") ml = value / 4.929;
  else if (type === "liter") ml = value / 1000;
  else if (type === "milliliter") ml = value;
  else ml = "Invalid";
  result.value = ml;
}

function microgramCalc(value, type) {
  let tnne = 0;
  if (type === "microgram") tnne = value;
  else if (type === "milligram") tnne = value / 1000;
  else if (type === "gram") tnne = value / 1e6;
  else if (type === "kilogram") tnne = value / 1e9;
  else if (type === "metric-ton") tnne = value / 1e12;
  else if (type === "ounce") tnne = value / 2.835e7;
  else if (type === "pound") tnne = value / 4.536e8;
  else if (type === "stone") tnne = value / 6.35e9;
  else if (type === "us-ton") tnne = value / 9.072e11;
  else tnne = "Invalid";

  result.value = tnne;
}

function milligramCalc(value, type) {
  let mlg = 0;
  if (type === "microgram") mlg = value * 1000;
  else if (type === "milligram") mlg = value;
  else if (type === "gram") mlg = value / 1000;
  else if (type === "kilogram") mlg = value / 1e6;
  else if (type === "metric-ton") mlg = value / 1e9;
  else if (type === "ounce") mlg = value / 28350;
  else if (type === "pound") mlg = value / 453600;
  else if (type === "stone") mlg = value / 6.35e6;
  else if (type === "us-ton") mlg = value / 9.072e8;
  else mlg = "Invalid";

  result.value = mlg;
}

function gramCalc(value, type) {
  let g = 0;
  if (type === "microgram") g = value * 1e6;
  else if (type === "milligram") g = value * 1000;
  else if (type === "gram") g = value;
  else if (type === "kilogram") g = value / 1000;
  else if (type === "metric-ton") g = value / 1e6;
  else if (type === "ounce") g = value / 28.35;
  else if (type === "pound") g = value / 453.6;
  else if (type === "stone") g = value / 6350;
  else if (type === "us-ton") g = value / 907200;
  else g = "Invalid";

  result.value = g;
}

function kilogramCalc(value, type) {
  let kg = 0;
  if (type === "microgram") kg = value * 1e9;
  else if (type === "milligram") kg = value * 1e6;
  else if (type === "gram") kg = value * 1000;
  else if (type === "kilogram") kg = value;
  else if (type === "metric-ton") kg = value / 1000;
  else if (type === "ounce") kg = value * 35.274;
  else if (type === "pound") kg = value * 2.205;
  else if (type === "stone") kg = value / 6.35;
  else if (type === "us-ton") kg = value / 907.2;
  else kg = "Invalid";

  result.value = kg;
}

function metricTonCalc(value, type) {
  let mt = 0;
  if (type === "microgram") mt = value * 1e12;
  else if (type === "milligram") mt = value * 1e9;
  else if (type === "gram") mt = value * 1e6;
  else if (type === "kilogram") mt = value * 1000;
  else if (type === "metric-ton") mt = value;
  else if (type === "ounce") mt = value * 35270;
  else if (type === "pound") mt = value * 2205;
  else if (type === "stone") mt = value * 157.5;
  else if (type === "us-ton") mt = value * 1.102;
  else mt = "Invalid";

  result.value = mt;
}

function ounceCalc(value, type) {
  let oz = 0;
  if (type === "microgram") oz = value * 2.835e7;
  else if (type === "milligram") oz = value * 28350;
  else if (type === "gram") oz = value * 28.35;
  else if (type === "kilogram") oz = value / 35.274;
  else if (type === "metric-ton") oz = value / 35270;
  else if (type === "ounce") oz = value;
  else if (type === "pound") oz = value / 16;
  else if (type === "stone") oz = value / 224;
  else if (type === "us-ton") oz = value / 32000;
  else oz = "Invalid";

  result.value = oz;
}

function poundCalc(value, type) {
  let lb = 0;
  if (type === "microgram") lb = value * 4.536e8;
  else if (type === "milligram") lb = value * 453600;
  else if (type === "gram") lb = value * 453.6;
  else if (type === "kilogram") lb = value / 2.205;
  else if (type === "metric-ton") lb = value / 2205;
  else if (type === "ounce") lb = value * 16;
  else if (type === "pound") lb = value;
  else if (type === "stone") lb = value / 14;
  else if (type === "us-ton") lb = value / 2000;
  else lb = "Invalid";

  result.value = lb;
}

function stoneCalc(value, type) {
  let st = 0;
  if (type === "microgram") st = value * 6.35e9;
  else if (type === "milligram") st = value * 6.35e6;
  else if (type === "gram") st = value * 6350;
  else if (type === "kilogram") st = value * 6.35;
  else if (type === "metric-ton") st = value / 157.5;
  else if (type === "ounce") st = value * 224;
  else if (type === "pound") st = value * 14;
  else if (type === "stone") st = value;
  else if (type === "us-ton") st = value / 142.9;
  else st = "Invalid";

  result.value = st;
}

function usTonCalc(value, type) {
  let ton = 0;
  if (type === "microgram") ton = value * 9.072e11;
  else if (type === "milligram") ton = value * 9.072e8;
  else if (type === "gram") ton = value * 907200;
  else if (type === "kilogram") ton = value * 907.2;
  else if (type === "metric-ton") ton = value / 1.102;
  else if (type === "ounce") ton = value * 32000;
  else if (type === "pound") ton = value * 2000;
  else if (type === "stone") ton = value * 142.9;
  else if (type === "us-ton") ton = value;
  else ton = "Invalid";

  result.value = ton;
}

function celsiusCalc(value, type) {
  let c = 0;
  if (type === "celsius") c = value;
  else if (type === "fahrenheit") c = (value * 9) / 5 + 32;
  else if (type === "kelvin") c = value + 273.15;
  else if (type === "rankine") c = ((value + 273.15) * 9) / 5;
  else c = "Invalid";
  result.value = c;
}

function fahrenheitCalc(value, type) {
  let f = 0;
  if (type === "celsius") f = ((value - 32) * 5) / 9;
  else if (type === "fahrenheit") f = value;
  else if (type === "kelvin") f = ((value + 459.67) * 5) / 9;
  else if (type === "rankine") f = value + 459.67;
  else f = "Invalid";
  result.value = f;
}

function kelvinCalc(value, type) {
  let k = 0;
  if (type === "celsius") k = value - 273.15;
  else if (type === "fahrenheit") k = (value * 9) / 5 - 459.67;
  else if (type === "kelvin") k = value;
  else if (type === "rankine") k = (value * 9) / 5;
  else k = "Invalid";
  result.value = k;
}

function rankineCalc(value, type) {
  let r = 0;
  if (type === "celsius") r = (value * 5) / 9 - 273.15;
  else if (type === "fahrenheit") r = value - 459.67;
  else if (type === "kelvin") r = (value * 5) / 9;
  else if (type === "rankine") r = value;
  else r = "Invalid";
  result.value = r;
}
