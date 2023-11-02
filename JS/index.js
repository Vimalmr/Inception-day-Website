document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tube').addEventListener('click', function() {
        playClickSound();
    });

    function playClickSound() {
        var audio = document.getElementById('clickSound');
        audio.play();
    }
});
const targetDate = new Date("2023-11-06 23:59:59").getTime();

        // Update the countdown every second
        const countdown = setInterval(function () {
            const currentDate = new Date().getTime();
            const timeRemaining = targetDate - currentDate;

            if (timeRemaining <= 0) {
                clearInterval(countdown);
                document.getElementById("countdown").innerHTML = "Countdown expired!";
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }, 1000);