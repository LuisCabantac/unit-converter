export const sqKilometre = {
  sqKilometre(value) {
    return value;
  },
  sqMetre(value) {
    return value * 1e6;
  },
  sqMile(value) {
    return value / 2.59;
  },
  sqYard(value) {
    return value * 1.196e6;
  },
  sqFoot(value) {
    return value * 1.076e7;
  },
  sqInch(value) {
    return value * 1.55e9;
  },
  hectare(value) {
    return value * 100;
  },
  acre(value) {
    return value * 247.1;
  },
};

export const sqMetre = {
  sqKilometre(value) {
    return value / 1e6;
  },
  sqMetre(value) {
    return value;
  },
  sqMile(value) {
    return value / 2.59e6;
  },
  sqYard(value) {
    return value * 1.196;
  },
  sqFoot(value) {
    return value * 10.764;
  },
  sqInch(value) {
    return value * 1550;
  },
  hectare(value) {
    return value / 10000;
  },
  acre(value) {
    return value / 4047;
  },
};

export const sqMile = {
  sqKilometre(value) {
    return value * 2.59;
  },
  sqMetre(value) {
    return value * 2.59e6;
  },
  sqMile(value) {
    return value;
  },
  sqYard(value) {
    return value * 3.098e6;
  },
  sqFoot(value) {
    return value * 2.788e7;
  },
  sqInch(value) {
    return value * 4.014e9;
  },
  hectare(value) {
    return value * 259;
  },
  acre(value) {
    return value * 640;
  },
};

export const sqYard = {
  sqKilometre(value) {
    return value / 1.196e6;
  },
  sqMetre(value) {
    return value / 1.196;
  },
  sqMile(value) {
    return value / 3.098e6;
  },
  sqYard(value) {
    return value;
  },
  sqFoot(value) {
    return value * 9;
  },
  sqInch(value) {
    return value * 1296;
  },
  hectare(value) {
    return value / 11960;
  },
  acre(value) {
    return value / 4840;
  },
};

export const sqFoot = {
  sqKilometre(value) {
    return value / 1.076e7;
  },
  sqMetre(value) {
    return value / 10.764;
  },
  sqMile(value) {
    return value / 2.788e7;
  },
  sqYard(value) {
    return value / 9;
  },
  sqFoot(value) {
    return value;
  },
  sqInch(value) {
    return value * 144;
  },
  hectare(value) {
    return value / 107600;
  },
  acre(value) {
    return value / 43560;
  },
};

export const sqInch = {
  sqKilometre(value) {
    return value / 1.55e9;
  },
  sqMetre(value) {
    return value / 1550;
  },
  sqMile(value) {
    return value / 4.014e9;
  },
  sqYard(value) {
    return value / 1296;
  },
  sqFoot(value) {
    return value / 144;
  },
  sqInch(value) {
    return value;
  },
  hectare(value) {
    return value / 1.55e7;
  },
  acre(value) {
    return value / 6.273e6;
  },
};

export const hectare = {
  sqKilometre(value) {
    return value / 100;
  },
  sqMetre(value) {
    return value * 10000;
  },
  sqMile(value) {
    return value / 259;
  },
  sqYard(value) {
    return value * 11960;
  },
  sqFoot(value) {
    return value * 107600;
  },
  sqInch(value) {
    return value * 1.55e7;
  },
  hectare(value) {
    return value;
  },
  acre(value) {
    return value * 2.471;
  },
};

export const acre = {
  sqKilometre(value) {
    return value / 247.1;
  },
  sqMetre(value) {
    return value * 4047;
  },
  sqMile(value) {
    return value / 640;
  },
  sqYard(value) {
    return value * 4840;
  },
  sqFoot(value) {
    return value * 43560;
  },
  sqInch(value) {
    return value * 6.273e6;
  },
  hectare(value) {
    return value / 2.471;
  },
  acre(value) {
    return value;
  },
};

