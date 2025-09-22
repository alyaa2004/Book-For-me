$( function() {
    $( "#inputcheckin" ).datepicker();
      $( "#inputcheckout" ).datepicker();

$('.level-slider').slick({

 dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
})
 

  function videoToggle() {
    video = $('.level-video').get(0)
    if (video.paused) {
      video.play();
      $('.video-control-play').hide();
      $('.video-control-pause').show();
    } else {
      video.pause();
      $('.video-control-play').show();
      $('.video-control-pause').hide();
    }
  }

  $('.video-control-play').click(function () {
    videoToggle();
  })
  $('.video-control-pause').click(function () {
    videoToggle();
  })

});

// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

edElements.forEach(el => observer.observe(el));
