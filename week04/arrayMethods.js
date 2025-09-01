const students = [
	{ id: 1, name: "Somchai Jaidee" },
	{ id: 2, name: "Suda Deejai" },
	{ id: 3, name: "John Smith" },
];

const words = ["Mango", "Apple", "mangosteen", "orange"];

console.log(
	students.map((value) => value.id).filter((value) => value % 2 === 0)
);

console.log(words.filter((value) => value.toLowerCase().includes("mango")));

console.log(
	words.find((value) => value.toLowerCase().includes("apple"))
		? "have a apple"
		: "dont have apple"
);

const product = [1, "RED", 102];
const productDetail = product.reduce((detail, prop) => {
	return prop === "RED" ? detail.concat("R") : detail.concat(prop);
}, "");
console.log(productDetail);

const cart = [
	{ productId: 1001, price: 500, quantity: 2 },
	{ productId: 1002, price: 10, quantity: 3 },
	{ productId: 1003, price: 5, quantity: 10 },
];

let paid = {};
paid.total = cart
	.map((value) => value.price * value.quantity)
	.reduce((acc, curr) => acc + curr);

console.log(paid);

cart.push({ productId: 5555, price: 1, quantity: 4 });
console.log(cart);
console.log(cart.pop());
console.log(cart.length);

const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"];

words1.splice(2, 1, "banana");
words1.splice(words1.length - 3, 2);

console.log(
	words1.splice(
		words1.findIndex((value) => value.toLowerCase() === "apple"),
		1
	)
);

console.log(words1.slice(2, 5));
console.log(words1.slice(0, 3));

console.log(words1.fill(null));
