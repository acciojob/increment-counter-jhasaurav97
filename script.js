//your JS code here. If required.
const incrementBtn = document.getElementById("incrementBtn");
    let counterEl = document.getElementById("counter");
    let count = 0;
    incrementBtn.addEventListener("click", () => {
      counterEl.textContent = count + 1;
      alert(count++);
    })