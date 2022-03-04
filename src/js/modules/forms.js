const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

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

            formData = new FormData(item);                                
            if (e.target.getAttribute('class') == 'form popup_calc_end_submit') {
                let profile='';  
                if (document.querySelectorAll('.checkbox')[0].checked) {profile='cold';}
                else if (document.querySelectorAll('.checkbox')[1].checked) {profile='warm';}
                formData.append('type', document.querySelector('.popup_calc .big_img [style="display: inline-block;"]').getAttribute('alt'));
                formData.append('width', document.querySelector('#width').value);
                formData.append('height', document.querySelector('#height').value);
                formData.append('typeGlazing', document.querySelector('.popup_calc_profile .form-control').value);
                formData.append('profile', profile);
            }
            
            const obj = {};                                
            formData.forEach((value, key) => {obj[key] = value;}); 
            formData = JSON.stringify(obj);
            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                    console.log(res);
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        document.querySelector('.popup_calc_end').style.display = 'none';
                        document.querySelector('.popup_engineer').style.display = 'none';
                        document.querySelectorAll('.popup')[1].style.display = 'none';
                        document.body.style.overflow = '';
                        document.body.style.marginRight = '0px';
                    }, 5000);
                });
        });
    });

};

export default forms;