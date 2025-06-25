
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


    const robotImg = document.getElementById('project-img');
    if (robotImg) {
      robotImg.addEventListener('mouseenter', () => {
        robotImg.src = "./assets/robo.gif";
      });
  
      robotImg.addEventListener('mouseleave', () => {
        robotImg.src = "./assets/project1.png";
      });
    }
  
    