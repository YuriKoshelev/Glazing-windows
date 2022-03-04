function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}

const modals = () => {
    function btndMadal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);
        
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                closeModal();
                showModal(modal);
                //document.body.classList.add('modal-open');
            });
        });
        
        close.addEventListener('click', () => {
            closeModal();
        });
         
        modal.addEventListener('click', (e)=>{
             if (e.target === modal){
                closeModal();
             }
        });

        function closeModal() {
          modal.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = '0px';
          document.querySelector('.popup_calc_end').style.display = 'none';
          document.querySelector('.popup_calc_profile').style.display = 'none';
          document.querySelector('.popup_calc').style.display = 'none';
          //document.body.classList.remove('modal-open'); 
        }
    }

    function showModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScroll()}px`;
        clearInterval(idTimeout);
    }

    function showModalByTime(selector, time) {
        const id = setTimeout(function() {
                    showModal(selector);
                    }, time);
        return id;                  
    }

    function checked() {
        document.querySelectorAll('.checkbox').forEach((item, i) => {
            item.addEventListener('click', () => {
                if (i == 0) {document.querySelectorAll('.checkbox')[1].checked=false;}
                else {document.querySelectorAll('.checkbox')[0].checked=false;}
            });
        });
    }

    btndMadal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    btndMadal('.phone_link', '.popup', '.popup .popup_close');
    btndMadal('.button.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    btndMadal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
    btndMadal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
    const idTimeout = showModalByTime(document.querySelector('.popup'), 60000); 
    
    checked();

};

export default modals;
export {calcScroll};