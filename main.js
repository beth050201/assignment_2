
/* navigation*/

/*equal to anonomous function*/
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
 //Toggle Nav
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });


  /* adding animation to the links in the navigation*/
    navLinks.forEach((link,index) =>{
       if(link.style.animation) {
           link.style.animation=''
        } else {
          link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 1.75}s`;
        }
        /*shows the delay for each link*/
        console.log(index / 7);
    });
}

/* function used*/
navSlide();


/* typing animation for the introduction on index page - https://codepen.io/LaithHaleem/pen/wzyrBd 
began with lots of 'var' so changed to let to have  a more updated JavaScript form*/
let string = "Hi I'm Bethany";
let intro = string.split("");
let el = document.getElementById('intro');
(function animate() {
intro.length > 0 ? el.innerHTML += intro.shift() : clearTimeout(); 
 let running = setTimeout(animate, 90);
})();