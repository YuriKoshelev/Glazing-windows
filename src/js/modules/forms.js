const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };      

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    document.querySelector('.popup_calc_end .form').classList.add('popup_calc_end_submit');

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData;
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            if (e.target.getAttribute('class') == 'form popup_calc_end_submit') {
                let profile=''; 
                if (document.querySelectorAll('.checkbox')[0].checked) {profile='cold';}
                if (document.querySelectorAll('.checkbox')[1].checked) {profile='warm';}
                const calcData = {
                    typebalcony: document.querySelector('.popup_calc .big_img [style="display: block; margin: 0px auto;"]').getAttribute('alt'),
                    width: document.querySelector('#width').value,
                    height: document.querySelector('#height').value,
                    typeglazing: document.querySelector('.popup_calc_profile .form-control').value,
                    profile: profile,
                    username: document.querySelector('.popup_calc_end [name="user_name"]').value,
                    userphone: document.querySelector('.popup_calc_end [name="user_phone"]').value
                };
                formData = JSON.stringify(calcData);
            }
            else {
                formData = new FormData(item);
                const object = {};                                
                formData.forEach(function(value, key) {
                    object[key] = value;                          
                }); 
                formData = JSON.stringify(object);
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        if (e.target.getAttribute('class') == 'form popup_calc_end_submit') {
                        document.querySelector('.popup_calc_end').style.display = 'none';
                        document.querySelector('.popup_calc_profile').style.display = 'none';
                        document.querySelector('.popup_calc').style.display = 'none';
                        }
                    }, 5000);
                });
        });
    });

};

export default forms;