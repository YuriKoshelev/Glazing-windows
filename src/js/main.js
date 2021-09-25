import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import calc from './modules/calc';
import timer from './modules/timer';
import forms from './modules/forms';

window.addEventListener('load', () => {    
    'use strict';
    modals();
    tabs();
    forms();
    calc();
    timer('2021-12-18');
});
