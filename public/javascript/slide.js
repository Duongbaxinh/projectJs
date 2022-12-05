let slideItem = document.querySelector('.Hero__Groupitem')
let pre = document.querySelector('.Hero__buttonSide--pre')
let next = document.querySelector('.Hero__buttonSide--next')
let item = document.querySelector('.Hero__item')
let kichThuoc = item.clientWidth;
let chuyen = 0;
const net = ()=>{
    chuyen+= kichThuoc;
    if(chuyen >= kichThuoc*3){
        chuyen = 0
    }
    slideItem.style  = "transform: translateX(" + "-" + chuyen  + "px" +")"
    console.log(chuyen)
}
next.addEventListener('click',net)
setInterval(net,10000)

