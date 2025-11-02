const items = document.querySelectorAll(".accordion button");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const expanded = item.getAttribute("aria-expanded") === "true";
    items.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    if (!expanded) item.setAttribute("aria-expanded", "true");
  });
});
