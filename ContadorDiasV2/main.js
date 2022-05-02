let events=[];
let arr=[];
const eventName=document.querySelector("#eventName");
const eventDate=document.querySelector("#eventDate");
const btnAdd=document.querySelector("#btnAdd");
const eventsContainer=document.querySelector("#eventsContainer");

const json=load();

try {
    arr=JSON.parse(json); //arr tendrá como valor un array de localstoreheg
} catch (error) { //si json es nulo, dará un error para arr
    arr=[];
}


events= arr? [...arr]:[];
renderEvents();



document.querySelector("form").addEventListener('submit',e=>{
    e.preventDefault();
    addEvent();
});
btnAdd.addEventListener('click',e=>{
    e.preventDefault();
    addEvent();
});



function addEvent(){
    if(eventName.value==='' || eventDate.value==='')
        return;

    if(dateDiff(eventDate.value)<0)
        return;


    const newEvent={
        id:(Math.random()*100).toString(36).slice(3),
        name:eventName.value,
        date:eventDate.value
    };
    events.unshift(newEvent);
    save(JSON.stringify(events));

    eventName.value="";
    eventDate.value="";

    renderEvents();
    
};

function dateDiff(d){
    const targetDate=new Date(d); //la fecha a escoger
    const toDay=new Date(); //La fecha de hoy
    const difference=targetDate.getTime()-toDay.getTime();
    const days=Math.ceil(difference/(1000*3600*24))
    return days;
}

function renderEvents(){
    const eventsHTML=events.map(event=>{
        return `
        
            <div class="event">
                <div class="container-day">
                    <span class="days-numbers">${dateDiff(event.date)}</span>
                    <span class="days-text">Días</span>
                </div>
                <div class="container-name">
                <div class="event-name">${event.name}</div>
                </div>
                <div class="container-btnDelete" >
                    <button class="btnDelete" event-id="${event.id}">Eliminar</button>
                </div>
            </div>
        
        `;
    });
    eventsContainer.innerHTML=eventsHTML.join("");


    document.querySelectorAll(".btnDelete").forEach(button=>{
        button.addEventListener('click',e=>{
            const id=button.getAttribute('event-id'); 
            events=events.filter(event =>event.id!==id);
            
            renderEvents();
            save(JSON.stringify(events));
        });
    });
};




function save(data){
    localStorage.setItem('items',data);
}

function load(){
    return localStorage.getItem('items');
}