document.addEventListener("DOMContentLoaded", () => {
  let i = 0;

  document
    .querySelector("#counting-btn")
    .addEventListener("click", function (e) {
      e.target.textContent = ++i;
    });
});
