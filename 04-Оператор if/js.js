var prNum, tempOut;
	// Math.random генерирует дробь от 0 до 1 (0.66435), умножаем на 10, Math.foor округляет число в меньшую сторону, 1 как компенсация
	prNum = Math.floor((Math.random()) * 10 + 1);
	tempOut = document.getElementById('temp-out');
	// tempOut.innerHTML = prNum;
	console.log(prNum);

	

function f1() {
	var num, out;
		num = document.getElementById('mynum').value;	
		num = document.getElementById('mynum').value;
		out = document.getElementById('out');

	if (num == prNum) {
		out.innerHTML = 'Вы угадали!';
	}
	else if (num < prNum) {
		out.innerHTML = 'Вы указали число меньше';
	}
	else {
		out.innerHTML = 'Вы указали число больше';
	}

}