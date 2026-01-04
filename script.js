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

/**
 * Contact form enhancements (only runs if elements exist)
 * - Shows "Shop Item" fields when Inquiry Type = "Shop"
 * - Demo submit handler (prevents default)
 *
 * Requires these IDs in contact.html:
 *   - inquiryType (select)
 *   - shopFields (container div)
 * Optional:
 *   - contactForm (form id)
 */
const inquiryType = document.getElementById("inquiryType");
const shopFields = document.getElementById("shopFields");

// Prefer an explicit form id if present; fallback to class selector.
const contactForm =
  document.getElementById("contactForm") || document.querySelector(".contact-form");

// Toggle shop fields visibility based on inquiry type
if (inquiryType && shopFields) {
  inquiryType.addEventListener("change", () => {
    const isShop = inquiryType.value === "Shop";
    shopFields.style.display = isShop ? "block" : "none";
  });
}

// Contact form demo handler (only on contact page)
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
      "Message sent (demo). We'll connect this form to email delivery or a backend next."
    );

    contactForm.reset();

    // After reset, hide shop fields again (in case Shop was selected)
    if (shopFields) {
      shopFields.style.display = "none";
    }
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

