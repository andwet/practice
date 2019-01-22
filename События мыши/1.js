var block = document.getElementById('one');
// клик мышью
// block.onclick = function() {
// 	this.style.background = 'green';
// 	this.onclick = null;
// }

// // двойной клик мышью
// block.ondblclick = function() {
// 	this.style.background = 'red'
// }

// клин правой кнопкой мыши
block.oncontextmenu = function() {
	this.style.background = 'black'
	return false;
}
// // оключение контекстного меню в браузере (правой кнопкой мышки)
// document.oncontextmenu = function() {
// 	return false;
// }

// мышь входит на элемент (hover)
// block.onmouseenter = function() {
// 	this.style.background = 'blue';
// 	console.log('!!in');
// }

// // событие когда мышь уходит с элемента
// block.onmouseleave = function() {
// 	this.style.background = 'cyan';
// }

// двидение мыши внутри блока
// var a = 0;
// block.onmousemove = function() {
// 	a++;
// 	this.style.width = 300 + a + 'px';
// }

// нажатие и держим кнопку мышки (любую)
block.onmousedown = function(event) {
	this.style.background = 'gold';
	console.log('button:' +event.button);
	console.log('which:' +event.which);
}
block.onmouseup = function() {
	this.style.background = 'pink';
	// console.log('button:' +event.button);
	// console.log('which:' +event.which);
}