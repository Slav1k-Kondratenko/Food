'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "666Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
        

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };

    const makeChange = () => {
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        genre.textContent = 'Драма';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function creatMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
         <li class="promo__interactive-item">${i +1}.  ${film}
             <div class="delete"></div>
         </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);

                creatMovieList(films, parent);
            });
        });
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value,
            favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorite) {
                console.log('Add my Favorite film');
            }

            movieDB.movies.push(newFilm);
            creatMovieList(movieDB.movies, moviesList);
        }

        event.target.reset();
    });

    deleteAdv(adv);
    makeChange();
    creatMovieList(movieDB.movies, moviesList);
});