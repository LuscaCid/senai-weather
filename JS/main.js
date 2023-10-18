import { Elements } from "./elements.js";
import { JSfunctions } from "./functions.js";

const HTMLElements = Elements()

const JSFunctions=  JSfunctions({
    HTMLElements,

})
HTMLElements.buttonLoopa.addEventListener('click', JSFunctions.returnWeather) 