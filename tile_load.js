var $loader = document.querySelector('.loader')

window.onload = function() {
  $loader.classList.remove('loader--active')
};

document.querySelector('a.hoverable.navLink').addEventListener('click', function(event) {
    // Prevent the default action of the link
    event.preventDefault();
  
  $loader.classList.add('loader--active')
  
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
    window.location = 'portfolio.html'
  }, 8000)

})