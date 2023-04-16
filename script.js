




setInterval(() => {


    let hour = document.getElementById('hour');

    let min = document.getElementById('min');

    let sec = document.getElementById('sec');

    d = new Date();

    let hours = d.getHours();

    let mins = d.getMinutes();

    let secs = d.getSeconds();


    hourRod = 30 * hours + mins / 2;

    minRod = 6 * mins;

    secRod = 6 * secs;

    hour.style.transform = `rotateZ(${hourRod}deg)`;

    sec.style.transform = `rotateZ(${secRod}deg)`;

    min.style.transform = `rotateZ(${minRod}deg)`;

}, 1000);