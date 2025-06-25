// This code will toggle the class 'show-menu' on the body tag
// when an element (usually a <button>) with the class 'js-menu-trigger' is clicked
//
// In your HTML:
// <button class="js-menu-trigger">Toggle</button>

document.addEventListener('DOMContentLoaded', function() {
  var menuTrigger = document.querySelector('.js-menu-trigger');

  if (menuTrigger) {
    menuTrigger.addEventListener('click', function() {
      document.body.classList.toggle('show-menu');
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
	var colormodeTrigger = document.querySelector('.js-mode');
	var themeIcon = document.getElementById('theme-icon'); 

	if (colormodeTrigger && themeIcon) {
		colormodeTrigger.addEventListener('click', function() {
			document.body.classList.toggle('dark-mode');

			if (document.body.classList.contains('dark-mode')) {
				themeIcon.src = 'images/dark.png';
			} else {
				themeIcon.src = 'images/light.png';
			}
		});
	}
});



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.leaves-container');
  const trigger = document.querySelector('.brewing-card');
  let interval;

  function createLeaf() {
	const leaf = document.createElement('img');
	leaf.src = 'images/leaffall.png';
	leaf.classList.add('falling-leaf');
	leaf.style.left = Math.random() * 100 + 'vw';
	leaf.style.animationDuration = (6 + Math.random() * 4) + 's';
	leaf.style.opacity = Math.random();
	leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
	container.appendChild(leaf);
	setTimeout(() => leaf.remove(), 10000);
  }

  trigger.addEventListener('mouseenter', () => {
	interval = setInterval(createLeaf, 300);
  });

  trigger.addEventListener('mouseleave', () => {
	clearInterval(interval);
  });
});