export const hertz = {
  hertz(value) {
    return value;
  },
  kHertz(value) {
    return value / 1000;
  },
  mHertz(value) {
    return value / 1e6;
  },
  gHertz(value) {
    return value / 1e9;
  },
};

export const kHertz = {
  hertz(value) {
    return value * 1000;
  },
  kHertz(value) {
    return value;
  },
  mHertz(value) {
    return value / 1000;
  },
  gHertz(value) {
    return value / 1e6;
  },
};

export const mHertz = {
  hertz(value) {
    return value * 1e6;
  },
  kHertz(value) {
    return value * 1000;
  },
  mHertz(value) {
    return value;
  },
  gHertz(value) {
    return value / 1000;
  },
};

export const gHertz = {
  hertz(value) {
    return value * 1e9;
  },
  kHertz(value) {
    return value * 1e6;
  },
  mHertz(value) {
    return value * 1000;
  },
  gHertz(value) {
    return value;
  },
};

export const mpUSGallon = {
  mpUSGallon(value) {
    return value;
  },
  mpGallon(value) {
    return value * 1.201;
  },
  kmpLitre(value) {
    return value / 2.352;
  },
  lp100Km(value) {
    return 235.215 / value;
  },
};

export const mpGallon = {
  mpUSGallon(value) {
    return value / 1.201;
  },
  mpGallon(value) {
    return value;
  },
  kmpLitre(value) {
    return value / 2.825;
  },
  lp100Km(value) {
    return 282.481 / value;
  },
};

export const kmpLitre = {
  mpUSGallon(value) {
    return value * 2.352;
  },
  mpGallon(value) {
    return value * 2.825;
  },
  kmpLitre(value) {
    return value;
  },
  lp100Km(value) {
    return 100 / value;
  },
};

export const lp100Km = {
  mpUSGallon(value) {
    return 235.215 / value;
  },
  mpGallon(value) {
    return 282.481 / value;
  },
  kmpLitre(value) {
    return 100 / value;
  },
  lp100Km(value) {
    return value;
  },
};

export const bar = {
  bar(value) {
    return value;
  },
  pascal(value) {
    return value * 100000;
  },
  pperSqInch(value) {
    return value * 14.504;
  },
  sAtmosphere(value) {
    return value / 1.013;
  },
  torr(value) {
    return value * 750.1;
  },
};

export const pascal = {
  bar(value) {
    return value / 100000;
  },
  pascal(value) {
    return value;
  },
  pperSqInch(value) {
    return value / 6895;
  },
  sAtmosphere(value) {
    return value / 101300;
  },
  torr(value) {
    return value / 133.3;
  },
};

export const pperSqInch = {
  bar(value) {
    return value / 14.504;
  },
  pascal(value) {
    return value * 6895;
  },
  pperSqInch(value) {
    return value;
  },
  sAtmosphere(value) {
    return value / 14.696;
  },
  torr(value) {
    return value * 51.715;
  },
};

export const sAtmosphere = {
  bar(value) {
    return value * 1.013;
  },
  pascal(value) {
    return value * 101300;
  },
  pperSqInch(value) {
    return value * 14.696;
  },
  sAtmosphere(value) {
    return value;
  },
  torr(value) {
    return value * 760;
  },
};

export const torr = {
  bar(value) {
    return value / 750.1;
  },
  pascal(value) {
    return value * 133.3;
  },
  pperSqInch(value) {
    return value / 51.715;
  },
  sAtmosphere(value) {
    return value / 760;
  },
  torr(value) {
    return value;
  },
};

export const kilometre = {
  kilometre(value) {
    return value;
  },
  metre(value) {
    return value * 1000;
  },
  centimetre(value) {
    return value * 100000;
  },
  millimetre(value) {
    return value * 1000000;
  },
  micrometre(value) {
    return value * 1e9;
  },
  nanometre(value) {
    return value * 1e12;
  },
  mile(value) {
    return value / 1.609344;
  },
  yard(value) {
    return value / 0.0009144;
  },
  foot(value) {
    return value * 3280.84;
  },
  inch(value) {
    return value * 39370.1;
  },
};

