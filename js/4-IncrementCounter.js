const subscribers = document.querySelectorAll('.counter');

subscribers.forEach((subscriber) => {
    const target = subscriber.getAttribute('data-target');

    console.log(target);
})


