
fetch('http://localhost:3000/api/catalogy/loadOrder').then(
    Response => Response.json()
).then(data=>{
    let html = ' ';
  data.data.forEach(e => {
    let tr = document.createElement('tr')
       let td1 = document.createElement('td')
       td1.innerHTML = `<img src="${e.avartar}" alt=""></img> `
       let td2 = document.createElement('td')
       td2.innerHTML = `${e.foodName} `
       let td3 = document.createElement('td')
       td3.innerHTML = `${e.quantity}`
       let td4 = document.createElement('td')
       td4.innerHTML = `${e.price} `
       let td5 = document.createElement('td')
       td5.innerHTML = `<button onclick = "deleteOrder('${e._id}')">Huy Don</button> `
    tr.append(td1,td2,td3,td4,td5)
  document.getElementById('tbody').append(tr)
  });

})

function deleteOrder(id){ 
   
    
        fetch('http://localhost:3000/api/catalogy/deleteOrder',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id:id
        })
    }).then((data)=>{
        
             location.reload()
         

      
    })
    
}