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