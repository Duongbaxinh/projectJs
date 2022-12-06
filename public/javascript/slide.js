let slideItem = document.querySelector('.Hero__Groupitem')
let pre = document.querySelectorAll('.Hero__buttonSide--pre')
let next = document.querySelectorAll('.Hero__buttonSide--next')
let item = document.querySelector('.Hero__item')
let slide2 = document.querySelector('.testimonate__Group')
let kichThuoc = item.clientWidth;
let chuyen = 0;
const net = ()=>{
    chuyen+= kichThuoc;
    if(chuyen >= kichThuoc*3){
        chuyen = 0
    }
    slide2.style = "transform: translateX(" + "-" + (chuyen+100)  + "px" +")"
    slideItem.style  = "transform: translateX(" + "-" + chuyen  + "px" +")"
    console.log(chuyen)
}

const pref = ()=>{

    if(chuyen > 0){
        chuyen-= kichThuoc;
             slide2.style = "transform: translateX(" + "-" + (chuyen+100)  + "px" +")"
    slideItem.style  = "transform: translateX(" + "-" + chuyen  + "px" +")"
    }
    console.log(chuyen)
}
pre.forEach(e=>{
    e.addEventListener('click',(e)=>{
        pref();
    })
})

next.forEach(e=>{
    e.addEventListener('click',(e)=>{
        net();
    })
    setInterval(net,10000)
})



