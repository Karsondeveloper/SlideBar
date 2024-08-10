let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carroselDom = document.querySelector('.carrosel');
let listItemDom = document.querySelector('.carrosel .list');
let thumbnailDom = document.querySelector('.carrosel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeDut;
let runAutoRun  = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
let itemSlider = document.querySelectorAll('.carrosel .list .item');
let itemThumbnail = document.querySelectorAll('.carrosel .thumbnail .item');

if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carroselDom.classList.add('next');
}else{
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carroselDom.classList.add('prev');
}

clearTimeout(runTimeDut); 
    runTimeDut = setTimeout(() =>{
        carroselDom.classList.remove('next');
        carroselDom.classList.remove('prev');
}, timeRunning);

clearTimeout(runAutoRun);
runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);
}


