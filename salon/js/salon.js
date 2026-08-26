// MMM Salon — placeholder shell behaviour

(function preloader() {
  var el = document.getElementById('preloader');
  if (!el) return;
  var pct = el.querySelector('.pl-pct');
  document.body.classList.add('no-scroll');

  var value = 0;
  var duration = 900;
  var start = performance.now();

  function tick(now) {
    var elapsed = now - start;
    value = Math.min(100, Math.round((elapsed / duration) * 100));
    if (pct) pct.textContent = value + '%';
    if (elapsed < duration) {
      requestAnimationFrame(tick);
    } else {
      finish();
    }
  }

  function finish() {
    el.classList.add('done');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { el.remove(); }, 600);
  }

  requestAnimationFrame(tick);
  // never block longer than ~1.5s even if something stalls
  setTimeout(finish, 1500);
})();

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
