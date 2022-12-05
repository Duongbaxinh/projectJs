
let titles = document.querySelectorAll('.Hero__content--title')
let desSlides = document.querySelectorAll('.Hero__content--des')
let buttonSlides = document.querySelectorAll('.Hero__content--btnleft')
let buttonSlide2s = document.querySelectorAll('.Hero__content--btnright')
let avata = document.querySelectorAll('.Hero__background')
let [t1,t2,t3] = titles
let [d1,d2,d3] = desSlides
console.log(titles[0].innerHTML)

    fetch("http://localhost:3000/api/catalogy/showList")
  .then((Response) => Response.json())
  .then((data) => {
    let a = data.Response 
    console.log(a[0]._id)
        titles[0].innerHTML = data.Response[0].information.foodName
        desSlides[0].innerHTML = a[0].information.price
        avata[0].src = a[0].avarta
        buttonSlides[0].setAttribute('onclick',`btnDetail('${a[0]._id}')`)
    
        titles[1].innerHTML = data.Response[1].information.foodName
        desSlides[1].innerHTML = a[1].information.price
        avata[1].src = a[1].avarta
        buttonSlides[1].setAttribute('onclick',`btnDetail('${a[1]._id}')`)
        titles[2].innerHTML = data.Response[2].information.foodName
        desSlides[2].innerHTML = a[2].information.price
        avata[2].src = a[2].avarta
        buttonSlides[2].setAttribute('onclick',`btnDetail(${a[2]._id})`)
})
 
function btnDetail(id){
    alert(id)
  window.location = `../../page/PageDetail.html?id=${id}`
}
   