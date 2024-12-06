// const countdownForm = document.getElementById("countdown-form");
// const dateInput = document.getElementById("dateInput");
// let countdownInterval;

// function countdown(targetDate) {
//   const currentDate = new Date();
//   const totalSeconds = (targetDate - currentDate) / 1000;

//   if (totalSeconds <= 0) {
//     clearInterval(countdownInterval);
//     document.getElementById("days").innerText = "0";
//     document.getElementById("hours").innerText = "0";
//     document.getElementById("minutes").innerText = "0";
//     document.getElementById("seconds").innerText = "0";
//     return;
//   }

//   const days = Math.floor(totalSeconds / (24 * 3600));
//   const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const seconds = Math.floor(totalSeconds % 60);

//   document.getElementById("days").innerText = days;
//   document.getElementById("hours").innerText = hours;
//   document.getElementById("minutes").innerText = minutes;
//   document.getElementById("seconds").innerText = seconds;
// }

// countdownForm.addEventListener("submit", (event) => {
//   event.preventDefault(); 

//   const selectedDate = new Date(dateInput.value);
//   const currentDate = new Date();

//   if (isNaN(selectedDate) || selectedDate <= currentDate) {
//     alert("Please select a valid future date.");
//     return;
//   }

//   selectedDate.setHours(0, 0, 0, 0);

//   if (countdownInterval) clearInterval(countdownInterval);

//   countdown(selectedDate); // Run once immediately to avoid delay
//   countdownInterval = setInterval(() => countdown(selectedDate), 1000);
// });


const offerEnds = "5 Dec 2024"
// console.log(offer)
// offer = "10 Dec 2024"
// console.log(offer)

function countdown() {
    const offerDate = new Date(offerEnds)
    const currentDate = new Date()
    const totalSecond = (offerDate - currentDate) / 1000 
    const days = Math.floor(totalSecond / (24*3600))// 24* 60* 60
    const hours = Math.floor((totalSecond % (3600*24)) / 3600) 
    const minutes = Math.floor((totalSecond % 3600) / 60)
    const seconds = Math.floor(totalSecond % 60)
    // console.log("Days:", days, "Hours:",hours,"Minutes:", minutes , "Seconds:", seconds)
    document.getElementById('days').innerText = formatTime(days)
    document.getElementById('hours').innerText = formatTime(hours)
    document.getElementById('minutes').innerText = formatTime(minutes)
    document.getElementById('seconds').innerText = formatTime(seconds)

    if (totalSecond < 0) {
        clearInterval(countdownInterval)
        document.getElementById('countdown').innerText = "Offer ended"
    }
    function formatTime(time){
        return time < 10? (`0${time}`) : time
    }

}

countdown();
setInterval(countdown, 1000)