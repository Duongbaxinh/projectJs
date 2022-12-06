
const menu = document.querySelector(".menu__main");
const bookOrder = document.getElementById("bookOrder");
let idCatalogy = document.getElementById("idCatalogy");
let price = document.getElementById("price");
let foodName = document.getElementById("foodName");
let des = document.getElementById("des");
let avarta = document.getElementById("avarta");

  
function detail(id){
  window.location = `../../page/PageDetail.html?id=${id}`
  }


fetch("http://localhost:3000/api/catalogy/showList")
  .then((Response) => Response.json())
  .then((data) => {
    data.Response.forEach((e) => {
      let div_item = document.createElement("div");
      div_item.setAttribute("class", "menu__item");
      let image = document.createElement("img");
      image.src = `${e.avarta}`;
      image.setAttribute('onclick',`detail('${e._id}')`)
      image.setAttribute("class", "menu__item--image");

      let div_title = document.createElement("div");
      div_title.setAttribute("class", "menu__item--title");
      let p_Name = document.createElement("p");
      p_Name.setAttribute("class", "menu__item--name");
      p_Name.innerText = `${e.information.foodName}`;
      let p_Price = document.createElement("p");
      p_Price.setAttribute("class", "menu__item--price");
      p_Price.innerText = `${e.information.price}$`;

      let p_des = document.createElement("p");
      p_des.setAttribute("class", "menu__item--des");
      p_des.innerText = `${e.information.des}`;

      div_title.append(p_Name, p_Price);
      let div_end = document.createElement("div");
      div_end.setAttribute("class", "menu__item--end");

      let button = document.createElement("button");
      button.setAttribute("class", "menu__item--btn");
      button.setAttribute(
        "onclick",
        `storeClick('${e._id}','${e.avarta}','${e.information.foodName}','${e.information.des}',${e.information.price})`
      );
      let Ibutton = document.createElement("i");
      Ibutton.setAttribute("class", "fa-regular fa-plus");
      button.append(Ibutton);
      let form = document.createElement("div");
      let div_group = document.createElement("div");
      div_group.setAttribute("class", "menu__item_groupStar");
      div_group.setAttribute("id", `${e._id}`);
      let i1 = document.createElement("i");
      i1.setAttribute("class", "fa-regular fa-star");
      i1.setAttribute('onclick',`like('${e._id}',${1})`)
      let i2 = document.createElement("i");
      i2.setAttribute("class", "fa-regular fa-star");
      i2.setAttribute('onclick',`like('${e._id}',${2})`)
      let i3 = document.createElement("i");
      i3.setAttribute("class", "fa-regular fa-star");
      i3.setAttribute('onclick',`like('${e._id}',${3})`)
      let i4 = document.createElement("i");
      i4.setAttribute("class", "fa-regular fa-star");
      i4.setAttribute('onclick',`like('${e._id}',${4})`)
      let i5 = document.createElement("i");
      i5.setAttribute("class", "fa-regular fa-star");
      i5.setAttribute('onclick',`like('${e._id}',${5})`)
      div_group.append(i1, i2, i3, i4, i5);
      div_end.append(button, div_group);
      div_item.append(image, div_title, p_des, div_end);
      menu.append(div_item, form);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  ///
  let j = 0
  function like(id,x){
  let a =  document.getElementById(`${id}`)
  console.log(a)
let paren = a.parentElement
 let fa =  paren.querySelectorAll('.fa-star')
 fa.forEach(e=>{
  e.style.color = 'black'
 })
 for(let i = 0 ; i <x; i++){
  fa[i].style.color = 'yellow'
 }

  }

  function loadStore(){
    let html = "";
fetch("http://localhost:3000/api/catalogy/getItemStore")
  .then((Response) => Response.json())
  .then((data) => {
    let id = 1;
    data.data.forEach((el) => {
      html += `
        <div class="Order__item">
        <button  onclick = "deleteItem('${el._id}')"><strong>Huy</strong></button>
              <div class="Order__main">
                <img src="${el.avartar}" alt="" class="Order__main--image">
                <div class="Order__main--infomation">
                  <p class="Order__main--title">${el.foodName}</p>
                  <p class="Order__main--des">${el.des1}</p>
                  <textarea class="Order__main--note" name="note" id="" cols="30" rows="10"></textarea>
                  <div class="Order__calculate">
                    <div class="Order__calculate--price" id="${el._id}">${el.price}</div>
                    <div class="Order__calculate--quantity">
                      <button class="Order__caculate--pre"><i class="fa-solid fa-minus" onclick = "reduce(${el.price},'${el._id}',${id})"></i></button>
                      <p id="${id}">1</p>
                      <button class="Order__caculate--next"><i class="fa-solid fa-plus" onclick = "incre(${el.price},'${el._id}',${id})"></i></button>
                    </div>
                    <button onclick = "buynow('${el._id}',${id},'${el.foodName}','${el.avartar}')">BuyNow</button>
                  </div>
                </div>             
              </div>
            </div>`;
      document.querySelector(".Order").innerHTML = `${html}`;
      id++;
    });
  });
  }
  loadStore();
////
  async function buynow(id,id2,foodName,avarta){
let price3 = await document.getElementById(`${id}`).innerHTML
let quantity3 = await document.getElementById(`${id2}`).innerHTML
let p = await parseInt(price3,10)
let s = await parseInt(quantity3,10)
fetch('http://localhost:3000/api/catalogy/addOrder',{
  method:'POST',
  headers:{
    "Content-Type":"application/json"
},
body: JSON.stringify({
  avartar:avarta,
  foodName:foodName,
  quantity:s,
  price:p,
})
}).then(Response => Response.json()).then(data=>{
  alert(data.message)
})
  window.location = `../../page/Order.html?id=${id}`
}



  ////////////
bookOrder.addEventListener("click", (e) => {
  document.querySelector(".Order").classList.toggle("none");
});
// delete store

  function deleteItem(id) {
  console.log(id);
  fetch("http://localhost:3000/api/catalogy/deleteStore", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((Response) => Response.json())
    .then((data) => {
      alert(data.message);
      location.reload()
    });
}
// detial


// ICREAMENT 
  function incre(e, id, id2) {
  console.log(e, id);
  let s = document.getElementById(id2);
  let num = Number(s.innerText, 10);
  if (num >= 0) {
    s.innerHTML = `${num + 1} `;
    let p = document.getElementById(id);
    console.log(p);
    let pr = Number(p.innerHTML, 10);
    p.innerHTML = `${pr + e}`;
  }
  console.log(typeof p);
}

  function reduce(e,id,id2) {
  console.log(e, id);
  let s = document.getElementById(id2);
  let num = Number(s.innerText, 10);
  if (num >= 1) {
    s.innerHTML = `${num - 1} `;
    let p = document.getElementById(id);
    console.log(p);
    let pr = Number(p.innerHTML, 10);
    p.innerHTML = `${pr - e}`;
  }

  console.log(typeof p);
}
// add store
   function storeClick(idCatalogy, avarta, foodName, des, price) {
  avarta = avarta.replace("w", "/167");
  console.log(avarta);
  fetch("http://localhost:3000/api/catalogy/saveStore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idCatalogy: idCatalogy,
      avartar: avarta,
      foodName: foodName,
      des1: des,
      price: price,
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

  let number = Number(document.getElementById("numberStore").innerHTML, 10);
  document.getElementById("numberStore").innerText = `${number + 1} `;
  number++;
}


