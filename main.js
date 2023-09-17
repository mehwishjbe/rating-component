//
//
//
//
// const listItems = document.querySelectorAll(".circle-rank");
// listItems.forEach(function (item) {
//   item.addEventListener("click", selectItem);
//   console.log("it is working");
// });

// function selectItem() {
//   const btn5 = document.getElementById("circle5");
//   this.style.backgroundColor = "hsl(217, 12%, 63%)";
//   if (this === btn5) {
//     this.style.backgroundColor = "hsl(25, 97%, 53%)";
//   }
// }

const submitButton = document.querySelector(".submit-btn");

const circleElements = document.querySelectorAll(".circle-rank");

let slectedRating = null;

circleElements.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.style.backgroundColor = "hsl(217, 12%, 63%)";
    slectedRating = ele.textContent;
  });
});

submitButton.addEventListener("click", function () {
  if (slectedRating !== null) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = "You have selected " + slectedRating + " out of 5";
  }
  
});
