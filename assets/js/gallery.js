// Simple gallery lightbox for GLH
(function(){
  const galleryButtons = Array.from(document.querySelectorAll('[data-gallery-src]'));
  const lightbox = document.getElementById('glh-lightbox');
  const lightboxImg = document.getElementById('glh-lightbox-img');
  const closeBtn = document.getElementById('glh-lightbox-close');
  if(!galleryButtons.length || !lightbox) return;

  let currentIndex = -1;
  const srcs = galleryButtons.map(b=>b.getAttribute('data-gallery-src'));

  function openAt(index){
    currentIndex = index;
    lightboxImg.src = srcs[currentIndex];
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  galleryButtons.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=> openAt(idx));
  });

  closeBtn && closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e)=>{
    if(lightbox.classList.contains('hidden')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowRight'){
      currentIndex = (currentIndex + 1) % srcs.length;
      lightboxImg.src = srcs[currentIndex];
    }
    if(e.key === 'ArrowLeft'){
      currentIndex = (currentIndex - 1 + srcs.length) % srcs.length;
      lightboxImg.src = srcs[currentIndex];
    }
  });
})();
