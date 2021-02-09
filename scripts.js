// when you click and start typing in either input,
// update the others input value with the converted temps
//  1 "keyup events"
// 2 use function, keyword so that you can use this
// eslint-disable-next-line no-unused-expressions
import convert from "./lib.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", function handlekeyup() {
    if (this.id === "DegF") {
      inputs[0].value = convert(this.value, "toCelsius");
    } else {
      inputs[1].value = convert(this.value, "toFahrenheit");
    }
  });
});
