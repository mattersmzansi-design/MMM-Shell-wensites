// MMM Personal Profile — placeholder shell behaviour

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmBox = document.getElementById('contact-confirm');
      contactForm.style.display = 'none';
      if (confirmBox) confirmBox.style.display = 'block';
    });
  }
});
