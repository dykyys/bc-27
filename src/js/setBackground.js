import { createClient } from 'pexels';

const defaultImg =
  'https://dreamdim.ua/wp-content/uploads/2022/03/rus_nax-1024x589.jpeg';

const randomNumber = max => {
  return Math.floor(Math.random() * max);
};

export const setBackgroung = query => {
  const client = createClient(
    '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74'
  );
  client.photos
    .search({ query, per_page: 21, color: 'yellow, blue', size: 'large' })
    .then(({ photos }) => {
      const index = randomNumber(photos.length);

      let src = photos[index]?.src?.landscape;
      src ??= defaultImg;
      //if(src === null || src === undefined){
      // src = defaultImg
      // }

      document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${src}') center fixed; background-size: cover;`;
    });
};
