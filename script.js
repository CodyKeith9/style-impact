// Closet entrance (home page only)
const entrance = document.getElementById("entrance");
const closetFrame = document.getElementById("closetFrame");
const enterBtn = document.getElementById("enterBtn");

if (enterBtn && closetFrame && entrance) {
  enterBtn.addEventListener("click", () => {
    closetFrame.classList.add("closet-open");
    setTimeout(() => {
      entrance.classList.add("hidden");
    }, 1100);
  });
}

// Contact form demo handler (only on contact page)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("This form is currently a demo. We'll hook it up to email or a backend later.");
    contactForm.reset();
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
