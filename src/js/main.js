import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import calc from './modules/calc';
import timer from './modules/timer';
import forms from './modules/forms';
import images from './modules/images';

window.addEventListener('load', () => {    
    'use strict';
    modals();
    
    const tabsSettings = {
        decorationTab: document.querySelectorAll('.decoration .decoration_slider .no_click'),
        decorationContent: document.querySelector('.decoration_content .row').children,
    
        glazingTab: document.querySelectorAll('.glazing .slick-active'),
        glazingContent: document.querySelectorAll('.row.glazing_content'),
        
        modalTab: document.querySelectorAll('.balcon_icons_img'),
        modalContent: document.querySelectorAll('.big_img.text-center img')
    };

    tabs(tabsSettings);
    forms();
    calc();
    timer('2021-12-18');
    images();
});
