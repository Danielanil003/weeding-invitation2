// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// ==============================
// Open Invitation
// ==============================

const openBtn = document.getElementById("openInvitation");

const welcome = document.getElementById("welcome");

const invitation = document.getElementById("invitation");

if (invitation) {

    invitation.style.display = "none";

}

if (openBtn) {

    openBtn.addEventListener("click", () => {

        document.querySelector(".envelope-flap").style.transform =
            "rotateX(180deg)";

        document.querySelector(".envelope-letter").style.transform =
            "translateX(-50%) translateY(-120px)";

        setTimeout(() => {

            welcome.style.display = "none";

            invitation.style.display = "block";

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }, 1200);

    });

}


// ==============================
// Countdown
// ==============================

const weddingDate = new Date("July 7, 2030 09:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        clearInterval(timer);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) /
        (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}, 1000);
