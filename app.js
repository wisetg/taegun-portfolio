/* Taegun Park — multilingual static portfolio. No build tools or external APIs needed. */
const grid = document.getElementById('stageGrid');
const safe = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const tr = key => UI[language][key] ?? UI.ko[key] ?? key;
const local = value => typeof value === 'string' ? value : value[language] ?? value.ko;
let currentFilter = 'all';
let selectedProjectId = null;
let lastFocus = null;
let language = 'ko';
const visited = (() => {
  try { return new Set(JSON.parse(localStorage.getItem('tg-visited') || '[]')); }
  catch { return new Set(); }
})();

function artHTML(project) {
  const category = project.category === 'game' ? tr('projectCategoryGame') : tr('projectCategoryOther');
  return `<div class="stage-art art-${safe(project.art)}">
    <div class="art-decoration" aria-hidden="true"></div>
    ${project.shot ? `<img class="remote-shot" loading="lazy" src="${safe(project.shot)}" alt="${safe(project.title)} — ${safe(tr('realShot'))}">` : ''}
    <span class="art-label">${safe(category)} / TG</span>
    <span class="stage-index">${safe(project.number)}</span>
    <span class="art-type">${safe(project.shot ? tr('realShot') : tr('visualMotif'))}</span>
    <span class="art-bottom">↗ ${safe(tr('viewFile'))}</span>
  </div>`;
}

function attachImageFallbacks(parent) {
  parent.querySelectorAll('img.remote-shot').forEach(img => img.addEventListener('error', () => { img.style.display = 'none'; }));
}

function render() {
  const shown = PROJECTS.filter(project => currentFilter === 'all' || project.category === currentFilter);
  grid.innerHTML = shown.map(project => {
    const item = project.content[language];
    const state = visited.has(project.id) ? `✓ ${tr('projectVisited')}` : `▶ ${tr('viewProject')}`;
    return `<article class="stage-card"><button type="button" data-id="${safe(project.id)}" aria-label="${safe(project.title)} — ${safe(tr('openProject'))}">
      ${artHTML(project)}<div class="stage-info"><div class="stage-meta"><span>${safe(local(project.period))}</span><span class="card-status">${safe(local(project.status))}</span></div>
      <h3>${safe(project.title)}</h3><p>${safe(item.short)}</p><div class="stage-card-footer"><span>${safe(state)}</span><span aria-hidden="true">↗</span></div></div>
    </button></article>`;
  }).join('');
  document.getElementById('projectCount').textContent = String(shown.length).padStart(2,'0');
  const allCounter = document.getElementById('countAll');
  if (allCounter) allCounter.textContent = String(PROJECTS.length).padStart(2,'0');
  grid.querySelectorAll('button[data-id]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.id, button)));
  attachImageFallbacks(grid);
}

function fillProject(project) {
  const item = project.content[language];
  document.getElementById('detailNumber').textContent = `${tr('modalDetails')} / ${project.number}`;
  const art = document.getElementById('detailArt');
  art.innerHTML = artHTML(project);
  attachImageFallbacks(art);
  document.getElementById('detailMeta').textContent = `${local(project.period)}   /   ${local(project.status)}`;
  document.getElementById('detailTitle').textContent = project.title;
  document.getElementById('detailLead').textContent = item.lead;
  document.getElementById('detailRole').textContent = item.role;
  document.getElementById('detailTasks').innerHTML = item.tasks.map(task => `<li>${safe(task)}</li>`).join('');
  document.getElementById('detailTags').innerHTML = project.tags.map(tag => `<span>${safe(tag)}</span>`).join('');
  document.getElementById('detailInsights').innerHTML = `<h3>${safe(tr('insightsTitle'))}</h3><div class="insight-grid">${item.insights.map(([heading, detail]) => `<article class="insight"><h4>${safe(heading)}</h4><p>${safe(detail)}</p></article>`).join('')}</div>`;
  document.getElementById('detailGallery').innerHTML = project.gallery?.length ? `<div class="gallery-label">${safe(tr('galleryTitle'))}</div><div class="gallery-grid">${project.gallery.map((url,index) => `<a href="${safe(url)}" target="_blank" rel="noopener noreferrer" aria-label="${safe(project.title)} — ${safe(tr('realShot'))} ${index+1}"><img src="${safe(url)}" loading="lazy" alt="${safe(project.title)} — ${safe(tr('realShot'))} ${index+1}"></a>`).join('')}</div>` : '';
  document.getElementById('detailLinks').innerHTML = project.links?.length ? project.links.map(link => `<a href="${safe(link.url)}" target="_blank" rel="noopener noreferrer">${safe(tr({demo:'linkDemo',source:'linkSource',repo:'linkRepo',paper:'linkPaper'}[link.type] || 'viewProject'))} ↗</a>`).join('') : `<p class="no-public-link">${safe(tr('noLinks'))}</p>`;
}

function openProject(id, trigger) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;
  lastFocus = trigger || document.activeElement;
  selectedProjectId = id;
  fillProject(project);
  document.getElementById('detailModal').hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('closeModal').focus();
  visited.add(id);
  try { localStorage.setItem('tg-visited', JSON.stringify([...visited])); } catch {}
  const label = trigger?.querySelector('.stage-card-footer span');
  if (label) label.textContent = `✓ ${tr('projectVisited')}`;
}

