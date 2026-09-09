/* =========================================
   HACKYTECH
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     ELEMENTS
  ========================================== */

  const body = document.body;

  const header = document.getElementById("site-header");

  const menuToggle = document.getElementById("menu-toggle");

  const menuClose = document.getElementById("menu-close");

  const mobileMenu = document.getElementById("mobile-menu");

  const menuOverlay = document.getElementById("menu-overlay");

  const exploreToggle =
    document.getElementById("explore-toggle");

  const exploreArrow =
    document.getElementById("explore-arrow");

  const mobileSubmenu =
    document.getElementById("mobile-submenu");


  /* =========================================
     MOBILE MENU
  ========================================== */

  function openMenu() {

    mobileMenu.classList.add("active");

    menuOverlay.classList.add("active");

    menuToggle.classList.add("active");

    body.classList.add("menu-open");

    menuToggle.setAttribute("aria-expanded", "true");

    mobileMenu.setAttribute("aria-hidden", "false");

    menuToggle.setAttribute(
      "aria-label",
      "Close menu"
    );

  }


  function closeMenu() {

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    menuToggle.classList.remove("active");

    body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");

    mobileMenu.setAttribute("aria-hidden", "true");

    menuToggle.setAttribute(
      "aria-label",
      "Open menu"
    );

  }


  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mobileMenu.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    }
  );


  menuClose.addEventListener(
    "click",
    closeMenu
  );


  menuOverlay.addEventListener(
    "click",
    closeMenu
  );


  /* =========================================
     CLOSE MENU WITH ESCAPE
  ========================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        mobileMenu.classList.contains("active")
      ) {

        closeMenu();

      }

    }
  );


  /* =========================================
     MOBILE NAVIGATION LINKS
  ========================================== */

  const mobileLinks =
    document.querySelectorAll(
      ".mobile-nav-link, .mobile-submenu a, .mobile-problem-button, .mobile-contact"
    );

  mobileLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        closeMenu();

      }
    );

  });


  /* =========================================
     EXPLORE PROBLEMS SUBMENU
  ========================================== */

  if (
    exploreToggle &&
    mobileSubmenu &&
    exploreArrow
  ) {

    exploreToggle.addEventListener(
      "click",
      () => {

        const isExpanded =
          exploreToggle.getAttribute(
            "aria-expanded"
          ) === "true";

        exploreToggle.setAttribute(
          "aria-expanded",
          String(!isExpanded)
        );

        mobileSubmenu.classList.toggle(
          "active"
        );

        exploreArrow.textContent =
          isExpanded ? "+" : "−";

      }
    );

  }


  /* =========================================
     HEADER SCROLL EFFECT
  ========================================== */

  function updateHeader() {

    if (window.scrollY > 30) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =========================================
     CATEGORY EXPANSION
  ========================================== */

  const categoryButtons =
    document.querySelectorAll(
      ".category-expand"
    );


  categoryButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const card =
          button.closest(".category-card");

        if (!card) return;

        card.classList.toggle("expanded");

      }
    );

  });


  /* =========================================
     SCROLL REVEAL
  ========================================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });


  /* =========================================
     SMOOTH ANCHOR NAVIGATION
  ========================================== */

  const anchors =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  anchors.forEach((anchor) => {

    anchor.addEventListener(
      "click",
      (event) => {

        const targetId =
          anchor.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(
            targetId
          );

        if (!target) {
          return;
        }

        event.preventDefault();

        const headerHeight =
          header.offsetHeight;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          10;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

      }
    );

  });


  /* =========================================
     PREVENT MOBILE MENU SCROLL LEAK
  ========================================== */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 950 &&
        mobileMenu.classList.contains("active")
      ) {

        closeMenu();

      }

    }
  );


  /* =========================================
     INITIALIZE
  ========================================== */

  console.log(
    "HackyTech interface initialized."
  );

});