export const metre = {
  kilometre(value) {
    return value / 1000;
  },
  metre(value) {
    return value;
  },
  centimetre(value) {
    return value * 100;
  },
  millimetre(value) {
    return value * 1000;
  },
  micrometre(value) {
    return value * 1000000;
  },
  nanometre(value) {
    return value * 1000000000;
  },
  mile(value) {
    return value / 1609.344;
  },
  yard(value) {
    return value / 0.9144;
  },
  foot(value) {
    return value / 0.3048;
  },
  inch(value) {
    return value / 0.0254;
  },
};

export const centimetre = {
  kilometre(value) {
    return value / 100000;
  },
  metre(value) {
    return value / 100;
  },
  centimetre(value) {
    return value;
  },
  millimetre(value) {
    return value * 10;
  },
  micrometre(value) {
    return value * 10000;
  },
  nanometre(value) {
    return value * 1e7;
  },
  mile(value) {
    return value / 160934.4;
  },
  yard(value) {
    return value / 91.44;
  },
  foot(value) {
    return value / 30.48;
  },
  inch(value) {
    return value / 2.54;
  },
};

export const millimetre = {
  kilometre(value) {
    return value / 1000000;
  },
  metre(value) {
    return value / 1000;
  },
  centimetre(value) {
    return value / 10;
  },
  millimetre(value) {
    return value;
  },
  micrometre(value) {
    return value * 1000;
  },
  nanometre(value) {
    return value * 1e6;
  },
  mile(value) {
    return value / 1609344;
  },
  yard(value) {
    return value / 91.44;
  },
  foot(value) {
    return value / 304.8;
  },
  inch(value) {
    return value / 25.4;
  },
};

export const micrometre = {
  kilometre(value) {
    return value / 1e9;
  },
  metre(value) {
    return value / 1e6;
  },
  centimetre(value) {
    return value / 10000;
  },
  millimetre(value) {
    return value / 1000;
  },
  micrometre(value) {
    return value;
  },
  nanometre(value) {
    return value * 1000;
  },
  mile(value) {
    return value / 1.609e9;
  },
  yard(value) {
    return value / 914400;
  },
  foot(value) {
    return value / 304800;
  },
  inch(value) {
    return value / 25400;
  },
};

export const nanometre = {
  kilometre(value) {
    return value / 1e12;
  },
  metre(value) {
    return value / 1e9;
  },
  centimetre(value) {
    return value / 1e7;
  },
  millimetre(value) {
    return value / 1e6;
  },
  micrometre(value) {
    return value / 1000;
  },
  nanometre(value) {
    return value;
  },
  mile(value) {
    return value / 1.609e12;
  },
  yard(value) {
    return value / 9.144e8;
  },
  foot(value) {
    return value / 3.048e8;
  },
  inch(value) {
    return value / 2.54e7;
  },
};

export const mile = {
  kilometre(value) {
    return value * 1.609344;
  },
  metre(value) {
    return value * 1609.344;
  },
  centimetre(value) {
    return value * 160934.4;
  },
  millimetre(value) {
    return value * 1609344;
  },
  micrometre(value) {
    return value * 1.609e9;
  },
  nanometre(value) {
    return value * 1.609e12;
  },
  mile(value) {
    return value;
  },
  yard(value) {
    return value * 1760;
  },
  foot(value) {
    return value * 5280;
  },
  inch(value) {
    return value * 63360;
  },
};

export const yard = {
  kilometre(value) {
    return value * 0.0009144;
  },
  metre(value) {
    return value * 0.9144;
  },
  centimetre(value) {
    return value * 91.44;
  },
  millimetre(value) {
    return value * 914.4;
  },
  micrometre(value) {
    return value * 914400;
  },
  nanometre(value) {
    return value * 9.144e8;
  },
  mile(value) {
    return value / 1760;
  },
  yard(value) {
    return value;
  },
  foot(value) {
    return value * 3;
  },
  inch(value) {
    return value * 36;
  },
};

