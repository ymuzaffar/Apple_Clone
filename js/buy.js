
let btn = document.querySelector('#gold')
let btn_1 = document.querySelector('.black')
let btn_2 = document.querySelector('.white')
let btn_3 = document.querySelector('.deep')
let p = document.querySelector('#p')



let modal = document.querySelector('.modal')
let okno_btn = document.querySelector('#okno_btn')
let x = document.querySelector('.close')


okno_btn.onclick = function() {

modal.style.display = 'block'

}
x.onclick = function() {

  modal.style.display = 'none'
  
}

// let okno = function(){
  
//   modal.classList.add('#okno_btn')
// }

// let zakroy = function(){

//   modal.classList.remove('.close')
// }

// modal.forEach(function(item){
// item.addEventListener('click', okno)
// })
// close.addEventListener('click', zakroy)
  








  









































document.body.addEventListener('click', e => {
    if (!e.target.matches('.gold','#gold'))
    
    return
    p.innerHTML = 'Gold'
    document.querySelector('#phone_colors img').src = e.target.dataset.src
    

  })

  document.body.addEventListener('click', e => {
    if (!e.target.matches('.deep'))
    
    return
    p.innerHTML = 'Deep Purple'
    document.querySelector('#phone_colors img').src = e.target.dataset.src
    

  })

  document.body.addEventListener('click', e => {
    if (!e.target.matches('.white')) return
    p.innerHTML = 'Silver'
    document.querySelector('#phone_colors img').src = e.target.dataset.src
    

  })


  document.body.addEventListener('click', e => {
    if (!e.target.matches('.black')) return
    p.innerHTML = 'Space Black'
    document.querySelector('#phone_colors img').src = e.target.dataset.src
    

  })














