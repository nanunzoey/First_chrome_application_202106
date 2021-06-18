const clock = document.querySelector("#clock");
const todaysDate = document.querySelector("#date");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const date = new Date();
    const numDay = date.getDay();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    todaysDate.innerText = `${dayArr[numDay]} / ${month} / ${day} / ${year}`
}

getClock();
setInterval(getClock, 1000);

getDate();