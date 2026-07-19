const galleryImages = [
  'assets/travel1.jpg',
  'assets/travel2.jpg',
  'assets/travel3.jpg',
  'assets/travel4.jpg'
];

const cards = Array.from(document.querySelectorAll('.summer-card'));
const lightbox = document.getElementById('summerLightbox');
const lightboxImage = document.getElementById('summerLightboxImage');
const closeBtn = document.getElementById('summerLightboxClose');
const prevBtn = document.getElementById('summerLightboxPrev');
const nextBtn = document.getElementById('summerLightboxNext');
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImage.src = galleryImages[index];
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentIndex];
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowRight') showNext();
  if (event.key === 'ArrowLeft') showPrev();
});
