const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function setDate() {
    const now = new Date();

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hours.style.transform = `rotate(${hourDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + 90;
    minutes.style.transform = `rotate(${minuteDegrees}deg)`;

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    seconds.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();