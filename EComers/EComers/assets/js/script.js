let btnMenu = document.querySelector("#btn-menu")

function mostrar_ocultar(){
    var nav=document.querySelector("#nav")
    sw=0
    if (nav.style.visibility=="hidden"){
        sw=0
    }
    if (nav.style.visibility=="visible"){
        sw=1
    }
    if (sw==1){
        nav.style.visibility="hidden"
    }
    if (sw==0){
        nav.style.visibility="visible"
        
    }
    
}
btnMenu.addEventListener("click",function(){
    mostrar_ocultar(); 
})