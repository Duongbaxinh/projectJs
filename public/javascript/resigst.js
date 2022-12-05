let form = document.getElementById('form')
let form_control = document.querySelectorAll('.form__control');
let form_input = document.querySelectorAll('.form__input')
let submit = document.getElementById('submit_login')


console.log(form_input[0].parentElement.nodeName)
function error(e){
   const formControl = e.parentElement;
   formControl.className = 'form__control error'
   const input = formControl.querySelector('input')
   const small = formControl.querySelector('small')
   input.style.border = '2px solid red'
   small.innerText = `error ${e.getAttribute('placeholder')}`
}
function succedd(e){
    const formControl = e.parentElement;
    formControl.className = 'form__control succed';
    const input = formControl.querySelector('input')
    input.style.border = '2px solid green'
}
function checkEmail(e){
    let message = 'email khong hop le'
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(regex.test(e.value.trim())){
    succedd(e)
  } else{
    error(e)
  }
       
}
function checkPassword(e){
    e.value.length < 6 ? error(e):succedd(e);
}
function  checkPasswordsMatch(e,e2){
   (e.value !== e2.value) ? error(e):succedd(e);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    e.stopPropagation()
   form_input.forEach(e =>{
    if(e.value == ''){
         error(e);
    }else{
        if(e.getAttribute('name') == 'email'){
            checkEmail(e);
        }else if(e.getAttribute('name') == 'password'){
            checkPassword(e)
        }else if(e.getAttribute('name') == 'againePassword'){
            checkPasswordsMatch(e,document.getElementById('passWord'))
        }
        else{
            const dataUser =  fetch('http://localhost:3000/author/resigst',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userName:form_input[0].value,
                    email:form_input[1].value,
                    passWord:form_input[2].value,
                })
            }).then(Response => Response.json()).then((data)=>{
                   if(data.message === 'ok'){    
                    alert('dang ky thanh cong')
                    window.location="../page/login.html"
                   }else{
                    alert(data.meassage)
                   }
                
            })
        }
    }
       
      })
})




