var isMenuOpen = false;  // Initialize a flag to track the menu state

document.getElementById("ham-menu").addEventListener("click", function() {
    var menuArea = document.getElementById("menu-area");
    var hamMenu = document.getElementById("ham-menu");
    var socialsTop = document.getElementById("socials-top");

    if (isMenuOpen) {
        menuArea.style.display = "none";
        hamMenu.classList.remove("bi-x");
        hamMenu.classList.add("bi-list");
        socialsTop.style.display = "none";
    } else {
        menuArea.style.display = "flex";
        hamMenu.classList.remove("bi-list");
        hamMenu.classList.add("bi-x");
        socialsTop.style.display = "flex";
    }

    isMenuOpen = !isMenuOpen;  // Toggle the menu state
});



const featSelElements = document.querySelectorAll('.feat-sel');
const featureElements = document.querySelectorAll('.feature');

featSelElements.forEach((selector, index) => {
  selector.addEventListener('click', () => {
    featSelElements.forEach((feature) => {
      feature.classList.remove('feat-active');
    });

    selector.classList.add('feat-active');

    featureElements.forEach((feature) => {
      feature.style.display = 'none';
    });

    featureElements[index].style.display = 'flex';
  });
});

const faqElements = document.querySelectorAll('.faq');

faqElements.forEach((faq) => {
  const chevronIcon = faq.querySelector('.faq-q i');
  const answer = faq.querySelector('.faq-a');

  faq.addEventListener('click', () => {
    if (answer.style.display === 'grid') {
      answer.style.display = 'none';
      chevronIcon.classList.remove('bi-chevron-up');
      chevronIcon.classList.add('bi-chevron-down');
    } else {
      answer.style.display = 'grid';
      chevronIcon.classList.remove('bi-chevron-down');
      chevronIcon.classList.add('bi-chevron-up');
    }
  });
});

const form = document.getElementById("form");
        const emailInput = document.getElementById("email-subscribe");
        const errorEmail = document.getElementById("error-email");

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function handleSubmit(event) {
            event.preventDefault(); 
            const email = emailInput.value;

            if (validateEmail(email)) {
                errorEmail.style.display = "none";
                console.log("Form submitted");
            } else {
                errorEmail.style.display = "block";
            }
        }

        form.addEventListener("submit", handleSubmit);