function calc(className) {
    let input = document.querySelectorAll(className);
    input.forEach(el => {
        el.type='number';
    });

}

export default calc;