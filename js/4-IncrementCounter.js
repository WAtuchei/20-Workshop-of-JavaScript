const subscribers = document.querySelectorAll('.counter');

subscribers.forEach((subscriber) => {
    subscriber.textContent = "0"

    const counting = () => {
        const target = subscriber.getAttribute('data-target'),
        start = +subscriber.textContent,
        increments = target / 440,
        fastCount = target - 700;

            if (start <= fastCount) {
                subscriber.textContent = `${Math.ceil(start + increments)}`;
                setTimeout(counting, .5)
            }
            else if (start < target) {
                subscriber.textContent = `${Math.ceil(start + increments)}`;
                setTimeout(counting, 120)
            }
            else {
                subscriber.textContent = target
            }
        }
        counting()
    })


