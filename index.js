let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
    document.querySelector('#login-btn').onclick=() =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#login-btn').onclick=() =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick=() =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

window.onscroll= () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        } else{
            document.querySelector('.header').classList.remove('active');
        }
    }
    
    document.querySelector('.home').onmousemove = (e) => {

        document.querySelectorAll('.home-parallax').forEach(elm =>{

            let speed = elm.getAttribute('data-speed');
            let x = ( window.innerWidth - e.pageX * speed )/ 90;
            let y = ( window.innerHeight - e.pageY * speed )/ 90;

            elm.style.transform = `translateX(${y}px) translateY(${x}px)`;


        });
    }

    var swiper = new Swiper(" featured-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop:true,
        grabCursor:true,
        centeredSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

      var swiper = new Swiper(".featured-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop:true,
        grabCursor:true,
        centeredSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
      var swiper = new Swiper(".review-slider", {
        grabCursor: true,
        centeredSlides: true,  
        spaceBetween: 20,
        loop:true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

      // mode sombre //
      var icon = document.getElementById("icon");
      icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
          icon.src="image/sun.png";
      }else{
          icon.src="image/moon.png"
         }
     }
     const accordien = document.getElementsByClassName('contentBx');
     for (i=0; i<accordien.length; i++){
      accordien[i].addEventListener('click', function(){
         this.classList.toggle('active')
      });
     }