(function () {
  'use strict';

  function initMobileNav() {
    var btn = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();
