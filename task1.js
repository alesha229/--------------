(function () {
  "use strict";
})();

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(
    '.topic-item input[type="checkbox"]'
  );
  const progressPercentage = document.querySelector(".progress-percentage");

  // Загрузка сохраненного состояния
  checkboxes.forEach((checkbox) => {
    const topic = checkbox.dataset.topic;
    const isChecked = localStorage.getItem(topic) === "true";
    checkbox.checked = isChecked;

    checkbox.addEventListener("change", () => {
      localStorage.setItem(topic, checkbox.checked);
      updateProgress();
    });
  });

  function updateProgress() {
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter((cb) => cb.checked).length;
    const percentage = Math.round((checked / total) * 100);
    progressPercentage.textContent = `${percentage}%`;
  }

  // Начальный подсчет прогресса
  updateProgress();
});
