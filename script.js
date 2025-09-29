let clickf=0;

const button=document.getElementById('btn');
button.addEventListener("click", function(){
    clickf++
    document.getElementById("count").innerHTML = clickf; 
}) 