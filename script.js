// Declare variables for countdown and target date
let countdown;
let targetDate;

// Function to start the countdown
function startTimer() {
    // Get input values
    const day = parseInt(document.getElementById("day_Input").value);
    const month = parseInt(document.getElementById("month_Input").value);
    const year = parseInt(document.getElementById("year_Input").value);
    const hours = parseInt(document.getElementById("hours_Input").value);
    const minutes = parseInt(document.getElementById("minutes_Input").value);
    document.getElementById('demo').textContent = '';


    // Set the target date based on input values
    targetDate = new Date(year, month - 1, day, hours, minutes);

    // Update timer immediately
    updateTimer();

    // Set interval to update timer every second
    countdown = setInterval(updateTimer, 1000);
}

// Function to stop the countdown
function stopTimer() {
    console.log("stop clicked");
    clearInterval(countdown);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(countdown);
    // Reset displayed values to '00'
    document.getElementById('day').innerHTML = '00';
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minute').innerHTML = '00';
    document.getElementById('second').innerHTML = '00';
    document.getElementById('demo').innerHTML = '';

}

// Function to update the timer
function updateTimer() {
    // Get current time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = targetDate - now;

    // Check if time is up
    if (distance <= 0) {
        clearInterval(countdown);
        // Display 'Time Up' when time is up
        document.getElementById('day').innerHTML = '00';
        document.getElementById('hour').innerHTML = '00';
        document.getElementById('minute').innerHTML = '00';
        document.getElementById('second').innerHTML = '00';
        document.getElementById('demo').textContent = 'Time Up';
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML elements with formatted time
        document.getElementById('day').innerHTML = formatTime(days);
        document.getElementById('hour').innerHTML = formatTime(hours);
        document.getElementById('minute').innerHTML = formatTime(minutes);
        document.getElementById('second').innerHTML = formatTime(seconds);
    }
}

// Function to format time with leading zero if needed
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
