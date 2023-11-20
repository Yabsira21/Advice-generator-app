let advice_id = document.querySelector("span");
let quote = document.querySelector("h1");
let button = document.querySelector(".circle");

let previous_id = 0;

button.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      advice_id.textContent = data["slip"]["id"];
      quote.textContent = data["slip"]["advice"];
      console.log(data["slip"]["advice"]);
    });
});
