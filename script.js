/* =========================================
   HACKYTECH
   MAIN INTERFACE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  const header =
    document.getElementById("site-header");

  const menuToggle =
    document.getElementById("menu-toggle");

  const menuClose =
    document.getElementById("menu-close");

  const mobileMenu =
    document.getElementById("mobile-menu");

  const menuOverlay =
    document.getElementById("menu-overlay");


  /* =========================================
     MOBILE MENU
  ========================================== */

  function openMenu() {

    mobileMenu.classList.add("active");

    menuOverlay.classList.add("active");

    menuToggle.classList.add("active");

    body.classList.add("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Close menu"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  function closeMenu() {

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    menuToggle.classList.remove("active");

    body.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open menu"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "true"
    );
  }


  if (menuToggle) {

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

  }


  if (menuClose) {
    menuClose.addEventListener(
      "click",
      closeMenu
    );
  }


  if (menuOverlay) {
    menuOverlay.addEventListener(
      "click",
      closeMenu
    );
  }


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
     MOBILE NAVIGATION
  ========================================== */

  const mobileLinks =
    document.querySelectorAll(
      ".mobile-nav a"
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
     HEADER SCROLL
  ========================================== */

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 35) {

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
     SMOOTH ANCHOR SCROLLING
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
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        const headerHeight =
          header
            ? header.offsetHeight
            : 0;

        const position =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          12;

        window.scrollTo({
          top: position,
          behavior: "smooth"
        });

      }
    );

  });


  /* =========================================
     SCROLL REVEAL
  ========================================== */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

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
          rootMargin:
            "0px 0px -40px 0px"
        }
      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =========================================
     PROJECT CARD POINTER EFFECT
  ========================================== */

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );


  projectCards.forEach((card) => {

    card.addEventListener(
      "pointermove",
      (event) => {

        if (
          window.innerWidth < 900
        ) {
          return;
        }

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const rotateX =
          ((y / rect.height) - 0.5) * -3;

        const rotateY =
          ((x / rect.width) - 0.5) * 3;

        card.style.transform =
          `translateY(-6px)
           perspective(900px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)`;

      }
    );


    card.addEventListener(
      "pointerleave",
      () => {

        card.style.transform = "";

      }
    );

  });


  /* =========================================
     RESPONSIVE MENU CLEANUP
  ========================================== */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 1050 &&
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
    "HackyTech technology interface initialized."
  );

});