var typed = new Typed(".typing", {
  strings: ["", "Pentester", "Programmer","Writer","Tech Entusiast"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

 window.addEventListener("DOMContentLoaded", (event) => {
   const navbarLinks = document.querySelectorAll(".nav li a");
   const homeLink = document.querySelector('.nav li a[href="#home"]');
   const currentHash = window.location.hash;

   // Check if the current hash is "#about"
   if (
     currentHash === "#about" ||
     currentHash === "#education" ||
     currentHash === "#contact" ||
     currentHash === "#blog"
   ) {
     // Replace "#about" with "#home" in the URL
     history.replaceState(null, null, "#home");
   }
   // Remove the "active" class from all navbar links
   navbarLinks.forEach((link) => {
     link.classList.remove("active");
   });

   // Add the "active" class to the home link
   homeLink.classList.add("active");
 });
 function reloadPage() {
   window.open(event.target.href, "_blank");
   location.reload();

   event.preventDefault();
 }
// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    //Loop for removing active class
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    //Adding active class
    this.classList.add("active");
    showSection(this); //Function call
    //Nav click event - Hiding the nav menu
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  //Loop for removing active class
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

//For Hire me section
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//For Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
