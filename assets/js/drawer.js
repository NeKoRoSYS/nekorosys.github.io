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
