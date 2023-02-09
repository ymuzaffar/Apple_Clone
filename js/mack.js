let btns = document.querySelectorAll('button')
let img = document.querySelector('img')
let spanblue = document.querySelector('.blue')

let spanprice = document.querySelector('.price')
let divs = document.querySelectorAll('.ssd_2')
let blur_b = document.querySelector('#ssd')
let plus = document.querySelector('.p')




let images = {
    "Space Gray": "C:/Users/Administrator/Desktop/apple_clone/img/spaceGray.png",
    "White": 'C:/Users/Administrator/Desktop/apple_clone/img/white.png'
}

btns.forEach( btn => {
    btn.onclick = () => {

        let key = btn.innerHTML
        spanblue.innerHTML = key
        img.setAttribute('src', images[key])

        btns.forEach(el => el.classList.remove('active'))

        btn.classList.add('active')

    }

})







// let  border = function (){
// blur_b.classList.add('.ssd_2')

// }
// console.log(blur_b);


// divs.forEach( el => {
//     el.addEventListener.onclick = () => {


//         let key = plus.innerText
//         spanprice.innerText = key

//     //    Math.floor(spanprice.innerText = +plus.innerText + spanprice.innerText)

//         divs.forEach(el => el.classList.remove('.ssd_2'))
  
//         el.classList.add('#ssd')

//      }}
    
// )

// console.log( parseInt (spanprice.innerText = +plus[2].innerText.slice(2) + +spanprice.innerText.slice(1),
// console.log( spanprice.innerText = spanprice.innerText + +divs[2].innerText.slice(11))


// document.filter( item =>{
    
// spanprice = spanprice.innerText + plus.innerText.slice(2).reduce(a,b) 
    // return a+btns.total

// } )
// divs.forEach(el => el.classList.remove('#ssd'))
  
//         el.classList.add('#ssd')