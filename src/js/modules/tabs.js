const tabs = (tabsSettings) => {
    
    let indexdecorationTab=0, indexdecorationContent=0;
    const decorationTab=tabsSettings.decorationTab;
    const decorationContent=tabsSettings.decorationContent;

    let indexGlazingTab=0, indexGlazingContent=0; 
    const glazingTab=tabsSettings.glazingTab;
    const glazingContent=tabsSettings.glazingContent;
    
    let indexModalTab=0, indexModalContent=0; 
    const modalTab=tabsSettings.modalTab;
    const modalContent=tabsSettings.modalContent;

    function showTab(Content, Tab, activClass, display='block') {
        Tab.classList.add(activClass);
        Content.style.display = display;
    }

    function hideTab(Content, indContent, Tab, indTab, activClass) {
        Tab[indTab].classList.remove(activClass);
        Content[indContent].style.display = 'none';
    }

    function clickTab() {
        decorationTab.forEach((elem, i) => { 
            elem.addEventListener('click', ()=> {
                hideTab(decorationContent, indexdecorationContent, decorationTab, indexdecorationTab, 'after_click')
                showTab(decorationContent[i], decorationTab[i], 'after_click');
                indexdecorationContent=i; indexdecorationTab=i; 
            });
        });

        glazingTab.forEach((elem, i) => {
            elem.addEventListener('click', ()=> {
                hideTab(glazingContent, indexGlazingContent, glazingTab, indexGlazingTab, 'slick-current');
                showTab(glazingContent[i], glazingTab[i], 'slick-current');
                indexGlazingContent=i; indexGlazingTab=i;
            });
        });           

        modalTab.forEach((elem, i) => {
            elem.addEventListener('click', ()=> {
                hideTab(modalContent, indexModalContent, modalTab, indexModalTab, 'do_image_more');
                showTab(modalContent[i], modalTab[i], 'do_image_more', 'inline-block'); 
                indexModalContent=i; indexModalTab=i;
            });
        });
    }

    modalContent[0].style.display = 'inline-block';
    glazingContent[0].style.display = 'block';

    clickTab();
};

export default tabs;