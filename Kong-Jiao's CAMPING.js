function setupMarquee(id, direction) {
  const marquee = document.getElementById(id);
  const track = marquee.querySelector('.marquee-track');
  const clone = track.cloneNode(true);
  track.after(clone);

  function applyAnimation() {
    const width = track.scrollWidth;
    let baseSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--speed'));
    
    // 手機螢幕放慢速度（數字越小越快）
    if (window.innerWidth <= 768) {
      baseSpeed = baseSpeed * 1;
    }

    const duration = width / baseSpeed;
    const anim = direction === 'left' ? 'moveLeft' : 'moveRight';
    const style = document.createElement('style');
    style.textContent = `
      #${id} .marquee-track {
        animation: ${anim} ${duration}s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }

  window.addEventListener('load', applyAnimation);
  window.addEventListener('resize', applyAnimation);

  marquee.addEventListener('mouseenter', () => marquee.classList.add('paused'));
  marquee.addEventListener('mouseleave', () => marquee.classList.remove('paused'));
}
setupMarquee('row1', 'left');
setupMarquee('row2', 'right');

// Q&A 手風琴效果
const items = document.querySelectorAll(".accordion button");
items.forEach((item) => {
  item.addEventListener("click", () => {
    const expanded = item.getAttribute("aria-expanded") === "true";
    items.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    if (!expanded) item.setAttribute("aria-expanded", "true");
  });
});
