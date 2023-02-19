function clock(){
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    let newHour = new Date().getHours();
    let newMinute = new Date().getMinutes();
    let newSecond = new Date().getSeconds();

    hour.innerHTML = newHour;
    minute.innerHTML = newMinute;
    second.innerHTML = newSecond;
}

let interval = setInterval(clock, 1000);