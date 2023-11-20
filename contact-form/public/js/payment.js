function startTimer(event) {
    event.preventDefault(); // Prevents the form from submitting immediately

    var duration = 180; // Set the duration of the timer in seconds

    var timerDisplay = document.getElementById('timer');
    var seconds = duration;

    var countdownInterval = setInterval(function () {
        timerDisplay.innerHTML = seconds + " seconds remaining";

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.innerHTML = "Time's up! Please try again.";
            // You can add additional actions when the timer reaches zero, like disabling the button or redirecting to another page.
            alert("Payment time has expired. Please try again.");
        }

        seconds--;
    }, 1000);
}

