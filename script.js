// Ensure GSAP ScrollTrigger plugin is registered
gsap.registerPlugin(ScrollTrigger);

// GSAP Scroll Animation
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -80%",
    scrub: 2,
  },
});

// Sidebar and Hamburger Menu Functionality
let timeout;
const sidebarIcon = document.querySelector(".sidebar-icon");
const sidebar = document.querySelector(".sidebar");

if (sidebar && sidebarIcon) {
  sidebar.style.display = "none";

  sidebarIcon.addEventListener("click", () => {
    sidebar.style.display = "flex"; // Show sidebar
    sidebarIcon.style.display = "none"; // Hide hamburger icon
  });

  sidebar.addEventListener("click", () => {
    sidebar.style.display = "none"; // Hide sidebar
    sidebarIcon.style.display = "flex"; // Show hamburger icon
  });
}

// Locomotive Scroll Initialization
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// First Page Animation
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

// Circle Mouse Follower
function circleChaptaKaro() {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      const minicircle = document.querySelector("#minicircle");
      if (minicircle) {
        minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    const minicircle = document.querySelector("#minicircle");
    if (minicircle) {
      minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    }
  });
}

// Image Rotation and Mouse Tracking
document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;

  elem.addEventListener("mouseleave", function () {
    const img = elem.querySelector("img");
    if (img) {
      gsap.to(img, {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    }
  });

  elem.addEventListener("mousemove", function (dets) {
    const diff = dets.clientY - elem.getBoundingClientRect().top;
    const img = elem.querySelector("img");
    if (img) {
      gsap.to(img, {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, dets.clientX - rotate),
      });
    }
    rotate = dets.clientX;
  });
});

// Handle Navbar Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navItems = document.querySelector(".nav-items");

  if (hamburger && navItems) {
    hamburger.addEventListener("click", function () {
      navItems.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!hamburger.contains(event.target) && !navItems.contains(event.target)) {
        navItems.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }

  // Handle Card Clicks
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("clicked");
    });
  });
});

// Initialize Features
circleChaptaKaro();
