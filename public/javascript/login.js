let form = document.getElementById('form')
let form_control = document.querySelectorAll('.form__control');
let form_input = document.querySelectorAll('.form__input')
let userName = document.getElementById('userName')
let passWord = document.getElementById('passWord')
let submit = document.querySelector('.form')
let data  =  null;

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

function checkPassword(e){
    e.value.length < 6 ? error(e):succedd(e);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    e.stopPropagation()
   form_input.forEach(e =>{
    if(e.value == ''){
         error(e);
    }else{
        if(e.getAttribute('name') == 'password'){
            checkPassword(e)
        }
        else{
          data =   fetch('http://localhost:3000/author/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userName:userName.value,
                    passWord:passWord.value,
                })
            }).then(Response => Response.json()).then((data)=>{
                if(data.message === 'ok'){
                        alert(data.message)
                window.location=`../index.html?id=${data.user._id}`
                return data.user
                }else{
                    alert(data.message)
                }
               
            })
        }
    }
       
      })
})

