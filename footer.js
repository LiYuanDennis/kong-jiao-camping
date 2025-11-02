document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-bottom");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("visible");
        observer.unobserve(footer); // 播一次就停止觀察
      }
    });
  }, { threshold: 0.2 }); // 超過 20% 出現在畫面就觸發

  observer.observe(footer);
});

