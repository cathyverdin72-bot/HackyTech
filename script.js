/* =====================================================
   HACKYTECH V1
   INTERACTIONS
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});


/* ================= PROBLEM DATA ================= */

const problemData = {

  manual: {
    problem: "Too much manual work",
    analysis: "Process optimization",
    solution: "Business automation",
    result: "Less repetitive work. More time for the business."
  },

  tracking: {
    problem: "Poor tracking",
    analysis: "Operational visibility",
    solution: "Tracking & management system",
    result: "Know what's happening without chasing information."
  },

  data: {
    problem: "Scattered business data",
    analysis: "Data organization",
    solution: "Business database + dashboard",
    result: "Turn scattered records into useful information."
  },

  customers: {
    problem: "Customer information is scattered",
    analysis: "Customer journey mapping",
    solution: "Customer management system",
    result: "Better information. Better customer experience."
  },

  repetitive: {
    problem: "Repetitive processes",
    analysis: "Workflow automation",
    solution: "Automated business workflow",
    result: "Let technology handle repetitive tasks."
  }

};


/* ================= HERO ENGINE ================= */

const heroProblem = document.getElementById("heroProblem");
const heroAnalysis = document.getElementById("heroAnalysis");
const heroSolution = document.getElementById("heroSolution");

function updateHero(problem) {

  heroProblem.textContent = problem.problem;
  heroAnalysis.textContent = problem.analysis;
  heroSolution.textContent = problem.solution;

}


/* ================= PROBLEM CARDS ================= */

const problemCards = document.querySelectorAll(".problem-card");

problemCards.forEach(card => {

  card.addEventListener("click", () => {

    const key = card.dataset.problem;

    const selected = problemData[key];

    if (!selected) return;

    problemCards.forEach(item => {
      item.classList.remove("selected");
    });

    card.classList.add("selected");

    updateHero(selected);

  });

});


/* ================= SOLUTION ENGINE ================= */

const demoProblems = [

  {
    problem:
      "We don't know which products are selling or when stock is running low.",
    business:
      "— Small supermarket",
    analysis:
      "Inventory + sales visibility",
    solution:
      "Inventory & Analytics Dashboard",
    result:
      "Better decisions from real business data."
  },

  {
    problem:
      "Customers keep asking where their vehicle is in the service process.",
    business:
      "— Car wash",
    analysis:
      "Vehicle progress visibility",
    solution:
      "Vehicle Tracking System",
    result:
      "Customers know the status without calling."
  },

  {
    problem:
      "Appointments are scattered across WhatsApp messages and notebooks.",
    business:
      "— Salon",
    analysis:
      "Booking workflow",
    solution:
      "Digital Booking System",
    result:
      "Fewer missed appointments and easier scheduling."
  },

  {
    problem:
      "We have customer records but can't easily see their history.",
    business:
      "— Service business",
    analysis:
      "Customer data organization",
    solution:
      "Customer Management Database",
    result:
      "A clearer view of every customer."
  },

  {
    problem:
      "We spend hours doing the same administrative tasks every day.",
    business:
      "— Growing business",
    analysis:
      "Workflow automation",
    solution:
      "Automated Business Workflow",
    result:
      "Less manual work and more productive time."
  }

];


let currentDemo = 0;

const demoProblem = document.getElementById("demoProblem");
const demoAnalysis = document.getElementById("demoAnalysis");
const demoSolution = document.getElementById("demoSolution");
const demoResult = document.getElementById("demoResult");
const nextProblem = document.getElementById("nextProblem");

function updateDemo() {

  const item = demoProblems[currentDemo];

  demoProblem.textContent =
    `${item.problem} ${item.business}`;

  demoAnalysis.textContent =
    item.analysis;

  demoSolution.textContent =
    item.solution;

  demoResult.textContent =
    item.result;

}


nextProblem.addEventListener("click", () => {

  currentDemo++;

  if (currentDemo >= demoProblems.length) {
    currentDemo = 0;
  }

  updateDemo();

});


/* ================= TECHNOLOGY DATA ================= */

const technologyData = {

  web: {
    number: "01",
    title: "Web",
    description:
      "Professional websites and digital platforms designed around the way your business works."
  },

  database: {
    number: "02",
    title: "Databases",
    description:
      "Organize customers, products, services, payments and operational records in structured systems."
  },

  data: {
    number: "03",
    title: "Data",
    description:
      "Turn business records into useful information that helps you understand performance."
  },

  automation: {
    number: "04",
    title: "Automation",
    description:
      "Reduce repetitive work by connecting processes and letting technology handle routine tasks."
  },

  ai: {
    number: "05",
    title: "AI",
    description:
      "Add intelligent assistance to workflows where AI can genuinely improve speed and decision-making."
  },

  apps: {
    number: "06",
    title: "Apps",
    description:
      "Custom digital tools built around specific business workflows and customer experiences."
  },

  tracking: {
    number: "07",
    title: "Tracking",
    description:
      "Give businesses and customers visibility into orders, vehicles, jobs, deliveries and processes."
  },

  dashboards: {
    number: "08",
    title: "Dashboards",
    description:
      "Bring important business information into one clear visual interface for faster decisions."
  }

};


const techItems = document.querySelectorAll(".tech-item");

const techNumber = document.querySelector(".tech-detail-number");
const techTitle = document.getElementById("techTitle");
const techDescription = document.getElementById("techDescription");

techItems.forEach(item => {

  item.addEventListener("click", () => {

    const key = item.dataset.tech;

    const data = technologyData[key];

    if (!data) return;

    techItems.forEach(tech => {
      tech.classList.remove("active");
    });

    item.classList.add("active");

    techNumber.textContent = data.number;
    techTitle.textContent = data.title;
    techDescription.textContent = data.description;

  });

});


/* ================= FORM ================= */

const problemForm = document.getElementById("problemForm");
const formSuccess = document.getElementById("formSuccess");
const resetForm = document.getElementById("resetForm");

problemForm.addEventListener("submit", event => {

  event.preventDefault();

  const industry =
    document.getElementById("industry").value;

  const problem =
    document.getElementById("problem").value;

  const name =
    document.getElementById("name").value;

  const phone =
    document.getElementById("phone").value;


  if (!industry || !problem || !name || !phone) {

    alert("Please complete the required fields.");

    return;

  }


  /*
    V1 DEMO MODE

    Later this will send the information
    to the HackyTech backend/database.
  */

  console.log("HackyTech Problem Submission:", {

    industry,
    problem,
    name,
    phone,

    improvements:
      [...document.querySelectorAll(
        '.check-option input:checked'
      )].map(input => input.value)

  });


  problemForm
    .querySelectorAll(".form-step, .submit-btn, .form-note")
    .forEach(element => {
      element.style.display = "none";
    });


  formSuccess.classList.add("show");

});


/* ================= RESET FORM ================= */

resetForm.addEventListener("click", () => {

  problemForm.reset();

  formSuccess.classList.remove("show");

  problemForm
    .querySelectorAll(".form-step, .submit-btn, .form-note")
    .forEach(element => {
      element.style.display = "";
    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    navbar.style.background =
      "rgba(7, 7, 7, 0.92)";

  } else {

    navbar.style.background =
      "rgba(10, 10, 10, 0.78)";

  }

});


/* ================= INITIALIZE ================= */

updateDemo();

console.log(
  "HackyTech V1 loaded successfully."
);
