const countdown = () => {
    const countdate = new Date("May 17, 2023 00:00:00").getTime();
    const nowdate = new Date().getTime();
    const gaptoevent = countdate - nowdate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textday = Math.floor(gaptoevent / day);
    const texthour = Math.floor((gaptoevent % day) / hour);
    const textminute = Math.floor((gaptoevent % hour) / minute);
    const textsecond = Math.floor((gaptoevent % minute) / second);

    document.querySelector('.day').innerText = textday;
    document.querySelector('.hour').innerText = texthour;
    document.querySelector('.minute').innerText = textminute;
    document.querySelector('.second').innerText = textsecond;
}

setInterval(countdown, 1000);