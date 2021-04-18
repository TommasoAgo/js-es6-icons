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
// Milestone 2
// Coloriamo le icone per tipo
const colorArray = colorIcons(icons, colors);
// Lo stampo
printIcons(colorArray, iconsContainer);

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// Mi serve la select come oggetto jQuery
const selectElement = $('#type');
const iconsTypes = getIconsType(colorArray);
printFilter(iconsTypes, selectElement);

// Stavo usando Array normali.
// Meglio usare filter.


// Creo un evento su selectElement. Quando cambia deve cambiare anche l'Array che va a stampare 
selectElement.change(function() {
	// Prendo il valore inserito dall'utente
	selectedType = selectElement.val();

	const filteredIcons = filterIcons(colorArray, selectedType);

	// Stampo le icone
	printIcons(filteredIcons, iconsContainer)
});



// --------- FUNCTIONS ---------
// Scrivo una funzione che mi fa stampare tutte le icone di un Array. Container deve essere un oggetto jQuery
function printIcons (iconsArray, container) {
	container.html('');

	iconsArray.forEach(element => {

		// Destrutturo element per prenderne i valori
		const {name, prefix, family, color} = element;
		// Uppercase
		const nameUppercase = name.toUpperCase();

		// IconElement sarà uguale al template che mi ero preparato su html coi valori reimpostati
		// dalla destrutturazione dell'elemento.
		let iconElement = `
		<div class="icon">
				<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
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

		// Clono l'oggetto dell'Array principale per appendergl il colore
		const clonedObject = {
			...element
		}

		// Con indexOf prendo l'indice dell'Array dei tipi
		let iconsTypeIndex = iconTypes.indexOf(clonedObject.type);

		// L'indice dell'Array dei colori deve combaciare con l'indice dell'Array dei tipi
		// Ma deve essere diverso da -1 (nel caso in cui l'indexOf non trovasse l'indice e tornasse -1)
		if (iconsTypeIndex != -1) {
			clonedObject.color = colorsArray[iconsTypeIndex];
		}

		return clonedObject;
	})
	
	return iconsWithColors;
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

	// La funzione ritornerà l'Array dei tipi
	return typesArray;
}

// Creo una funzione che filtra i tipi degli oggetti 
function printFilter(iconTypesArray, selectEl) {
	iconTypesArray.forEach((element) => {
		const newOption = `
			<option value="${element}">${element}</option> 
		`

		selectEl.append(newOption);
	});
};

// Creo una funzione per filtrare le icone da stampare
function filterIcons(iconsArray, type) {
	// Uso una condizione per far si che se il valore della input è vuoto li stampi tutti
	if ( type.length == 0 ) {
		return iconsArray;
	}

	// Uso filter per filtrare le icone
	let filteredArray = iconsArray.filter((element) => {
		return element.type == type;
	});
	// Ritorno l'Array filtrato
	return filteredArray;
};