// Q&A 手風琴效果
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".qa-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;
      parent.classList.toggle("active");
    });
  });
});
