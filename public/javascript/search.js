let input_search = document.querySelector('.search')
let btn_search = document.querySelector('.header__button')

btn_search.addEventListener('click',(e)=>{
    let vale = input_search.value
    alert(vale)
    window.location = `../../page/search.html?name=${vale}`
})
