// time
function timeHour() {
    var Ampm = "AM";
    let time = new Date();
    timeh = time.getHours();
    if (timeh > 12) {
        var Ampm = "PM";
        timeh = timeh - 12;
    }
    times = time.getSeconds();
    timem = time.getMinutes();
    if (timeh < 10) { timeh = "0" + timeh; }
    if (timem < 10) { timem = "0" + timem; }
    if (times < 10) { times = "0" + times; }
    document.getElementById('clk').innerHTML = timeh + ":" + timem + ":" + times + " " + Ampm;
}
setInterval(timeHour, 1000);

// Date
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let newDate = new Date();
// console.log(newDate);
let dy=newDate.getDate();
let m=newDate.getMonth();
if (dy < 10){
    dy="0"+dy;
}
let yyyy=newDate.getFullYear();
document.getElementById("day").innerHTML = dy+" "+month[m]+","+yyyy;