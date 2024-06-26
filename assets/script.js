import * as Calculations from "./utils/calculations.js";

const toggleButton = document.querySelector(".theme-mode-btn");
const bodyElement = document.querySelector("body");
const isDarkMode = localStorage.getItem("darkMode") === "true";

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

    displayUnits(".speed-unit", "none");

    displayUnits(".time-unit", "none");

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
    if (unitSelect === "speed") {
      displayUnits(".speed-unit", "block");
    }
    if (unitSelect === "temp") {
      displayUnits(".temperature-unit", "block");
    }
    if (unitSelect === "time") {
      displayUnits(".time-unit", "block");
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

    if (selectUnit === "speed")
      getUnit(inputEl, "#speed-choiceOne", "#speed-choiceTwo");

    if (selectUnit === "temp")
      getUnit(inputEl, "#temp-choiceOne", "#temp-choiceTwo");

    if (selectUnit === "time")
      getUnit(inputEl, "#time-choiceOne", "#time-choiceTwo");

    if (selectUnit === "volume")
      getUnit(inputEl, "#volume-choiceOne", "#volume-choiceTwo");
  }
};

document.querySelector("#input-el").addEventListener("input", getSelectedUnit);

document
  .querySelectorAll("select")
  .forEach((element) => element.addEventListener("change", getSelectedUnit));

const toggleDarkMode = function () {
  bodyElement.classList.toggle("body-dk-mode");
  document.querySelector(".container").classList.toggle("container-dk-mode");
  const selectLabel = document.querySelector(".select-unit-label");
  selectLabel.classList.toggle("select-unit-label-dk-mode");
  document
    .querySelector(".conversion-section")
    .classList.toggle("conversion-section-dk-mode");
  document.querySelector(".output-el").classList.toggle("result-dk-mode");
  document
    .querySelectorAll("select")
    .forEach((el) => el.classList.toggle("select-dk-mode"));
  document.querySelector("#input-el").classList.toggle("input-dk-mode");
};

if (isDarkMode) {
  toggleDarkMode();
  toggleButton.classList.add("theme-mode-btn-dk-mode");
}

toggleButton.addEventListener("click", function () {
  toggleDarkMode();
  this.classList.toggle("theme-mode-btn-dk-mode");

  localStorage.setItem(
    "darkMode",
    bodyElement.classList.contains("body-dk-mode")
  );
});
