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