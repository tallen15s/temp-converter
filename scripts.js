// when you click and start typing in either input,
// update the others input value with the converted temps
//  1 "keyup events"
// 2 use function, keyword so that you can use this
// eslint-disable-next-line no-unused-expressions
import converter from "./lib.js";

const oldTemp = document.querySelector("input");

oldTemp.addEventListener("keyup", (e) => {
  const newTemp = converter(oldTemp.value, "toCelsius");
  console.log(newTemp);
});
