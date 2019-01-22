document.getElementById('wrapper').onmousemove = function(event) {
	var x = event.offsetX;  //относительно родителя
	console.log(x);
	document.getElementById('two').style.width = x + 'px';
}

document.getElementById('wrapper').onmouseleave = function() {
	document.getElementById('two').style.width = '500px';
}