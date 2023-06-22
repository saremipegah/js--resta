const intro = document.querySelector('.intro');
const TextLogo = document.querySelectorAll('.logo-wellcome');


window.addEventListener('load', function(){

    setTimeout(()=>{
        TextLogo.forEach((Logo,inx)=>{
            setTimeout(()=>{
                Logo.classList.add('active')
            },(inx+1)*400)
        }) 
    })

    setTimeout(()=>{
       TextLogo.forEach((Logo, inx) => {
           setTimeout(()=>{
               Logo.classList.remove('active');
               Logo.classList.add('fade');
           },(inx+1)*50)
       }) 
    }, 2000)

    setTimeout(()=>{
        intro.style.top = '-100vh'
    },2300)
})  

// ///////////////////////////////////////////////

// const navToggler = document.querySelector('.navbar-toggler');

// navToggler.addEventListener('click', navToggle);

// function navToggle(){
//     navToggler.classList.toggle('active')
//     const nav = document.querySelector('.nav');
//     nav.classList.toggle('open');
//     if(nav.classList.contains('open')){
//         nav.style.height = nav.scrollHeight + "px"
//     }else{
//         nav.style.height = ""
//     }
// }


window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
})

//  ////////////////////////////////////////////

const slides = document.querySelector('.slider').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const indicator = document.querySelector('.indicator');
let index = 0;


prev.addEventListener('click', function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener('click', function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})


function circleIndicator(){
    for(let i= 0;i<slides.length;i++){
        const div = document.createElement('div');
        div.innerHTML = i+1;
        div.setAttribute('onclick','indicatorSlide(this)');
        div.id =i
        if(i==0){
            div.className = "active"
        }
        indicator.appendChild(div)
    }
}

circleIndicator();


function updateCircleIndicator(){
    for(let i =0; i<indicator.children.length;i++){
        indicator.children[i].classList.remove('active')
    }
    indicator.children[index].classList.add('active');

}

function indicatorSlide(element){
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}



function prevSlide(){
    if(index==0){
        index = slides.length-1;
    }else{
        index--
    }
    console.log
    changeSlide()
}

function nextSlide(){
    if(index==slides.length-1){
        index=0
    }else{
        index++
    }
    changeSlide()
}

function changeSlide(){
    for(let i = 0; i< slides.length;i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoplay, 6000);
}

function autoplay(){
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoplay, 4000);

//  ////////////////////////////////////////////

const text = ['Immigrate to Canada' ,'Work in Canada','Study in Canada','Do Business in Canada','Visit Canada','Sponsor Family to Canada'];

 let count = 0;
 let indexx = 0;
 let currentText = "";
 let letter = "";

 (function type(){
     if(count === text.length){
         count = 0;
     }
     currentText = text[count];
     letter = currentText.slice(0,++indexx);

     document.querySelector('.type').textContent = letter;

     if(letter.length === currentText.length){
         count++;
         indexx = 0;
     }
     setTimeout(type , 200)
 })()

//  ///////////////////////////////////

const img = document.querySelector('img');
const icon = document.querySelector('.icon');

img.onclick = () => {
    // img.classList.toggle('active');
    // icon.classList.toggle('active');
}

// ////////////////////////////////////////////

let thumbnail = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');
let leftButton = document.getElementById('left-slide');
let rightButton = document.getElementById('right-slide');

leftButton.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

rightButton.addEventListener('click', function(){
    slider.scrollLeft += 125;
})


const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft-1)){
        slider.scrollLeft -= maxScrollLeft;
    }else{
        slider.scrollLeft += 1
    }
}


let play = setInterval(autoPlay, 50)


for(let i =0;i<thumbnail.length;i++){
    thumbnail[i].addEventListener('mouseover', ()=>{
        clearInterval(play)
    })
    thumbnail[i].addEventListener('mouseout',()=>{
        return play = setInterval(autoPlay, 50);
    })
}

// ///////////////////////////////////////////

let thumbnailPartner = document.getElementsByClassName('thumbnailPartner');
let partner = document.getElementById('partner');
let leftButtonPartner = document.getElementById('left-slidePartner');
let rightButtonPartner = document.getElementById('right-slidePartner');

leftButtonPartner.addEventListener('click', function(){
    partner.scrollLeft -= 125;
})

rightButtonPartner.addEventListener('click', function(){
    partner.scrollLeft += 125;
})


const maxScrollLeftPartner = partner.scrollWidth - partner.clientWidth;


function autoPlay(){
    if(partner.scrollLeft > (maxScrollLeftPartner-1)){
        partner.scrollLeft -= maxScrollLeftPartner;
    }else{
        partner.scrollLeft += 1
    }
}


let playPartner = setInterval(autoPlay, 50)


for(let i =0;i<thumbnailPartner.length;i++){
    thumbnailPartner[i].addEventListener('mouseover', ()=>{
        clearInterval(playPartner)
    })
    thumbnailPartner[i].addEventListener('mouseout',()=>{
        return playPartner = setInterval(autoPlay, 50);
    })
}



