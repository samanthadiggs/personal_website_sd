/* .js files add interaction to your website */


/* page transition function  */
function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
            else {
                reveals[i].classList.remove("active")
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal()

    /* left side reveal */
    function reveal2() {
        var reveals = document.querySelectorAll('.reveal2')
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
                else {
                    reveals[i].classList.remove("active")
                }
            }
        }

window.addEventListener("onload", reveal2)
reveal2()

function reveal3() {
    var reveals = document.querySelectorAll('.reveal3')
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
            else {
                reveals[i].classList.remove("active")
            }
        }
    }

window.addEventListener("onload", reveal3)
reveal3()



document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', e.clientX + 'px');
  document.documentElement.style.setProperty (
    '--y', e.clientY + 'px');
}

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
$hoverables.forEach (el => {
  el.addEventListener('mouseenter', onMouseHover);
  el.addEventListener('mouseleave', onMouseHoverOut);
});

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('projects-all').addEventListener('wheel', function(event) {
    if (event.deltaY != 0) {
        // Prevent the default vertical scrolling
        event.preventDefault();

        // Scroll horizontally instead
        this.scrollLeft += event.deltaY;
    }
  });
})


// education page - certification scroll
function transitionToPage(nextPageId) {
  const currentPage = document.querySelector('.current-page');
  const nextPage = document.getElementById(nextPageId);

  currentPage.classList.add('fade-out');
  nextPage.style.display = 'block';
  nextPage.classList.add('slide-in');

  currentPage.addEventListener('animationend', () => {
    currentPage.classList.remove('current-page', 'fade-out');
    currentPage.style.display = 'none';
    nextPage.classList.add('current-page');
    nextPage.classList.remove('slide-in');
  }, { once: true });
}

const leftButton = document.querySelector('.scrollLeft');
const rightButton = document.querySelector('.scrollRight');
const certsContainer = document.querySelector('.certificationContainer');

leftButton.addEventListener('click', () => {
  certsContainer.scrollBy({
    left: -200, // Adjust scroll amount as needed
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  certsContainer.scrollBy({
    left: 200, // Adjust scroll amount as needed
    behavior: 'smooth'
  });
});


/* page load */


