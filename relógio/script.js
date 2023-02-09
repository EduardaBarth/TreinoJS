function startTime(){
    const today = new Date(); 
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("1").innerHTML =  h
    document.getElementById("2").innerHTML = m
    document.getElementById("3").innerHTML = s
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
  }