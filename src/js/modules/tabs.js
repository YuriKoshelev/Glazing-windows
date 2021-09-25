const tabs = () => {
    let ActivTab=document.querySelector('.decoration .decoration_slider .after_click');
    let ActivDecoration=document.querySelector('.decoration_content0');
    const decoration=document.querySelectorAll('.decoration .decoration_slider .no_click');

    let ActivGlazingTab=document.querySelector('.glazing .slick-current');
    let ActivGlazingContent=document.querySelector('.glazing_cont0'); 
    const glazing=document.querySelectorAll('.glazing .slick-active');
    
    function showTab(tabSelector, activeTab, activClass, typeTab) {
        document.querySelector(tabSelector).style.display = 'block';
        if (typeTab === 'decoration'){ActivTab=activeTab; ActivDecoration=document.querySelector(tabSelector);}
        if (typeTab === 'glazing'){ActivGlazingTab=activeTab; ActivGlazingContent=document.querySelector(tabSelector);}
        activeTab.classList.add(activClass);
    }

    function hideTab(oldTabSelector, oldActiveTab, activClass, typeTab) {
        oldActiveTab.classList.remove(activClass);
        oldTabSelector.style.display = 'none';
    }

    function clickTab() {
        decoration.forEach((elem, i ) => { 
            elem.addEventListener('click', (e)=> {
                let el=e.target;
                if (!(el.classList.contains('no_click'))){el=el.parentElement;}
                hideTab(ActivDecoration, ActivTab, 'after_click', '');
                showTab(`.decoration_content${i}`, el, 'after_click', 'decoration'); 
            });
        });

        glazing.forEach((elem, i) => {
            elem.addEventListener('click', (e)=> {
                hideTab(ActivGlazingContent, ActivGlazingTab, '_', '');
                showTab(`.glazing_cont${i}`, e.target, '_' ,'glazing'); 
            });
        });           

        const windowsTab = document.querySelectorAll('.balcon_icons_img');
        windowsTab.forEach((elem, i) => {
            elem.addEventListener('click', (e)=> {
                let t = document.querySelector('.big_img.text-center img[style="display: block; margin: 0px auto;"]');
                if (t) {t.style.display = 'none';}
                document.querySelector('.balcon_icons_img.do_image_more').classList.remove('do_image_more');
                showTab(`.big_img.text-center [alt="Тип${i+1}"]`, e.target.parentElement, 'do_image_more' ,'');
                document.querySelector(`.big_img.text-center [alt="Тип${i+1}"]`).style.margin = '0 auto'; 
            });
        });
    }

    document.querySelector(`.big_img.text-center [alt="Тип1"]`).style.display = 'block';
    document.querySelector(`.big_img.text-center [alt="Тип1"]`).style.margin = '0 auto';

    clickTab();
};

export default tabs;