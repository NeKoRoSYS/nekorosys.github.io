let isOpen = false;
function useDrawer() {
var drawerButton = document.getElementById("drawerButton");
	if (isOpen == false)
	{
		drawerButton.textContent = "X";
		document.getElementById("drawerHeader").appendChild(drawerButton);
		document.getElementById("fadeBlack").style.opacity = "0.5";
		document.getElementById("mainSidenav").style.width = "50%";
		document.getElementById("fadeBlack").style['pointer-events'] = 'auto';
	} else
	{
		drawerButton.textContent = "≡";
		document.getElementById("header").appendChild(drawerButton);
		document.getElementById("fadeBlack").style.opacity = "0.0";
		document.getElementById("mainSidenav").style.width = "0";
		document.getElementById("fadeBlack").style['pointer-events'] = 'none';
	}
	isOpen = !isOpen;
}
for(var i = 0; i < elements.length; i++) {
    names += elements[i].name;
}

const tabs = document.getElementsByClassName('tab');

for(var i = 0; i < tabs.length; i++) {
    names += elements[i].name;
}

// Create a new observer
const observer = new MutationObserver((mutationsList, observer) => {
  for(let mutation of mutationsList) {
    if (mutation.type === 'style' && mutation.attributeName === 'style') {
      const displayStyle = window.getComputedStyle(targetElement).getPropertyValue('display');
      if (displayStyle !== 'none') {
        // Display style has changed from 'none'
        console.log('Display style has changed to:', displayStyle);
        // Do something here
      }
    }
  }
});

// Start observing the target element for changes in attributes
observer.observe(targetElement, { attributes: true });

// To disconnect the observer when needed
// observer.disconnect();
