function getTimeandRest(){
    let currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
}

setInterval(getTimeandRest, 1000);

// to run, in terminal type: node clock.js
