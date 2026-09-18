/* HOME ONLY — Welcome notification */
(function () {
  const overlay = document.getElementById('welcomeOverlay');
  if (!overlay) return;
  setTimeout(() => overlay.classList.add('hide'), 3000);
})();
