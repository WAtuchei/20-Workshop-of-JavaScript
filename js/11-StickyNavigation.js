const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.scrollHeight + 200) {
        nav.classList.contains('bg-primary')
        nav.classList.replace('bg-primary', 'bg-danger')
    }
    else {
        nav.classList.add('bg-primary')
        nav.classList.remove('bg-danger')
    }
} )