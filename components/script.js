let characters = [
{ text: 'Tinky-Winky', image: 'media/characterss/tinky.png' },
{ text: 'Dipsy', image: 'media/characterss/dipsy.png' },
{ text: 'Laa-Laa', image: 'media/characterss/laa.png' },
{ text: 'Po', image: 'media/characterss/po.png' },
{ text: 'Noo-noo vacuum cleaner', image: 'media/characterss/noo.png' }
];

console.log('Кто ты сегодня?');
//alert('Кто ты сегодня?');

function getRandomElement(arr) {
	let randIndex = Math.floor(Math.random() * arr.length);

	return arr[randIndex];
}

//let randomElement = getRandomElement(characters);
//alert(randomElement);

//let menu = document.querySelector('.menu');
let button = document.querySelector('.button');
let character = document.querySelector('.character');
let answer = document.querySelector('.answer');
let image = document.querySelector('.image');

//menu.textContent = getRandomElement(characters);
button.addEventListener('click', function() {
	let randomElement = getRandomElement(characters);
	//character.textContent = randomElement.text;
	//image.src = randomElement.image;
	smoothly(character, 'textContent', randomElement.text);
	smoothly(image, 'src', randomElement.image);

	if (randomElement.text.length > 40) {
		answer.style.fontSize = '33px';
	} else {
		answer.style.fontSize = '42px';
	}
	
})