export const foot = {
  kilometre(value) {
    return value / 3280.84;
  },
  metre(value) {
    return value / 3.281;
  },
  centimetre(value) {
    return value * 30.48;
  },
  millimetre(value) {
    return value * 304.8;
  },
  micrometre(value) {
    return value * 304800;
  },
  nanometre(value) {
    return value * 3.048e8;
  },
  mile(value) {
    return value / 5280;
  },
  yard(value) {
    return value / 3;
  },
  foot(value) {
    return value;
  },
  inch(value) {
    return value * 12;
  },
};

export const inch = {
  kilometre(value) {
    return value / 3280.84;
  },
  metre(value) {
    return value / 3.281;
  },
  centimetre(value) {
    return value * 30.48;
  },
  millimetre(value) {
    return value * 304.8;
  },
  micrometre(value) {
    return value * 304800;
  },
  nanometre(value) {
    return value * 3.048e8;
  },
  mile(value) {
    return value / 5280;
  },
  yard(value) {
    return value / 3;
  },
  foot(value) {
    return value / 12;
  },
  inch(value) {
    return value;
  },
};

export const usGallon = {
  usGallon(value) {
    return value;
  },
  usQuart(value) {
    return value * 4;
  },
  usPint(value) {
    return value * 8;
  },
  usCup(value) {
    return value * 15.773;
  },
  usOunce(value) {
    return value * 128;
  },
  usTablespoon(value) {
    return value * 256;
  },
  usTeaspoon(value) {
    return value * 768;
  },
  liter(value) {
    return value * 3.785;
  },
  milliliter(value) {
    return value * 3785;
  },
};

export const usQuart = {
  usGallon(value) {
    return value / 4;
  },
  usQuart(value) {
    return value;
  },
  usPint(value) {
    return value * 2;
  },
  usCup(value) {
    return value * 3.942;
  },
  usOunce(value) {
    return value * 32;
  },
  usTablespoon(value) {
    return value * 64;
  },
  usTeaspoon(value) {
    return value * 192;
  },
  liter(value) {
    return value / 1.057;
  },
  milliliter(value) {
    return value * 946.353;
  },
};

export const usPint = {
  usGallon(value) {
    return value / 8;
  },
  usQuart(value) {
    return value / 2;
  },
  usPint(value) {
    return value;
  },
  usCup(value) {
    return value * 1.972;
  },
  usOunce(value) {
    return value * 16;
  },
  usTablespoon(value) {
    return value * 32;
  },
  usTeaspoon(value) {
    return value * 96;
  },
  liter(value) {
    return value * 0.473176;
  },
  milliliter(value) {
    return value * 473.176;
  },
};

export const usCup = {
  usGallon(value) {
    return value / 15.772;
  },
  usQuart(value) {
    return value / 3.943;
  },
  usPint(value) {
    return value / 1.972;
  },
  usCup(value) {
    return value;
  },
  usOunce(value) {
    return value * 8.11537;
  },
  usTablespoon(value) {
    return value * 16.2307;
  },
  usTeaspoon(value) {
    return value * 48.6922;
  },
  liter(value) {
    return value * 0.24;
  },
  milliliter(value) {
    return value * 240;
  },
};

export const usOunce = {
  usGallon(value) {
    return value * 0.0078125;
  },
  usQuart(value) {
    return value * 0.03125;
  },
  usPint(value) {
    return value * 0.0625;
  },
  usCup(value) {
    return value * 0.123223;
  },
  usOunce(value) {
    return value;
  },
  usTablespoon(value) {
    return value * 2;
  },
  usTeaspoon(value) {
    return value * 6;
  },
  liter(value) {
    return value * 0.0295735;
  },
  milliliter(value) {
    return value * 29.5735;
  },
};

