let myName = document.querySelector('#myName');

myName.innerHTML = prompt('Lütfen adınızı giriniz:')


function showTime(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    let day = weekday[today.getUTCDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#myClock').innerHTML = h + ":" + m + ":" + s + " " + day;
    setTimeout(showTime, 1000);

}

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;

}
showTime()



