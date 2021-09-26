function timer(deadline) {
    
    function getTimeRemaining(endtime)
    {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000*60*60*24)),
            hours = Math.floor((t / (1000*60*60)) % 24 ),      
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
        };      
    }

    function setClock(endtime)
    {
        const days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();                  

        function updateClock() 
        {
            const t = getTimeRemaining(endtime);

            if (t.total>=0) 
            {
                days.textContent = t.days;
                if (t.days<10) {days.textContent = `0${t.days}`;}
                hours.textContent = t.hours;
                if (t.hours<10) {hours.textContent = `0${t.hours}`;}
                minutes.textContent = t.minutes;
                if (t.minutes<10) {minutes.textContent = `0${t.minutes}`;}
                seconds.textContent = t.seconds;
                if (t.seconds<10) {seconds.textContent = `0${t.seconds}`;}
            }
            else 
            {
                clearInterval(timeInterval);
            }
        }      
    }

    setClock(deadline);
}

export default timer;