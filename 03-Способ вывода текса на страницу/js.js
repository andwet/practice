function out() {
	var p = document.getElementById('out');
	// p.innerHTML = ' <b> Hello </b>';
	// p.innerText += ' <b> Hi </b>'

	// p.insertAdjacentHTML('beforeBegin', 'Hi');
	// beforeBegin перед открывающимся тегом

	// p.insertAdjacentHTML('afterBegin', 'Hi');
	// afterBegin после открывающиго тега
	// beforeEnd перед закрывающимся тегом
	// afterEnd после закрывающего тега

	p.outerHTML = '<div class="one">Hello</div>';
}