export const usTablespoon = {
  usGallon(value) {
    return value * 0.00390625;
  },
  usQuart(value) {
    return value * 0.015625;
  },
  usPint(value) {
    return value * 0.03125;
  },
  usCup(value) {
    return value * 0.0616115;
  },
  usOunce(value) {
    return value * 0.5;
  },
  usTablespoon(value) {
    return value;
  },
  usTeaspoon(value) {
    return value * 3;
  },
  liter(value) {
    return value / 67.628;
  },
  milliliter(value) {
    return value * 14.7868;
  },
};

export const usTeaspoon = {
  usGallon(value) {
    return value / 768;
  },
  usQuart(value) {
    return value / 192;
  },
  usPint(value) {
    return value / 96;
  },
  usCup(value) {
    return value / 48.692;
  },
  usOunce(value) {
    return value / 6;
  },
  usTablespoon(value) {
    return value / 3;
  },
  usTeaspoon(value) {
    return value;
  },
  liter(value) {
    return value / 202.9;
  },
  milliliter(value) {
    return value * 4.92892;
  },
};

export const liter = {
  usGallon(value) {
    return value / 3.785;
  },
  usQuart(value) {
    return value * 1.057;
  },
  usPint(value) {
    return value * 2.113;
  },
  usCup(value) {
    return value * 4.167;
  },
  usOunce(value) {
    return value * 33.814;
  },
  usTablespoon(value) {
    return value * 67.628;
  },
  usTeaspoon(value) {
    return value * 202.9;
  },
  liter(value) {
    return value;
  },
  milliliter(value) {
    return value * 1000;
  },
};

export const milliliter = {
  usGallon(value) {
    return value / 3785;
  },
  usQuart(value) {
    return value / 946.4;
  },
  usPint(value) {
    return value / 473.2;
  },
  usCup(value) {
    return value / 240;
  },
  usOunce(value) {
    return value / 29.574;
  },
  usTablespoon(value) {
    return value / 14.787;
  },
  usTeaspoon(value) {
    return value / 4.929;
  },
  liter(value) {
    return value / 1000;
  },
  milliliter(value) {
    return value;
  },
};

export const microgram = {
  microgram(value) {
    return value;
  },
  milligram(value) {
    return value / 1000;
  },
  gram(value) {
    return value / 1e6;
  },
  kilogram(value) {
    return value / 1e9;
  },
  metricTon(value) {
    return value / 1e12;
  },
  ounce(value) {
    return value / 2.835e7;
  },
  pound(value) {
    return value / 4.536e8;
  },
  stone(value) {
    return value / 6.35e9;
  },
  usTon(value) {
    return value / 9.072e11;
  },
};

export const milligram = {
  microgram(value) {
    return value * 1000;
  },
  milligram(value) {
    return value;
  },
  gram(value) {
    return value / 1000;
  },
  kilogram(value) {
    return value / 1e6;
  },
  metricTon(value) {
    return value / 1e9;
  },
  ounce(value) {
    return value / 28350;
  },
  pound(value) {
    return value / 453600;
  },
  stone(value) {
    return value / 6.35e6;
  },
  usTon(value) {
    return value / 9.072e8;
  },
};

export const gram = {
  microgram(value) {
    return value * 1e6;
  },
  milligram(value) {
    return value * 1000;
  },
  gram(value) {
    return value;
  },
  kilogram(value) {
    return value / 1000;
  },
  metricTon(value) {
    return value / 1e6;
  },
  ounce(value) {
    return value / 28.35;
  },
  pound(value) {
    return value / 453.6;
  },
  stone(value) {
    return value / 6350;
  },
  usTon(value) {
    return value / 907200;
  },
};

