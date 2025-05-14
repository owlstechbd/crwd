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


//animated
AOS.init();
