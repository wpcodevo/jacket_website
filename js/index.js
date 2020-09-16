/*
Navigation
*/

//

const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;
  if (navLeft < 0) {
    menu.style.left = "0";
    document.body.classList.add("active");
  } else {
    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

navClose.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;
  if (navLeft > 0) {
    menu.style.left = "0";
  } else {
    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

// Smooth Scroll

const navBar = document.querySelector(".navigation");
const scrollLinks = document.querySelectorAll(".scroll-link");

Array.from(scrollLinks).forEach(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: "0",
      top: position,
    });

    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});

// FixNav

window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }
});
