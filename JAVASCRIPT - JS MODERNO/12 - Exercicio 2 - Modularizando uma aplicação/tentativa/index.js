import { dataSetFinder, clearInput } from "./dataset.js";
import keyFinder, { copy, themeSwitcher } from "./actions.js";
import calculate from "./calculate.js";

dataSetFinder();

document.getElementById("clear").addEventListener("click", clearInput);

keyFinder();

document.getElementById("equal").addEventListener("click", calculate);

copy();

themeSwitcher();
