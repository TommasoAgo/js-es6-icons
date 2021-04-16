const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// Creo un container che sia oggetto jQuery
let iconsContainer = $('#icons-container');
// Lo stampo
printIcons(icons, iconsContainer);

// --------- ELEMENT TEMPLATE ---------  
{/* <div class="icon">
	<i class="fas fa-cat"></i>
	<div>
		CAT
	</div>
</div> */}

// Milestone 2
// Coloriamo le icone per tipo
const colorArray = colorIcons(icons, colors);

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


// --------- FUNCTIONS ---------
// Scrivo una funzione che mi fa stampare tutte le icone di un Array. Container deve essere un oggetto jQuery
function printIcons (iconsArray, container) {
	
	iconsArray.forEach(element => {

		// Destrutturo element per prenderne i valori
		const {name, prefix, family} = element;
		// Uppercase
		const nameUppercase = name.toUpperCase();
		
		// IconElement sarà uguale al template che mi ero preparato su html coi valori reimpostati
		// dalla destrutturazione dell'elemento.
		let iconElement = `
		<div class="icon">
				<i class="${family} ${prefix}${name}"></i>
				<div>
					${nameUppercase}
				</div>
			</div>
		`
		container.append(iconElement); 
	});
}

// Scrivo una funzione che mi restituisca un Array con i colori
function colorIcons(originalIconsArray, colorsArray) {
	const iconTypes = getIconsType(originalIconsArray);

	// Creo un nuovo Array con map
	const iconsWithColors = originalIconsArray.map((element) => {
		const clonedObject = {
			...element
		}

		clonedObject.color = 'test';

		return clonedObject;
	})
	console.log(iconsWithColors);
}

// Creo una funzione che genera un Array con dentro i tipi degli oggetti 'Icona' senza doppioni
function getIconsType(iconsArray) {
	// Creo un Array vuoto da popolare con i tipi
	const typesArray = [];

	// Faccio un loop forEach sull'array di icone
	iconsArray.forEach((element) => {
		// Metto in una variabile tutti i tipi degli oggetti
		const elementType = element.type;
		
		// Faccio un if per evitare di aggiungere doppioni nell'Array
		if (!typesArray.includes(elementType)) {
			typesArray.push(elementType);
		}
	});
}