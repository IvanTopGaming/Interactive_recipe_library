document.getElementById('search-form').addEventListener('submit', function (event) {
	event.preventDefault();
	const query = document.getElementById('search-input').value;
	console.log('Поиск рецептов по запросу:', query);
});

document.getElementById('add-recipe-form').addEventListener('submit', function (event) {
	event.preventDefault();
	const name = document.getElementById('recipe-name').value;
	const ingredients = document.getElementById('recipe-ingredients').value;
	const instructions = document.getElementById('recipe-instructions').value;
	const image = document.getElementById('recipe-image').files[0];
	console.log('Добавление рецепта:', { name, ingredients, instructions, image });
});
