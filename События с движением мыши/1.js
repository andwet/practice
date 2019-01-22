document.onmousemove = function() {
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="1.png" id="cat">');
	var cat = document.getElementById('cat');
	cat.style.position = 'fixed';

	document.onmousemove = function(c) {
		cat.style.left = event.clientX + -40 + 'px';
		cat.style.top = event.clientY + -40 + 'px';
		// cat.style.right=c.clientY+ -40 +'px';
  // 	cat.style.bottom=c.clientY+ -40 +'px';
	}
}



