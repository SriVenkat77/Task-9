document.addEventListener('DOMContentLoaded', () => {
    const countdown = document.getElementById('countdown');

    setTimeout(function() {
        countdown.textContent = '10';
        setTimeout(function() {
            countdown.textContent = '9';
            setTimeout(function() {
                countdown.textContent = '8';
                setTimeout(function() {
                    countdown.textContent = '7';
                    setTimeout(function() {
                        countdown.textContent = '6';
                        setTimeout(function() {
                            countdown.textContent = '5';
                            setTimeout(function() {
                                countdown.textContent = '4';
                                setTimeout(function() {
                                    countdown.textContent = '3';
                                    setTimeout(function() {
                                        countdown.textContent = '2';
                                        setTimeout(function() {
                                            countdown.textContent = '1';
                                            setTimeout(function() {
                                                countdown.textContent = 'Happy Independence Day';
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
