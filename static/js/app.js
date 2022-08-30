// Smooth scroll 

// anchor links with the hash
let anchorSelector = 'a[href^="#"]';
// Collect all such anchor links
let anchorList = document.querySelectorAll(anchorSelector);
// Iterate through each of the links
anchorList.forEach(link => {
    link.onclick = function (e) {
        // Prevent scrolling if the hash value is blank
        e.preventDefault();
         // Get the destination to scroll to using the hash property
        let destination = document.querySelector(this.hash);
        // Scroll to the destination using scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Scrolling effect

var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});


