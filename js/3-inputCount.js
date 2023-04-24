const countInput = document.getElementById('countInput');

countInput.addEventListener('keyup', () => {
    let charLength = countInput.value.length;
    $('h3').text(`${charLength} ตัว`);

    if (charLength === 0) {
        $('h3').text('นับตัวอักษร')
    }
})