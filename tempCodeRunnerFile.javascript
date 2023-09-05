let users = [
	{ name: 'Gertrude' },
	{ name: 'Henry' },
	{ name: 'Marguerite' },
	{ name: 'Mattie' },
	{ name: 'Jerome' }
]

console.log(users);

users = new Array(...users.slice(0, 2), { name: 'John' }, ...users.slice(2));

const arr = [2345, 3254, 5446, 2331, 33];

const quicksort = (array) => {
	if (array.length <= 1) return array;

	var pivot = array[0];
	var left = [];
	var right = [];

	array.forEach(el => el < pivot ? left.push(el) : right.push(el));

	return quicksort(left).concat(pivot, quicksort(right));
};
console.log(quicksort(arr));