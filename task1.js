(function () {
  "use strict";
})();

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(
    '.topic-item input[type="checkbox"]'
  );
  const progressPercentage = document.querySelector(".progress-percentage");

  // Загрузка данных из progress.json
  async function loadProgress() {
    try {
      const response = await fetch("progress.json");
      const progress = await response.json();

      // Загрузка отмеченных тем
      if (progress.topics) {
        Object.entries(progress.topics).forEach(([topic, isChecked]) => {
          if (isChecked) {
            localStorage.setItem(topic, "true");
          }
        });
      }

      // Загрузка записей дневника
      if (progress.diary) {
        localStorage.setItem("diaryEntries", JSON.stringify(progress.diary));
      }

      // Обновляем UI
      updateCheckboxes();
      loadEntries();
      updateProgress();
    } catch (error) {
      console.log("Не удалось загрузить progress.json:", error);
    }
  }

  // Функция обновления чекбоксов
  function updateCheckboxes() {
    checkboxes.forEach((checkbox) => {
      const topic = checkbox.dataset.topic;
      const isChecked =
        localStorage.getItem(topic) === "true" ||
        (typeof COMPLETED_TOPICS !== "undefined" && COMPLETED_TOPICS[topic]);
      checkbox.checked = isChecked;
    });
  }

  // Инициализация чекбоксов
  updateCheckboxes();

  function updateProgress() {
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter((cb) => cb.checked).length;
    const percentage = Math.round((checked / total) * 100);
    progressPercentage.textContent = `${percentage}%`;
  }

  // Начальный подсчет прогресса
  updateProgress();

  // Инициализация дневника
  const entryDate = document.getElementById("entryDate");
  const entryContent = document.getElementById("entryContent");
  const saveEntry = document.getElementById("saveEntry");
  const entriesHistory = document.getElementById("entriesHistory");

  // Установка текущей даты
  entryDate.valueAsDate = new Date();

  // Загрузка истории записей
  function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
    entriesHistory.innerHTML = entries
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(
        (entry) => `
        <div class="history-entry">
          <div class="history-date">${new Date(
            entry.date
          ).toLocaleDateString()}</div>
          <div class="history-content">${formatContent(entry.content)}</div>
        </div>
      `
      )
      .join("");

    // Подсветка кода после добавления в DOM
    document.querySelectorAll(".history-entry pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  // Функция для форматирования контента с кодом
  function formatContent(content) {
    // Заменяем ```js и ```code на ```javascript для единообразия
    content = content.replace(/```(js|code)/g, "```javascript");

    // Если код не обёрнут в маркеры языка, но находится между ```
    content = content.replace(/```\s*([\s\S]*?)```/g, (_, code) => {
      // Проверяем, не начинается ли уже с javascript
      if (!code.trim().startsWith("javascript")) {
        return `\`\`\`javascript${code}\`\`\``;
      }
      return `\`\`\`${code}\`\`\``;
    });

    // Обрабатываем все блоки кода
    return content.replace(
      /```javascript([\s\S]*?)```/g,
      (_, code) =>
        `<pre><code class="language-javascript">${code.trim()}</code></pre>`
    );
  }

  // Сохранение новой записи
  saveEntry.addEventListener("click", () => {
    const entries = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
    entries.push({
      date: entryDate.value,
      content: entryContent.value,
    });
    localStorage.setItem("diaryEntries", JSON.stringify(entries));

    // Очистка формы
    entryContent.value = "";
    entryDate.valueAsDate = new Date();

    // Обновление истории
    loadEntries();
  });

  // Начальная загрузка истории
  loadEntries();

  // Функция для получения всего прогресса
  function getAllProgress() {
    const progress = {
      topics: Array.from(checkboxes).reduce((acc, cb) => {
        if (cb.checked) {
          acc[cb.dataset.topic] = true;
        }
        return acc;
      }, {}),
      diary: JSON.parse(localStorage.getItem("diaryEntries") || "[]"),
    };
    return progress;
  }

  // Добавляем обработчик для кнопки экспорта
  document.getElementById("exportProgress").addEventListener("click", () => {
    const progress = getAllProgress();
    const dataStr = JSON.stringify(progress, null, 2);

    // Создаем элемент для скачивания
    const downloadEl = document.createElement("a");
    downloadEl.setAttribute(
      "href",
      "data:text/json;charset=utf-8," + encodeURIComponent(dataStr)
    );
    downloadEl.setAttribute("download", "progress.json");

    downloadEl.style.display = "none";
    document.body.appendChild(downloadEl);

    downloadEl.click();
    document.body.removeChild(downloadEl);
  });

  // Загружаем данные из JSON при старте
  loadProgress();
});
