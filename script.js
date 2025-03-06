let btn = document.getElementById("send-btn");
let content = document.getElementById("content");
let amountInput = document.getElementById("amount");
btn.addEventListener("click", getCharacters);

// Se añade clase send-btn al botón
btn.classList.add("send-btn");

async function getCharacters() {
    let amountValue = amountInput.value;
    if (!amountValue) {
        alert('No se ingresó ninguna cantidad');
        amountInput.value = 1;
        return;
    }
    const BASE_URL = `https://dragonball-api.com/api/characters?limit=${amountValue}`;
    try {
        let response = await fetch(BASE_URL);
        let characters = await response.json();
        /* console.log(characters); */
        createInDOM(characters.items); //pasamos el arreglo de items que viene en el json
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

function createInDOM(characters) {
    content.innerHTML = '';
    characters.forEach(elem => {
        addElement(elem);
    });
}

function addElement(elem) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let race = document.createElement('h3');
    let gender = document.createElement('h3');
    let ki = document.createElement('h3');
    let maxKi = document.createElement('h3');
    let affiliation = document.createElement('h3');
    let race_text = document.createElement('p');
    let gender_text = document.createElement('p');
    let ki_text = document.createElement('p');
    let maxKi_text = document.createElement('p');
    let affiliation_text = document.createElement('p');

    //Atributos del personaje
    name.innerHTML = elem.name;
    race_text.innerHTML = elem.race;
    gender_text.innerHTML = elem.gender;
    ki_text.innerHTML = elem.ki;
    maxKi_text.innerHTML = elem.maxKi;
    affiliation_text.innerHTML = elem.affiliation;

    //Titulos de los H3
    race.innerHTML = 'Raza';
    gender.innerHTML = 'Género';
    ki.innerHTML = 'Ki Base';
    maxKi.innerHTML = 'Ki Total';
    affiliation.innerHTML = 'Afiliación';

    // Imagen
    img.src = elem.image;
    img.alt = elem.description;
    img.title = elem.description;

    // Metemos todos los elementos dentro del div
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(race);
    div.appendChild(race_text);
    div.appendChild(gender);
    div.appendChild(gender_text);
    div.appendChild(ki);
    div.appendChild(ki_text);
    div.appendChild(maxKi);
    div.appendChild(maxKi_text);
    div.appendChild(affiliation);
    div.appendChild(affiliation_text);

    //Agregamos clases de estilos
    div.classList.add('card');
    name.classList.add('title');

    // Metemos el div al DOM
    content.appendChild(div);
}
