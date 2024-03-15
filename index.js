const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const resetBtn = document.querySelector("#reset-btn");
const metreFoot = document.querySelector("#metre-foot-p");
const literGallon = document.querySelector("#liter-gallon-p");
const kiloPound = document.querySelector("#kilo-pound-p");

convertBtn.addEventListener("click", function () {
  if (inputEl.value === "");
  else {
    metreAndFoot();
    literAndGallon();
    kiloAndPound();
  }
});

resetBtn.addEventListener("click", function () {
  inputEl.value = "";
  metreFoot.textContent = "Metre = Foot | Foot = Metre";
  literGallon.textContent = "Liter = Gallon | Gallon = Foot";
  kiloPound.textContent = "Kilo = Pound | Pound = Kilo";
});

function metreAndFoot() {
  const metFoot = Number(inputEl.value) * 3.28084;
  const fooMetre = Number(inputEl.value) * 0.3048;
  metreFoot.textContent = `${inputEl.value} Metre = ${metFoot.toFixed(
    4
  )} Foot | ${inputEl.value} Foot = ${fooMetre.toFixed(4)} Metre`;
}

function literAndGallon() {
  const litGallon = Number(inputEl.value) * 0.264172;
  const galLiter = Number(inputEl.value) * 3.785412;
  literGallon.textContent = `${inputEl.value} Liter = ${litGallon.toFixed(
    4
  )} Gallon | ${inputEl.value} Gallon = ${galLiter.toFixed(4)} Liter`;
}

function kiloAndPound() {
  const kilPound = Number(inputEl.value) * 2.204623;
  const pouKilo = Number(inputEl.value) * 0.45359237;
  kiloPound.textContent = `${inputEl.value} Kilo = ${kilPound.toFixed(
    4
  )} Pound | ${inputEl.value} Pound = ${pouKilo.toFixed(4)} Kilo`;
}
