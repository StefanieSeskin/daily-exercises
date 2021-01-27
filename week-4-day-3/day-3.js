// Q1:
// prevent myForm from refreshing the page on submit = line 12
// if the value of the input is "multiply"  = const line 10
// grab the value of #num1 and #num2 = const line 8 & line 9
// and show the answer as an alert = IF (13) line 15 -- result

const multiplication = document.querySelector("#myForm");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const answer = document.querySelector("#answer");

multiplication.addEventListener("submit", function (e) {
  e.preventDefault();
  if (answer.value == "multiply") {
    alert(num1.textContent * num2.textContent);
  }
  console.log(num1.textContent);
});
// Q2:
// update #box to the background color green when
//myBtn is clicked

const myButton = document.querySelector("#myBtn");
const box = document.querySelector("#box");
myButton.addEventListener("click", function (e) {
  e.preventDefault();
  box.bgcolor = "green";
});