export const kilogram = {
  microgram(value) {
    return value * 1e9;
  },
  milligram(value) {
    return value * 1e6;
  },
  gram(value) {
    return value * 1000;
  },
  kilogram(value) {
    return value;
  },
  metricTon(value) {
    return value / 1000;
  },
  ounce(value) {
    return value * 35.274;
  },
  pound(value) {
    return value * 2.205;
  },
  stone(value) {
    return value / 6.35;
  },
  usTon(value) {
    return value / 907.2;
  },
};

export const metricTon = {
  microgram(value) {
    return value * 1e12;
  },
  milligram(value) {
    return value * 1e9;
  },
  gram(value) {
    return value * 1e6;
  },
  kilogram(value) {
    return value * 1000;
  },
  metricTon(value) {
    return value;
  },
  ounce(value) {
    return value * 35270;
  },
  pound(value) {
    return value * 2205;
  },
  stone(value) {
    return value * 157.5;
  },
  usTon(value) {
    return value * 1.102;
  },
};

export const ounce = {
  microgram(value) {
    return value * 2.835e7;
  },
  milligram(value) {
    return value * 28350;
  },
  gram(value) {
    return value * 28.35;
  },
  kilogram(value) {
    return value / 35.274;
  },
  metricTon(value) {
    return value / 35270;
  },
  ounce(value) {
    return value;
  },
  pound(value) {
    return value / 16;
  },
  stone(value) {
    return value / 224;
  },
  usTon(value) {
    return value / 32000;
  },
};

export const pound = {
  microgram(value) {
    return value * 4.536e8;
  },
  milligram(value) {
    return value * 453600;
  },
  gram(value) {
    return value * 453.6;
  },
  kilogram(value) {
    return value / 2.205;
  },
  metricTon(value) {
    return value / 2205;
  },
  ounce(value) {
    return value * 16;
  },
  pound(value) {
    return value;
  },
  stone(value) {
    return value / 14;
  },
  usTon(value) {
    return value / 2000;
  },
};

export const stone = {
  microgram(value) {
    return value * 6.35e9;
  },
  milligram(value) {
    return value * 6.35e6;
  },
  gram(value) {
    return value * 6350;
  },
  kilogram(value) {
    return value * 6.35;
  },
  metricTon(value) {
    return value / 157.5;
  },
  ounce(value) {
    return value * 224;
  },
  pound(value) {
    return value * 14;
  },
  stone(value) {
    return value;
  },
  usTon(value) {
    return value / 142.9;
  },
};

export const usTon = {
  microgram(value) {
    return value * 9.072e11;
  },
  milligram(value) {
    return value * 9.072e8;
  },
  gram(value) {
    return value * 907200;
  },
  kilogram(value) {
    return value * 907.2;
  },
  metricTon(value) {
    return value / 1.102;
  },
  ounce(value) {
    return value * 32000;
  },
  pound(value) {
    return value * 2000;
  },
  stone(value) {
    return value * 142.9;
  },
  usTon(value) {
    return value;
  },
};

export const celsius = {
  celsius(value) {
    return value;
  },
  fahrenheit(value) {
    return (value * 9) / 5 + 32;
  },
  kelvin(value) {
    return value + 273.15;
  },
  rankine(value) {
    return ((value + 273.15) * 9) / 5;
  },
};

export const fahrenheit = {
  celsius(value) {
    return ((value - 32) * 5) / 9;
  },
  fahrenheit(value) {
    return value;
  },
  kelvin(value) {
    return ((value + 459.67) * 5) / 9;
  },
  rankine(value) {
    return value + 459.67;
  },
};

export const kelvin = {
  celsius(value) {
    return value - 273.15;
  },
  fahrenheit(value) {
    return (value * 9) / 5 - 459.67;
  },
  kelvin(value) {
    return value;
  },
  rankine(value) {
    return (value * 9) / 5;
  },
};

export const rankine = {
  celsius(value) {
    return (value * 5) / 9 - 273.15;
  },
  fahrenheit(value) {
    return value - 459.67;
  },
  kelvin(value) {
    return (value * 5) / 9;
  },
  rankine(value) {
    return value;
  },
};
