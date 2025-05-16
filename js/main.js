window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});

document.querySelectorAll('.checkbox-box').forEach(box => {
  box.addEventListener('click', () => {
    const isSelected = box.classList.contains('selected');
    
    if (isSelected) {
      box.classList.remove('selected');
    } else {
      box.classList.add('selected');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const openBtns = document.querySelectorAll(".open-popup");
    const popup = document.getElementById("formPopup");
    const closeBtn = popup.querySelector(".popup-close");

    openBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        popup.style.display = "flex";
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Optional: close popup when clicking outside the form
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
//animated
AOS.init();
