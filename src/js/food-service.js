import storegeAPI from './storage';
import menu from './menu.json';
import { createMarkupMenu } from '../templates/createMarkupMenu';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STORAGE_KEY = 'theme';

const listRef = document.querySelector('.gallery');
const themeToggleRef = document.querySelector('.theme-switch__toggle');

initPage();

const markup = createMarkupMenu(menu).join('');
listRef.insertAdjacentHTML('beforeend', markup);

const handleChangeTheme = event => {
  const { checked } = event.target;
  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  storegeAPI.save(THEME_STORAGE_KEY, checked);
};

themeToggleRef.addEventListener('input', handleChangeTheme);

function initPage() {
  const saveChecked = storegeAPI.load(THEME_STORAGE_KEY);
  document.body.className = saveChecked ? Theme.DARK : Theme.LIGHT;
  themeToggleRef.checked = saveChecked ? true : false;
}

{
  /* <li class="menu__item">
    <article class="card">

        <img src="{{image}}" alt="{{name}}" class="card__image" />

        <div class="card__content">
            <h2 class="card__name">{{name}}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                {{price}} кредитов
            </p>

            <p class="card__descr">
                {{description}}
            </p>

            <ul class="tag-list">

                <li class="tag-list__item">{{}}</li>

            </ul>
        </div>

        <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
        </button>

    </article>
</li> */
}
