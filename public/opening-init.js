try {
  document.documentElement.classList.add(sessionStorage.getItem('bharata-opening-logo-v2-seen') ? 'opening-seen' : 'opening-active');
} catch {
  document.documentElement.classList.add('opening-active');
}
