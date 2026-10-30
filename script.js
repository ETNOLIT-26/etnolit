document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".menu");
  if (toggle && menu) toggle.addEventListener("click", () => menu.classList.toggle("open"));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  document.querySelectorAll("[data-answer]").forEach(card => {
    const result = card.querySelector(".quiz-result");
    card.querySelectorAll(".option").forEach(option => {
      option.addEventListener("click", () => {
        card.querySelectorAll(".option").forEach(o => o.classList.remove("correct","wrong"));
        if (option.dataset.value === card.dataset.answer) {
          option.classList.add("correct");
          if (result) {
            result.style.display = "block";
            result.textContent = "Benar! Kamu sudah memahami bagian ini.";
          }
        } else {
          option.classList.add("wrong");
          if (result) {
            result.style.display = "block";
            result.textContent = "Belum tepat. Coba baca lagi materi di atas.";
          }
        }
      });
    });
  });

  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });
});
