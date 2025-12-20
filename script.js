let clickf = 0;

const button = document.getElementById('btn');
const countDisplay = document.getElementById("count");

if(button) {
    button.addEventListener("click", function(){
        clickf++;
        countDisplay.innerHTML = clickf;
        
        countDisplay.style.textShadow = "0 0 20px #fff";
        setTimeout(() => {
             countDisplay.style.textShadow = "0 0 5px #008f11";
        }, 100);
    });
}