const secondHand = document.getElementById('second');
const minHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');

function setDate(){

    let now = new Date();

    let seconds = now.getSeconds();

    console.log(seconds);

    let secondsDegrees = ((seconds / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;



    let minutes = now.getMinutes();

    console.log(minutes);

    let minutesDegrees = ((minutes / 60) * 360) + 90;

    minHand.style.transform = `rotate(${minutesDegrees}deg)`;


    let hours = now.getHours();

    console.log(hours);

    let hoursDegrees = ((hours / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);