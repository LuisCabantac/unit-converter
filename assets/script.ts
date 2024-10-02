import * as Calculations from "./utils/calculations";

const toggleButton = document.querySelector(
  ".theme-mode-btn"
) as HTMLButtonElement;
const bodyElement = document.querySelector("body") as HTMLBodyElement;
const isDarkMode = localStorage.getItem("darkMode") === "true";

function renderResult(result: string) {
  document.querySelector<HTMLInputElement>("#result")!.value = result;
}

function displayUnits(selector: string, display: string) {
  document.querySelectorAll(selector).forEach((element: Element) => {
    (element as HTMLElement).style.display = display;
    renderResult("");
  });
}

document
  .querySelector<HTMLSelectElement>("#select-unit")!
  .addEventListener("change", function (event: Event) {
    const unitSelect = (event.target as HTMLSelectElement).value;

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

const checkChoiceEquals = function (
  choiceOne: HTMLSelectElement,
  choiceTwo: HTMLSelectElement
) {
  if (choiceOne.selectedIndex !== 0 && choiceTwo.selectedIndex !== 0) {
    choiceOne.selectedIndex -= 1;
  } else {
    choiceTwo.selectedIndex += 1;
  }
};

const calculateUnit = function (
  inputValue: number,
  choiceOne: keyof typeof Calculations,
  choiceTwo: keyof Calculations.CalculationsObject
) {
  const result = Calculations[choiceOne][choiceTwo](inputValue);
  renderResult(String(result));
};

function isValidUnit(value: string): value is keyof typeof Calculations {
  return value in Calculations;
}

function getUnit(inputEl: string, selectorOne: string, selectorTwo: string) {
  const choiceOne = document.querySelector(selectorOne) as HTMLSelectElement;
  const choiceTwo = document.querySelector(selectorTwo) as HTMLSelectElement;
  if (
    choiceOne &&
    choiceTwo &&
    isValidUnit(choiceOne.value) &&
    isValidUnit(choiceTwo.value)
  ) {
    if (choiceOne.value === choiceTwo.value) {
      checkChoiceEquals(choiceOne, choiceTwo);
    } else {
      calculateUnit(+inputEl, choiceOne.value, choiceTwo.value);
    }
  } else {
    console.error("Invalid unit selected.");
  }
}

function getSelectedUnit() {
  const selectUnit =
    document.querySelector<HTMLSelectElement>("#select-unit")?.value;
  const inputEl = document.querySelector<HTMLInputElement>("#input-el")?.value!;

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
}

document
  .querySelector<HTMLInputElement>("#input-el")
  ?.addEventListener("input", getSelectedUnit);

document
  .querySelectorAll("select")
  .forEach((element) => element.addEventListener("change", getSelectedUnit));

function toggleDarkMode() {
  (bodyElement as HTMLBodyElement).classList.toggle("body-dk-mode");
  (document.querySelector(".container") as HTMLDivElement).classList.toggle(
    "container-dk-mode"
  );
  const selectLabel = document.querySelector(
    ".select-unit-label"
  ) as HTMLLabelElement;
  selectLabel.classList.toggle("select-unit-label-dk-mode");
  (
    document.querySelector(".conversion-section") as HTMLDivElement
  ).classList.toggle("conversion-section-dk-mode");
  document.querySelector(".output-el")?.classList.toggle("result-dk-mode");
  document
    .querySelectorAll("select")
    .forEach((el) => el.classList.toggle("select-dk-mode"));
  document.querySelector("#input-el")?.classList.toggle("input-dk-mode");
}

if (isDarkMode) {
  toggleDarkMode();
  toggleButton.classList.add("theme-mode-btn-dk-mode");
}

toggleButton.addEventListener("click", function () {
  toggleDarkMode();
  this.classList.toggle("theme-mode-btn-dk-mode");

  localStorage.setItem(
    "darkMode",
    String(bodyElement.classList.contains("body-dk-mode"))
  );
});
