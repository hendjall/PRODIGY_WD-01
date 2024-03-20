// Add smooth scrolling to nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
  function toggleAdditionalContent(button) {
    var section = button.closest('.section'); 
    var additionalContent = section.querySelector('.additional-content');
    
    // Toggle the display of the additional content
    if (additionalContent.style.display === 'none') {
        additionalContent.style.display = 'block';
        button.textContent = 'Read Less'; // Change text content of the clicked button
    } else {
        additionalContent.style.display = 'none';
        button.textContent = 'Read More'; // Change text content of the clicked button
    }
}

  
  