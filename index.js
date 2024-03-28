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

convertBtn.addEventListener("click", () => {
  getSelectedUnit();
});

function getSelectedUnit() {
  const selectUnit = document.querySelector("#select-unit").value;
  const inputEl = document.querySelector("#input-el").value;

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
