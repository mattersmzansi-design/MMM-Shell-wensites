// MMM Salon — placeholder shell behaviour

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmBox = document.getElementById('booking-confirm');
      bookingForm.style.display = 'none';
      if (confirmBox) confirmBox.style.display = 'block';
    });
  }
});
