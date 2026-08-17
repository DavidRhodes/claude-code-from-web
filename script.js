const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});
