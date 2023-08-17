
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // default to light mode
    const initialMode = localStorage.getItem('theme-mode') || 'light-mode';
    body.classList.add(initialMode);

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Save the mode preference to local storage
        const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme-mode', currentMode);
    });
});

function openNav() {
  document.getElementById("mySidenav").style.right = "0"; // Slide in from the right
}

function closeNav() {
  document.getElementById("mySidenav").style.right = "-80%"; // Slide out to the right
}

function showModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = src;
    modal.style.display = "block";
  }

  function hideModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }


document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkSkills() {
    skills.forEach((skill) => {
      if (isInViewport(skill)) {
        skill.classList.add("active");
      } else {
        skill.classList.remove("active"); 
      }
    });
  }

  checkSkills();

  
  window.addEventListener("scroll", checkSkills);
});


document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }

  function animateServices() {
    services.forEach((service) => {
      if (isInViewport(service)) {
        service.classList.add("active");
      } else {
        service.classList.remove("active");
      }
    });
  }

  animateServices();
  window.addEventListener("scroll", animateServices);
});




document.addEventListener("DOMContentLoaded", function () {
  const recommendations = document.querySelectorAll(".recommendation");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, 
  };

  const recommendationObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, options);

  recommendations.forEach(function (recommendation) {
    recommendationObserver.observe(recommendation);
  });
});



