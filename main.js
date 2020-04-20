
/* navigation found by watching video - https://www.youtube.com/watch?v=gXkqy0b4M5g */

/*defining navSlide fucntion is equal to an anonymous function*/
const navSlide= ()=> {
  // const used as variable will not be reasssigned
    const burger = document.querySelector('.burger'); //gets the burger
    const nav = document.querySelector('.nav-links'); // gets the nav-links
    const navLinks=document.querySelectorAll('.nav-links li'); // gets all the nav-links and li
    
     /*Toggle Navigation when burger is clicked
     add eventlistner so when the burger is clicked it will carry out function*/
  burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); // when burger is clicked get the class nav-active

     /*burger animation*/
      burger.classList.toggle('toggle'); // when burger is clicked get the toggle class 

    /* adding animation to the links in the navigation - for each link run a function- mkaing delay
   between each*/
      navLinks.forEach((link,index) =>{ 
      if(link.style.animation) {
        link.style.animation='';
       } else {
       link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 1}s`; // altering time delay 
      }
     /*shows the delay for each link*/
     console.log(index / 7);
    });
  });

}

/* envoking function used above*/
navSlide();

/* typing animation for the introduction on index page - https://codepen.io/LaithHaleem/pen/wzyrBd 
began with lots of 'var' so changed to 'let' to have  a more updated JavaScript form*/

/* using elt so variable can be reassigned*/
let string = "Hi I'm Bethany";
let intro = string.split("");
let el = document.getElementById('intro'); // gets the id called intro
(function animate() {
intro.length > 0 ? el.innerHTML += intro.shift() : clearTimeout();  //carries out animate function
setTimeout(animate, 100);
})();