/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "666Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('img'),
    poster = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    movieslist = document.querySelector('.promo__interactive-list');

function deleteAdv(arr) {
    arr.forEach((element) => {
        element.remove();
    });
}

function makeChange() {
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    genre.textContent = 'Драма';
}

function creatListFilms(films, parent) {
    parent.innerHTML = '';
    films.sort();

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i +1}.  ${film}
        <div class="delete"></div>
        </li>
        `;
    });
}

deleteAdv(adv);
makeChange();
creatListFilms(movieDB.movies, movieslist);