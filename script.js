// Hamburger and Dropdown Functions (Fixed)
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0)";
  navbar.style.opacity = "1";
  document.body.style.overflow = "hidden";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-100%)";
  navbar.style.opacity = "0";
  document.body.style.overflow = "auto";
}


// Enhanced Event Listeners
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown');
  const hamburger = document.querySelector('.hamburg');
  
  // Check if click is outside
  if (!event.target.closest('.dropdown') && 
      !event.target.closest('.hamburg') &&
      dropdown.style.transform === 'translateY(0)') {
      cancel();
  }
});

// Mobile Touch Close
document.querySelectorAll('.dropdown .links a').forEach(link => {
  link.addEventListener('click', cancel);
});
// Typewriter Effect
const texts = [
  "DEVELOPER",
  "DESIGNER",
  "EXPERT",
  "UI/UX"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed);
  }
  else{
      setTimeout(eraseText, 1000)
  }
}
function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}
window.onload = typeWriter

// Animate skill bars on scroll
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop + sectionHeight / 2) {
        skillBars.forEach(bar => {
            bar.style.width = bar.classList.contains('html') ? '85%' :
                             bar.classList.contains('css') ? '80%' :
                             bar.classList.contains('js') ? '75%' :
                             bar.classList.contains('react') ? '90%' :
                             bar.classList.contains('creativity') ? '90%' :
                             bar.classList.contains('communication') ? '85%' :
                             bar.classList.contains('problem-solving') ? '95%' :
                             bar.classList.contains('teamwork') ? '88%' : '0';
                             
        });
    }
}

window.addEventListener('scroll', animateSkillBars);
// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown');
  const hamburger = document.querySelector('.hamburg');
  
  if (!dropdown.contains(event.target) && !hamburger.contains(event.target) && 
      dropdown.style.transform === 'translateY(0px)') {
    cancel();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll(".main-container .image");
  
  images.forEach(img => {
      img.addEventListener("touchstart", function() {
          this.classList.add("hover-effect");
      });

      img.addEventListener("touchend", function() {
          setTimeout(() => this.classList.remove("hover-effect"), 500);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let logo = document.querySelector(".logo");  // এটি আপনার লগোর সিলেক্টর
  logo.addEventListener("click", function() {
    window.location.href = "/";  // হোম পেজের URL এখানে "/"
  });

  let images = document.querySelectorAll(".main-container .image");
  
  images.forEach(img => {
      img.addEventListener("touchstart", function() {
          this.classList.add("hover-effect");
      });

      img.addEventListener("touchend", function() {
          setTimeout(() => this.classList.remove("hover-effect"), 500);
      });
  });
});
