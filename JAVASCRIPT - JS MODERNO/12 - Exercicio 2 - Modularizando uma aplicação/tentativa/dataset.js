export function dataSetFinder() {
  document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value;
      input.value += value;
    });
  });
}

export function clearInput() {
  const input = document.getElementById("input");
  input.value = "";
  input.focus();
}
