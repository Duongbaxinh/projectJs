const getId4 = new URLSearchParams(window.location.search)
// const bookOrder = document.getElementById("bookOrder");
let names1 = document.querySelector('.Main__name')
let des1 = document.querySelector('.Main__des')
let price1 = document.querySelector('.Main__price')
let avata1 = document.querySelector('.Main__image')
let add = document.querySelector('.Main__add')
let buy = document.querySelector('.Main__buy')
let btn_left = document.querySelector('.left')
let btn_number = document.querySelector('.number')
let btn_right  = document.querySelector('.right')


btn_right.addEventListener('click',(e)=>{
    
    let c = btn_number.innerText
    let p =  price1.innerHTML
    let d = parseInt(p,10) 
   let a =  parseInt(c,10);
   if (a >= 0) {
    btn_number.innerHTML = a+1 
    price1.innerHTML = d + 20
        }
    console.log(c)
})

btn_left.addEventListener('click',(e)=>{
    let c = btn_number.innerText 
   let a =  parseInt(c,10);
   if (a > 0) {
    btn_number.innerHTML = a-1 
   let p =  price1.innerHTML
   let d = parseInt(p,10)

   price1.innerHTML = d -20
  
}
   
    console.log(c)
})

function addStore(idCatalogy2,avarta2,foodName2,des2,price2){
    alert('hello')
    avarta2 = avarta2.replace("w", "/167");
  console.log(avarta2);
  fetch("http://localhost:3000/api/catalogy/saveStore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idCatalogy: idCatalogy2,
      avartar: avarta2,
      foodName: foodName2,
      des1: des2,
      price: price2,
    }),
  })
    .then((Response) => Response.json())
    .then((data) => {
      alert("da them vao gio hang", data);
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}




let id = getId4.get('id')
    fetch('http://localhost:3000/api/catalogy/getitem',{
        method:'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id:id,
        })
    }).then(Response => Response.json()).then(data=>{
        let anh  = data.data.avarta
        let tenfood = data.data.information.foodName
        let mota  = data.data.information.des;
        let gias = data.data.information.price;
        console.log(data)
        avata1.src = `${anh}`
           names1.innerHTML = `${tenfood}`
           des1.innerHTML = `${mota}`
           price1.innerHTML = `${gias}`
            document.querySelector('.Main__add')
            .setAttribute('onclick',`addStore('${data.data._id}','${anh}','${tenfood}','${mota}',${gias})`)
        })

