let autoClickInterval;

function startAutoClick() {
    const button = document.getElementById('clickMe');
    autoClickInterval = setInterval(() => {
        button.click();
    }, 100); // Change 100 to your desired speed in milliseconds
}

function stopAutoClick() {
    clearInterval(autoClickInterval);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') { // Change 'a' to your preferred key
        startAutoClick();
    }
});

document.getElementById('stopAutoClick').addEventListener('click', stopAutoClick);
