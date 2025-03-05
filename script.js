let btn = document.getElementById("send-btn");
let content = document.getElementById("content");
btn.addEventListener("click", getCharacters);
let amountInput = document.getElementById("amount");


async function getCharacters() {
    try {
        let amountValue = amountInput.value;
        const BASE_URL = `https://dragonball-api.com/api/characters?limit=${amountValue}`;
        let response = await fetch(BASE_URL);
        let characters = await response.json();
        /* console.log(characters); */
        createInDOM(characters.items);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

function createInDOM(characters) {
    content.innerHTML='';
    characters.forEach(elem => {
        addElement(elem);
    });
}

function addElement(elem){
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
    race.innerHTML='Raza';
    gender.innerHTML='Género';
    ki.innerHTML='Ki Base';
    maxKi.innerHTML='Ki Total';
    affiliation.innerHTML='Afiliación';

    // Imagen
    img.src = elem.image;

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

    // Metemos el div al DOM
    div.classList.add('card');
    name.classList.add('title');
    content.appendChild(div);
}

btn.classList.add("send-btn");