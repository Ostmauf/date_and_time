const clock = document.getElementById("clock");

let clockTime = () => {
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    
    if (month < 10) {
        month = "0" + currentDate.getMonth();
    }

    console.log(month)
    clock.innerHTML = currentDate.getFullYear() + "-" + month + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}

setInterval(clockTime, 1000);

