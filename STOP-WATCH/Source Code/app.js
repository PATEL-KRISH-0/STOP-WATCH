const h = document.querySelector(".h");
const m = document.querySelector(".m");
const s = document.querySelector(".s");
const TStop = document.querySelector(".stop");
const TStart = document.querySelector(".start");
const TReset = document.querySelector(".reset");
let LiveInterval = false;
let timeInterval = null; 

TStop.addEventListener("click", () => {
    if (LiveInterval) {
        clearInterval(timeInterval);
        LiveInterval = false;
    }
});

TReset.addEventListener("click", () => {
    if (LiveInterval) {
        clearInterval(timeInterval);
        LiveInterval = false;
    }

    h.innerHTML = "00";
    m.innerHTML = "00";
    s.innerHTML = "00";
});

TStart.addEventListener("click", () => {

    if (LiveInterval) {
        clearInterval(timeInterval);
    }

    timeInterval = setInterval(() => {
        sec = parseInt(s.innerHTML);
        sec++;
        if (sec < 10) {
            s.innerHTML = "0" + sec
        } else {
            s.innerHTML = sec;
        }
        if (sec == 60) {
            min = parseInt(m.innerHTML);
            min++;
            if (min < 10) {
                m.innerHTML = "0" + min
            } else {
                m.innerHTML = min;
            }

            s.innerHTML = "00";


            if (min == 60) {
                hor = parseInt(h.innerHTML);
                hot++
                if (hor < 10) {
                    h.innerHTML = "0" + hor
                } else {
                    h.innerHTML = hor;
                }
                m.innerHTML = "00";
            }
        }
    }, 1000);

    LiveInterval = true;
});
