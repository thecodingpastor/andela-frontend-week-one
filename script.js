function getCurrentTimeAndDay() {
    const date = new Date();

    // Get current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[date.getDay()];

    // Get current time
    const hoursUTC = date.getUTCHours();
    const minutesUTC = date.getUTCMinutes();
    const secondsUTC = date.getUTCSeconds();

    const currentUTCTime = `${hoursUTC}:${minutesUTC}:${secondsUTC}`;

    // Display the current day and time
    document.getElementById('day').textContent = currentDay
    document.getElementById('time').textContent = currentUTCTime

    // Update the time every second
    setTimeout(getCurrentTimeAndDay, 1000);
}

getCurrentTimeAndDay();