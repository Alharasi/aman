const track = document.getElementById('track');
const motionDotButton = document.getElementById('motionDotButton');
const motionDot = document.getElementById('motionDot');
const langToggle = document.getElementById('langToggle');
const langIcon = document.getElementById('langIcon');
const pageName = document.getElementById('pageName');
let pageNameTimer = null;

let current = 0;
const languageMode = document.body.dataset.languageMode || 'both';
const configuredDefaultLanguage = document.body.dataset.defaultLanguage === 'en' ? 'en' : 'ar';
let language = languageMode === 'both' ? configuredDefaultLanguage : languageMode;
let startY = null;
let wheelLocked = false;

function updateMetaDescription(description){
  const tag = document.querySelector('meta[name="description"]');
  if(tag) tag.setAttribute('content', description);
  const og = document.getElementById('ogDescription');
  if(og) og.setAttribute('content', description);
  const twitter = document.getElementById('twitterDescription');
  if(twitter) twitter.setAttribute('content', description);
}

function translatePage(){
  const english = language === 'en';
  const title = english ? document.body.dataset.titleEn : document.body.dataset.titleAr;
  const description = english ? document.body.dataset.descriptionEn : document.body.dataset.descriptionAr;

  document.documentElement.lang = english ? 'en' : 'ar';
  document.documentElement.dir = english ? 'ltr' : 'rtl';
  document.body.dir = english ? 'ltr' : 'rtl';
  document.title = title;
  updateMetaDescription(description);

  const ogTitle = document.getElementById('ogTitle');
  if(ogTitle) ogTitle.setAttribute('content', title);
  const twitterTitle = document.getElementById('twitterTitle');
  if(twitterTitle) twitterTitle.setAttribute('content', title);

  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = english ? el.dataset.en : el.dataset.ar;
  });

  document.querySelectorAll('.contact-icon[data-label-ar]').forEach(icon => {
    icon.setAttribute('aria-label', english ? icon.dataset.labelEn : icon.dataset.labelAr);
  });

  if(langIcon) langIcon.textContent = english ? 'AR' : 'EN';
  if(langToggle) langToggle.setAttribute('aria-label', english ? 'التبديل إلى العربية' : 'Switch to English');
  updateMotionArrow();
}

function updateMotionArrow(){
  const atLastPage = current === 1;
  const english = language === 'en';
  motionDot.classList.toggle('is-middle', false);
  motionDot.classList.toggle('is-up', atLastPage);
  motionDotButton.setAttribute(
    'aria-label',
    atLastPage
      ? (english ? 'Back to the first section' : 'العودة إلى القسم الأول')
      : (english ? 'Next section' : 'القسم التالي')
  );
}

function animateMotionDot(direction = 1){
  if(!motionDot.animate) return;
  motionDot.getAnimations().forEach(animation => animation.cancel());
  const exitY = direction > 0 ? '-15px' : '15px';
  const enterY = direction > 0 ? '15px' : '-15px';
  motionDot.animate([
    {transform:'translateY(0)', opacity:1, offset:0},
    {transform:`translateY(${exitY})`, opacity:0, offset:.42},
    {transform:`translateY(${enterY})`, opacity:0, offset:.52},
    {transform:'translateY(0)', opacity:1, offset:1}
  ], {duration:420, easing:'cubic-bezier(.22,.78,.24,1)'});
}

function showPageName(){
  const english = language === 'en';
  const names = english
    ? [pageName.dataset.homeEn, pageName.dataset.aboutEn]
    : [pageName.dataset.homeAr, pageName.dataset.aboutAr];
  pageName.textContent = names[current];
  pageName.classList.add('visible');
  clearTimeout(pageNameTimer);
  pageNameTimer = setTimeout(() => pageName.classList.remove('visible'), 1100);
}

function goTo(index, animated = true){
  const previous = current;
  const target = Math.max(0, Math.min(1, index));

  if(animated && target !== previous){
    const movingForward = target === (previous + 1) % 2;
    animateMotionDot(movingForward ? 1 : -1);
  }

  current = target;
  updateMotionArrow();

  if(!animated){
    const prev = track.style.transition;
    track.style.transition = 'none';
    track.style.transform = `translate3d(0,-${current * 100}dvh,0)`;
    track.offsetHeight;
    track.style.transition = prev;
  } else {
    track.style.transform = `translate3d(0,-${current * 100}dvh,0)`;
  }

  document.querySelectorAll('.slide').forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
  });
  showPageName();
}

motionDotButton.addEventListener('click', () => {
  goTo(current === 1 ? 0 : current + 1);
});

if(langToggle){
  langToggle.addEventListener('click', () => {
    language = language === 'ar' ? 'en' : 'ar';
    translatePage();
    goTo(0, false);
  });
}

document.addEventListener('pointerdown', e => {
  startY = e.clientY;
}, {passive:true});

document.addEventListener('pointerup', e => {
  if(startY === null) return;
  const dy = e.clientY - startY;
  if(Math.abs(dy) > 45){
    if(dy < 0) goTo(current + 1);
    else goTo(current - 1);
  }
  startY = null;
}, {passive:true});

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowDown') goTo(current + 1);
  if(e.key === 'ArrowUp') goTo(current - 1);
});

document.addEventListener('wheel', e => {
  e.preventDefault();
  if(wheelLocked || Math.abs(e.deltaY) < 18) return;
  wheelLocked = true;
  if(e.deltaY > 0) goTo(current + 1);
  else goTo(current - 1);
  setTimeout(() => { wheelLocked = false; }, 720);
}, {passive:false});

translatePage();
goTo(0, false);
