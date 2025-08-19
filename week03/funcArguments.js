function sum(x, y, ...z) {
	//   return x + y
	//   return arguments[0] + arguments[1]
	for (argu of arguments) {
		console.log(argu);
	}
	console.log(`length: ${arguments.length}`);
	console.log(`x: ${x}`);
	console.log(`y: ${y}`);
	console.log(`z: ${z}`);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
