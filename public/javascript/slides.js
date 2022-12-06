
let titles = document.querySelectorAll('.Hero__content--title')
let desSlides = document.querySelectorAll('.Hero__content--des')
let buttonSlides = document.querySelectorAll('.Hero__content--btnleft')
let priceSlides = document.querySelectorAll('.Hero__content--price')
let buttonSlide2s = document.querySelectorAll('.Hero__content--btnright')
let avata = document.querySelectorAll('.Hero__background')
let [t1,t2,t3] = titles
let [d1,d2,d3] = desSlides


   fetch("http://localhost:3000/api/catalogy/showList")
  .then((Response) => Response.json())
  .then((data) => {
    let a = data.Response 
        titles[0].innerHTML = data.Response[0].information.foodName
        desSlides[0].innerHTML = a[0].information.des
        avata[0].src = a[0].avarta
        priceSlides[0].innerHTML = a[0].information.price
         buttonSlides[0].setAttribute('onclick',`OrderNow('${a[0]._id}')`)
         buttonSlide2s[0].setAttribute('onclick',`Detail('${a[0]._id}')`)
        
    
        titles[1].innerHTML = data.Response[1].information.foodName
        desSlides[1].innerHTML = a[1].information.des
        priceSlides[1].innerHTML = a[1].information.price
        avata[1].src = a[1].avarta
        buttonSlides[1].setAttribute('onclick',`OrderNow('${a[1]._id}')`)
        buttonSlide2s[1].setAttribute('onclick',`Detail('${a[1]._id}')`)

        titles[2].innerHTML = data.Response[2].information.foodName
        desSlides[2].textContent = a[2].information.des
        avata[2].src = a[2].avarta
        priceSlides[2].innerHTML = a[2].information.price
        buttonSlides[2].setAttribute('onclick',`OrderNow(${a[2]._id})`)
        buttonSlide2s[2].setAttribute('onclick',`Detail(${a[2]._id})`)
})
 
function OrderNow(id){
    alert(id)
  window.location = `../../page/PageDetail.html?id=${id}`
}
   
function Detail(id){
  alert(id)
window.location = `../../page/foodDetail.html?id=${id}`
}