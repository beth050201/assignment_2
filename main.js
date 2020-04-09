
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


  
    navLinks.forEach((link,index) =>{
       if(link.style.animation) {
           link.style.animation=''
        } else {
          link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 1}s`;
        }
        // shows the delay for each link
        console.log(index / 7);
    });
}

/* function*/
navSlide();