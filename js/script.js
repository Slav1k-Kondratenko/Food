import calc from './modules/calc';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import cards from './modules/cards';
import modal, {openModal} from './modules/modal';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() =>
        openModal('.modal', modalTimerId), 5000);

    calc();
    cards();
    tabs({
        parentSelector: '.tabheader__items',
        tabsSelector: '.tabheader__item',
        tabsContentSelector: '.tabcontent',
        activeClass: 'tabheader__item_active'
    });
    timer('2022-01-01');
    slider({
        slidesSelector: '.offer__slide',
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
});