// select dom elements

const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");

// initial state
let count = 0;

//event listner
incrementEL.addEventListener("click", () => {
  count++;
  counterEL.innerText = count;
});

decrementEL.addEventListener("click", () => {
  count--;
  counterEL.innerText = count;
});
