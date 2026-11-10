(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  const toast = document.querySelector('#toast');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImg = document.querySelector('#lightbox-img');
  const lightboxTitle = document.querySelector('#lightbox-title');
  const lightboxDescription = document.querySelector('#lightbox-description');
  const lightboxClose = document.querySelector('.lightbox-close');
  let lastFocus = null;
  let toastTimer = null;

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
  };

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Abrir menú');
    mobileMenu.hidden = true;
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded',String(!expanded));
    menuButton.setAttribute('aria-label',expanded?'Abrir menú':'Cerrar menú');
    mobileMenu.hidden = expanded;
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {if(window.innerWidth>990) closeMenu()});

  const openLightbox = (image, title, description, alt) => {
    lastFocus = document.activeElement;
    lightboxImg.src = image;
    lightboxImg.alt = alt || title;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    lightbox.hidden = false;
    document.body.classList.add('modal-open');
    lightboxClose.focus();
  };
  const closeLightbox = () => {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('modal-open');
    if(lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };
  document.querySelectorAll('[data-image]').forEach(el => el.addEventListener('click', () => {
    openLightbox(el.dataset.image, el.dataset.title, el.dataset.description, el.querySelector('img')?.alt);
  }));
  document.querySelector('#ticket-open').addEventListener('click', () => {
    openLightbox('assets/entradas-diseno.webp', 'Entrada de muestra · no válida', 'La venta de entradas aún no está activa. Este QR y el número impreso en la maqueta son informativos o de demostración, no validan acceso al evento.', 'Modelo de entrada general para Norte Km0, proyecto en preparación');
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.querySelector('[data-close]').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if(e.key==='Escape') {closeLightbox();closeMenu()}
    if(e.key==='Tab' && !lightbox.hidden) {
      const focusable = [lightboxClose];
      if (e.shiftKey && document.activeElement === focusable[0]) {e.preventDefault();focusable.at(-1).focus()}
      else if (!e.shiftKey && document.activeElement === focusable.at(-1)) {e.preventDefault();focusable[0].focus()}
    }
  });
  document.querySelector('#share-site').addEventListener('click',async() => {
    const data={title:'Raíces de Acentejo · Norte Km0',text:'Conoce la propuesta enogastronómica Norte Km0 (Tenerife).',url:window.location.href};
    try {
      if(navigator.share) {await navigator.share(data);return}
      if(navigator.clipboard && window.isSecureContext) {await navigator.clipboard.writeText(data.url);showToast('Enlace copiado al portapapeles');return}
      const temp=document.createElement('textarea');temp.value=data.url;document.body.appendChild(temp);temp.select();document.execCommand('copy');temp.remove();showToast('Enlace copiado al portapapeles');
    } catch(error) {if(error.name !== 'AbortError') showToast('No se ha podido compartir el enlace')}
  });
  document.querySelector('#footer-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  document.querySelector('#year').textContent = new Date().getFullYear().toString();

  // Al navegar, solo destacamos los enlaces que están visibles en la barra de escritorio.
  if('IntersectionObserver' in window){
    const sections=[...document.querySelectorAll('main section[id]')];
    const activeObs=new IntersectionObserver(entries => {
      for (const ent of entries) if (ent.isIntersecting) {
        document.querySelectorAll('.desktop-nav a').forEach(a => a.removeAttribute('aria-current'));
        const link = document.querySelector(`.desktop-nav a[href="#${ent.target.id}"]`);
        if(link)link.setAttribute('aria-current','true');
      }
    },{rootMargin:'-25% 0px -65% 0px'});
    sections.forEach(el=>activeObs.observe(el));
  }
})();
