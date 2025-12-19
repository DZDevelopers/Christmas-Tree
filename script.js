// ---------------- CONFIG ----------------
const ornamentImg = [
    "1.webp","2.gif","3.png","4.png","5.png","6.png",
    "7.webp","8.png","9.png","10.png","11.png","12.png",
    "13.png","14.jpg","15.gif","16.png","17.png","18.png"
];

const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

// ---------------- STAR ----------------
function changeStar() {
    const starElement = document.getElementById("star");
    // pick a random star — ensure we actually change sometimes
    let newIndex = Math.floor(Math.random() * stars.length);
    starElement.innerText = stars[newIndex];
}

// ---------------- MAIN ----------------
document.addEventListener("DOMContentLoaded", () => {
    const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");
    const star = document.getElementById("star");
    // be tolerant: accept #snow-container or older .snow
    const snowContainer = document.getElementById("snow-container") || document.querySelector(".snow");

    // ---- DATE ----
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    dateText.innerText = `${day}/${month}/${year}`;

    // ---- ORNAMENTS (MAX 6, DECEMBER ONLY) ----
    if (month === 12) {
        const MAX_ORNAMENTS = 6;

        for (let i = 0; i < MAX_ORNAMENTS; i++) {
            const randomImg = ornamentImg[Math.floor(Math.random() * ornamentImg.length)];

            const orn = document.createElement("img");
            // check that your ornaments are actually in this path: img/ornaments/
            orn.src = `img/ornaments/${randomImg}`;
            orn.className = "ornament";
            orn.alt = "ornament";

            /* Place ornaments within reasonable bounds that match the tree area.
               Left: 25% - 75%, Top: 30% - 80% (tweak these numbers to better match your tree image) */
            const leftPercent = 25 + Math.random() * 50; // 25..75
            const topPercent = 30 + Math.random() * 50;  // 30..80

            orn.style.left = `${leftPercent}%`;
            orn.style.top = `${topPercent}%`;

            // hide broken images gracefully
            orn.onerror = () => { orn.style.display = 'none'; };

            decorations.appendChild(orn);
        }
    } else {
        // For testing outside December you may want to force ornament spawn:
        // (uncomment to test) spawnTestOrnaments(decorations);
    }

    // ---- SNOW (ALWAYS ON) ----
    if (snowContainer) {
        for (let i = 0; i < 150; i++) {
            const snow = document.createElement("div");
            snow.className = "snowflake";

            snow.style.left = Math.random() * 100 + "%";
            snow.style.fontSize = (Math.random() * 24 + 18) + "px";
            snow.style.opacity = Math.random() * 0.6 + 0.4;

            const fallTime = Math.random() * 8 + 8;
            const driftTime = Math.random() * 6 + 4;
            snow.style.animationDuration = `${fallTime}s, ${driftTime}s`;

            snow.innerText = "❄";
            snowContainer.appendChild(snow);
        }
    } else {
        console.warn("No #snow-container found — add <div id=\"snow-container\"></div> to your HTML.");
    }

    // ---- STAR CLICK ----
    if (star) {
        star.addEventListener("click", changeStar);
    } else {
        console.error("No element with id 'star' found.");
    }
});