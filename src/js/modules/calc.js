function calc() {
    let input = document.querySelectorAll('.popup_calc .form-control');
    input.forEach(el => {
        el.type='number';
    });

}

export default calc;