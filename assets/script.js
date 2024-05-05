import * as Calculations from "./utils/calculations.js";

const renderResult = function (result) {
  document.querySelector("#result").value = result;
};

const displayUnits = function (selector, display) {
  document.querySelectorAll(selector).forEach((element) => {
    element.style.display = display;
    renderResult("");
  });
};

document
  .querySelector("#select-unit")
  .addEventListener("change", function (event) {
    const unitSelect = event.target.value;

    displayUnits(".area-unit", "none");

    displayUnits(".frequency-unit", "none");

    displayUnits(".fuel-unit", "none");

    displayUnits(".length-unit", "none");

    displayUnits(".mass-unit", "none");

    displayUnits(".pressure-unit", "none");

    displayUnits(".temperature-unit", "none");

    displayUnits(".volume-unit", "none");

    if (unitSelect === "area") {
      displayUnits(".area-unit", "block");
    }
    if (unitSelect === "frequency") {
      displayUnits(".frequency-unit", "block");
    }
    if (unitSelect === "fuel") {
      displayUnits(".fuel-unit", "block");
    }
    if (unitSelect === "length") {
      displayUnits(".length-unit", "block");
    }
    if (unitSelect === "mass") {
      displayUnits(".mass-unit", "block");
    }
    if (unitSelect === "pressure") {
      displayUnits(".pressure-unit", "block");
    }
    if (unitSelect === "temp") {
      displayUnits(".temperature-unit", "block");
    }
    if (unitSelect === "volume") {
      displayUnits(".volume-unit", "block");
    }
  });

const checkChoiceEquals = function (choiceOne, choiceTwo) {
  if (choiceOne.selectedIndex !== 0 && choiceTwo.selectedIndex !== 0) {
    choiceOne.selectedIndex -= 1;
  } else {
    choiceTwo.selectedIndex += 1;
  }
};

const calculateUnit = function (inputValue, choiceOne, choiceTwo) {
  renderResult(Calculations[choiceOne][choiceTwo](inputValue));
};

const getUnit = function (inputEl, selectorOne, selectorTwo) {
  const choiceOne = document.querySelector(selectorOne);
  const choiceTwo = document.querySelector(selectorTwo);
  if (choiceOne.value === choiceTwo.value) {
    checkChoiceEquals(choiceOne, choiceTwo);
  }
  if (choiceOne.value !== choiceTwo.value)
    calculateUnit(inputEl, choiceOne.value, choiceTwo.value);
};

const getSelectedUnit = function () {
  const selectUnit = document.querySelector("#select-unit").value;
  const inputEl = +document.querySelector("#input-el").value;

  if (inputEl !== "") {
    if (selectUnit === "area")
      getUnit(inputEl, "#area-choiceOne", "#area-choiceTwo");

    if (selectUnit === "frequency")
      getUnit(inputEl, "#frequency-choiceOne", "#frequency-choiceTwo");

    if (selectUnit === "fuel")
      getUnit(inputEl, "#fuel-choiceOne", "#fuel-choiceTwo");

    if (selectUnit === "length")
      getUnit(inputEl, "#length-choiceOne", "#length-choiceTwo");

    if (selectUnit === "mass")
      getUnit(inputEl, "#mass-choiceOne", "#mass-choiceTwo");

    if (selectUnit === "pressure")
      getUnit(inputEl, "#pressure-choiceOne", "#pressure-choiceTwo");

    if (selectUnit === "temp")
      getUnit(inputEl, "#temp-choiceOne", "#temp-choiceTwo");

    if (selectUnit === "volume")
      getUnit(inputEl, "#volume-choiceOne", "#volume-choiceTwo");
  }
};

document.querySelector("#input-el").addEventListener("input", getSelectedUnit);

document
  .querySelectorAll("select")
  .forEach((element) => element.addEventListener("change", getSelectedUnit));
