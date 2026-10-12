// Mounts the affinda.com HubSpot contact form (same form as /contact/)
// when the contact section scrolls near the viewport.
const HUBSPOT_SRC = 'https://js.hsforms.net/forms/embed/v2.js';
const target = document.getElementById('hs-contact-form');

function loadHubSpot() {
  return new Promise((resolve, reject) => {
    if (window.hbspt) return resolve(window.hbspt);
    const script = document.createElement('script');
    script.src = HUBSPOT_SRC;
    script.async = true;
    script.onload = () => (window.hbspt ? resolve(window.hbspt) : reject(new Error('HubSpot not available')));
    script.onerror = () => reject(new Error('HubSpot failed to load'));
    document.head.appendChild(script);
  });
}

function mount() {
  loadHubSpot()
    .then((hbspt) => {
      hbspt.forms.create({
        region: 'na1',
        portalId: '45754152',
        formId: 'ca7ca9a6-4967-45b5-98b0-ca40d1319e49',
        target: '#hs-contact-form',
        cssRequired: false,
        cssClass: 'hs-contact',
      });
    })
    .catch(() => {
      target.innerHTML =
        '<p>The form didn\'t load. Email us at <a href="mailto:contact@affinda.com">contact@affinda.com</a> instead.</p>';
    });
}

if (target) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        mount();
      },
      { rootMargin: '300px' },
    );
    observer.observe(target);
  } else {
    mount();
  }
}