function closeModal(id) {
  document.getElementById(id).hidden = true;
  if (id === 'detailModal') selectedProjectId = null;
  if (!document.querySelector('.modal-backdrop:not([hidden])')) document.body.classList.remove('modal-open');
  if (lastFocus?.isConnected) lastFocus.focus();
}

function updateLanguage(nextLanguage, save = true) {
  if (!UI[nextLanguage]) return;
  language = nextLanguage;
  document.documentElement.lang = language;
  document.documentElement.dataset.lang = language;
  document.title = `TAEGUN PARK — ${language === 'ja' ? 'ポートフォリオ' : 'PORTFOLIO'}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', {
    ko: '박태건의 게임 기획 및 소프트웨어 개발 포트폴리오.',
    en: 'Taegun Park — Game design and software development portfolio.',
    ja: 'パク・テゴンのゲーム企画・ソフトウェア開発ポートフォリオ。'
  }[language]);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = tr(el.dataset.i18n);
    el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    // Only built-in, trusted translation strings are inserted as HTML.
    el.innerHTML = tr(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', tr(el.dataset.i18nAria)); });
  document.querySelector('.profile-name').innerHTML = tr('profileName');
  document.querySelectorAll('.language-switch button[data-lang]').forEach(button => {
    const active = button.dataset.lang === language;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('active', active);
  });
  document.getElementById('copyrightYear').textContent = String(new Date().getFullYear());
  render();
  if (selectedProjectId) fillProject(PROJECTS.find(p => p.id === selectedProjectId));
  if (save) { try { localStorage.setItem('tg-portfolio-lang', language); } catch {} }
}

for (const button of document.querySelectorAll('.language-switch button[data-lang]')) {
  button.addEventListener('click', () => updateLanguage(button.dataset.lang));
}

for (const button of document.querySelectorAll('.filter')) {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    for (const other of document.querySelectorAll('.filter')) {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    }
    render();
  });
}

const menu = document.getElementById('menuBtn');
menu.addEventListener('click', () => {
  const nav = document.querySelector('.top-nav');
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.top-nav a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('.top-nav').classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

document.getElementById('closeModal').addEventListener('click', () => closeModal('detailModal'));
document.getElementById('showAward').addEventListener('click', event => {
  lastFocus = event.currentTarget;
  document.getElementById('awardModal').hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('closeAward').focus();
});
document.getElementById('closeAward').addEventListener('click', () => closeModal('awardModal'));
document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('mousedown', event => {
  if (event.target === backdrop) closeModal(backdrop.id);
}));
document.addEventListener('keydown', event => {
  const open = document.querySelector('.modal-backdrop:not([hidden])');
  if (event.key === 'Escape' && open) { event.preventDefault(); closeModal(open.id); return; }
  if (open && event.key === 'Tab') {
    const focusable = [...open.querySelectorAll('a[href],button:not([disabled])')].filter(element => element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    return;
  }
  if (!open && (event.key === 'ArrowRight' || event.key === 'ArrowLeft') && document.activeElement?.matches('#stageGrid button[data-id]')) {
    const buttons = [...grid.querySelectorAll('button[data-id]')];
    const index = buttons.indexOf(document.activeElement);
    const shift = event.key === 'ArrowRight' ? 1 : -1;
    buttons[(index + shift + buttons.length) % buttons.length]?.focus();
    event.preventDefault();
  }
});

let initialLanguage = 'ko';
try { initialLanguage = localStorage.getItem('tg-portfolio-lang') || 'ko'; } catch {}
const urlLanguage = new URLSearchParams(location.search).get('lang');
if (UI[urlLanguage]) initialLanguage = urlLanguage;
updateLanguage(UI[initialLanguage] ? initialLanguage : 'ko', false);
