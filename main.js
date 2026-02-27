const revealItems = [...document.querySelectorAll('.reveal')];

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 55, 360)}ms`;
  revealObserver.observe(item);
});

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const scrollProgress = document.getElementById('scroll-progress');
const updateProgress = () => {
  if (!scrollProgress) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionIds = navLinks.map((link) => link.getAttribute('href')).filter(Boolean);
const sections = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);

if (sections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === id;
          link.classList.toggle('active', isActive);
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
  );

  sections.forEach((section) => navObserver.observe(section));
}

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const systemCards = [...document.querySelectorAll('#systems-grid [data-tags]')];
let activeFilter = 'all';

const applySystemFilters = () => {
  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === activeFilter);
  });

  systemCards.forEach((card) => {
    const tags = card.dataset.tags.split(',').map((tag) => tag.trim());
    const visible = activeFilter === 'all' ? true : tags.includes(activeFilter);
    card.classList.toggle('is-hidden', !visible);
  });
};

applySystemFilters();

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    applySystemFilters();
  });
});

const copyEmailButton = document.getElementById('copy-email');
if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = 'aashaygarg2000@gmail.com';
    const originalText = copyEmailButton.textContent;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = 'Email Copied';
    } catch {
      copyEmailButton.textContent = email;
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = originalText;
    }, 1600);
  });
}
