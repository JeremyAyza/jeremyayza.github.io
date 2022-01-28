const slider=document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider__section");
let sliderSelectionLast=sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

slider.insertAdjacentElement('afterbegin', sliderSelectionLast);
function Next(){
    let sliderSectionFirst=document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500);
}
function Prev(){
    let sliderSection=document.querySelectorAll(".slider__section");
    let sliderSelectionLast=sliderSection[sliderSection.length -1];
    slider.style.marginLeft="0%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin", sliderSelectionLast);
        slider.style.marginLeft="-100%";
    },500);
}

btnRigth.addEventListener("click",function(){
    Next(); 
})
btnLeft.addEventListener("click",function(){
    Prev(); 
})

setInterval(function(){
    Next();
}, 5000)

