(() => {
  const overlay = document.querySelector('.opening-overlay');
  if (!overlay) return;
  const finish = () => {
    document.documentElement.classList.remove('opening-active');
    overlay.remove();
  };
  if (document.documentElement.classList.contains('opening-seen') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish();
    return;
  }
  try { sessionStorage.setItem('bharata-opening-seen', '1'); } catch {}
  overlay.addEventListener('animationend', event => { if (event.target === overlay) finish(); });
  window.setTimeout(finish, 3200);
})();
