// MMM Restaurants — placeholder shell behaviour

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmBox = document.getElementById('reservation-confirm');
      resForm.style.display = 'none';
      if (confirmBox) confirmBox.style.display = 'block';
    });
  }
});
