
//                            ********************** creating  img variable for imagebutton **********************
const showimg=document.getElementById('img')

const psd=document.getElementById('pass')
//                            ********************** applying EventListener to imagebutton **********************
showimg.addEventListener('click',function show(e){
    const imgsrc= showimg.src
    
    if (imgsrc.endsWith('show.png')){
        // document.write(imgsrc)
        psd.type='text'
        showimg.src='hide.png'
    }
    else{
        psd.type="password"
        showimg.src='show.png'
    }
})

//                                  **********************  creating array  **********************

const arr =new Array()
const username=document.getElementById('usn')
username.addEventListener('change',function(e){
  arr.push(username.value)
  userpara.innerHTML='<h3>Username :' +username.value+'</h3>'
  
})
psd.addEventListener('change',function(e){
    arr.push(psd.value)
  userpass.innerHTML='<h3>password :' +psd.value+'</h3>'
})

//                             **********************  creating second div from js  **********************
  

let div2=document.createElement('div')
div2.classList.add('div2')
document.body.appendChild(div2)
let userpara=document.createElement('p')
let userpass=document.createElement('p')
div2.appendChild(userpara)
div2.appendChild(userpass)
const timepara=document.createElement('p')
document.body.appendChild(timepara)
                           //           *****************  creating clock  ******************



let div3=document.createElement('div')
document.body.appendChild(div3)
div3.classList.add('div3')
div3.appendChild(timepara)
setInterval(function() {

  const dt=new Date().toLocaleTimeString()

  timepara.innerHTML=dt

}, 1000);
                                    
