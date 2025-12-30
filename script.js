//getting date  
const date = new Date();  
const days = date.getDate();  
const month = date.getMonth() + 1;  
const year = date.getFullYear();  
  
//list of all the images in img/ornaments and a list of emojis the top decoration thing can be  
const ornamentImg = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"];  
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾","🎁","❄️","🌟","🍪","🍰"];  
  
function changeStar() {
    star.innerText = stars[Math.floor(Math.random() * stars.length)];
}
  
//checks if the HTML elements have loaded before doing anything  
document.addEventListener('DOMContentLoaded', () => {  
    //sets the elements with the IDs to variables for easy access!  
    const decorations = document.getElementById("decorations");  
    const dateText = document.getElementById("date");  
    const star = document.getElementById("star");  
  
    //sets the text inside dateText to DD/MM/YY (the superior format)  
    dateText.innerText = days + "/" + month + "/" + year;  
  
    //checks if the month is december  
    if(month === 12){  
        let daysTilChristmas = Math.max(25-days,6);  
  
        //for each day til christmas; it adds another ornament to the christmas tree  
        for(let i = 0; i < daysTilChristmas; i++){  
            const randomImg= ornamentImg[Math.floor(Math.random()*ornamentImg.length)]  
            decorations.innerHTML += `<img src="img/ornaments/${randomImg}" class="ornament" id="ornament${i}">`;  
            const ornament = document.getElementById("ornament"+i);  
            //sets the margins to a random value between (4,3) and (14,5)  
            ornament.style.left = (30 + Math.random() * 40) + "%";
            ornament.style.top  = (25 + Math.random() * 55) + "%";

        }  
    }  
  
    star.addEventListener('click', changeStar);  
})