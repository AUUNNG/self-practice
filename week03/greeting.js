function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
	return `${greet} ${whom} ${quote}`;
}

console.log(greeting("hi")); //Hello Guest How are you?
console.log(greeting("Good morning", "Guy", "Great!")); //Good morning Guy Great!
console.log(greeting(undefined, null, "Fine")); //Hello null Fine
console.log(greeting()); //Hello Guest How are you?
