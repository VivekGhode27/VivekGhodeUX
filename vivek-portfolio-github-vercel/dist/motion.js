(() => {
  // The landing page already has its own reveal sequence.
  if (document.querySelector('.page')) return;
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    'main section h2, main section figure, main section .problem-map, main section .three, main section .triad, main section .flow, main section .decision-list, main section .facts, main section .ride-gallery, main section .build-grid, main section .community-photo, main section .community-copy'
  );
  if (!targets.length) return;

  targets.forEach(target => target.setAttribute('data-motion', ''));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: '0px 0px -32px 0px' });

  targets.forEach(target => observer.observe(target));
  requestAnimationFrame(() => document.documentElement.classList.add('motion-ready'));
})();
