let liens = document.querySelectorAll("a:not(.active)");

for (let index = 0; index < liens.length; index++) {
    const element = liens[index];
    element.addEventListener('click', function(){
        alert("En cours de développement")
    })
    
}