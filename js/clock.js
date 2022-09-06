let myName = document.querySelector('#myName');

myName.innerHTML = prompt('Lütfen adınızı giriniz:')


function showTime(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    let curday = weekday[today.getDay()];
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    
    let day = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    
    let date = hour + ":" + min + ":" + sec + " " + curday+","+" "+day+" "+month+" "+year;

    document.querySelector('#myClock').innerHTML = date;
    setTimeout(showTime, 1000);

}

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}

showTime()
