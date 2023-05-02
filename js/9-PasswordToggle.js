const passwordInt = document.getElementById('Password'),
    eyeIcons = document.querySelector('.icon-con'),
    eyeDefault = 'fa-regular fa-eye-slash text-dark',
    eyeHover = 'fa-regular fa-eye text-dark',
    eyeShow = 'fa-solid fa-eye text-dark';

eyeIcons.addEventListener('mouseover', () => {
    $('i').removeClass(eyeDefault)
    $('i').removeClass(eyeShow)
    $('i').addClass(eyeHover)
})
eyeIcons.addEventListener('mouseleave', () => {
    $('i').removeClass(eyeHover)
    $('i').addClass(eyeDefault)
})
eyeIcons.addEventListener('mousedown', () => {
    $('i').removeClass(eyeHover)
    $('i').addClass(eyeShow)
    passwordInt.setAttribute('type', 'text')
})
eyeIcons.addEventListener('mouseup', () => {
    $('i').removeClass(eyeShow)
    $('i').addClass(eyeHover)
    passwordInt.setAttribute('type', 'password')
})