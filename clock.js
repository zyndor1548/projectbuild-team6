function updateClock() {
    const now = new Date();
    
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Update time display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Update date display
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);

// Add smooth transition on load
window.addEventListener('load', () => {
    document.querySelector('.clock-wrapper').style.opacity = '0';
    document.querySelector('.clock-wrapper').style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        document.querySelector('.clock-wrapper').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        document.querySelector('.clock-wrapper').style.opacity = '1';
        document.querySelector('.clock-wrapper').style.transform = 'scale(1)';
    }, 100);
});
