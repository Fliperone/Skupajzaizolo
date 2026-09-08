// SL / IT preklop + mobilni meni — brez odvisnosti
(function () {
  const btnSL = document.getElementById('btn-sl');
  const btnIT = document.getElementById('btn-it');

  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-sl]').forEach((el) => {
      const v = el.getAttribute(lang === 'sl' ? 'data-sl' : 'data-it');
      if (v !== null) el.textContent = v;
    });
    btnSL.classList.toggle('active', lang === 'sl');
    btnIT.classList.toggle('active', lang === 'it');
    try { localStorage.setItem('szi-lang', lang); } catch (e) {}
  }

  btnSL.addEventListener('click', () => setLang('sl'));
  btnIT.addEventListener('click', () => setLang('it'));

  let saved = 'sl';
  try { saved = localStorage.getItem('szi-lang') || 'sl'; } catch (e) {}
  setLang(saved === 'it' ? 'it' : 'sl');

  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('mobileNav');
  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobile.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => mobile.classList.remove('open'))
  );
})();
