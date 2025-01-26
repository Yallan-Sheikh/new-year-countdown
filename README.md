# new-year-countdown
<!DOCTYPE html>
<html>
<head>
    <title>New Year Countdown</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Time Until New Year 🎉</h1>
        <div class="countdown">
            <div class="time-segment">
                <span id="days">00</span>
                <small>Days</small>
            </div>
            <div class="time-segment">
                <span id="hours">00</span>
                <small>Hours</small>
            </div>
            <div class="time-segment">
                <span id="minutes">00</span>
                <small>Minutes</small>
            </div>
            <div class="time-segment">
                <span id="seconds">00</span>
                <small>Seconds</small>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    margin: 0;
    background: linear-gradient(45deg, #1a1a1a, #4a4a4a);
    color: white;
    font-family: 'Orbitron', sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.container {
    padding: 2rem;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.countdown {
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.time-segment {
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 10px;
    width: 120px;
}

.time-segment span {
    font-size: 3rem;
    display: block;
    margin-bottom: 0.5rem;
}
function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = nextYear - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    // Update the DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
