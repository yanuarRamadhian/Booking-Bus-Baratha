try {
  document.documentElement.classList.add(sessionStorage.getItem('bharata-opening-seen') ? 'opening-seen' : 'opening-active');
} catch {
  document.documentElement.classList.add('opening-active');
}
