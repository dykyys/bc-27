// 'use strict';

const galleryListRef = document.querySelector('.gallery');
const bannerRef = document.querySelector('.banner__img');
const galleryImgRef = document.querySelectorAll('.gallery__img');

const handleImgClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const { bannerUrl } = event.target.dataset;
  bannerRef.src = bannerUrl;
};
galleryListRef.addEventListener('click', handleImgClick);

galleryImgRef.forEach(img =>
  img.addEventListener(
    'load',
    event => {
      event.target.classList.add('appear');
    },
    { once: true }
  )
);

const setSource = function () {
  galleryImgRef.forEach(img => {
    const source = img.dataset.src;
    img.src = source;
  });
};

const createLazyScript = () => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('referrerpolicy', 'no-referrer');

  document.body.append(script);
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується!');
  setSource();
} else {
  console.log('Атрибут loading не підтримується!');
  createLazyScript();
}

//2 варіант

// const lasyLoad = targets => {
//   const options = {
//     rootMargin: '150px',
//   };

//   const onEntry = (entries, observer) => {
//     entries.forEach(({ target, isIntersecting }) => {
//       if (isIntersecting) {
//         const source = target.dataset.src;
//         target.src = source;
//         target.classList.add('appear');
//         observer.unobserve(target);
//       }
//     });
//   };

//   const io = new IntersectionObserver(onEntry, options);

//   targets.forEach(target => io.observe(target));
// };

// lasyLoad(galleryImgRef);
