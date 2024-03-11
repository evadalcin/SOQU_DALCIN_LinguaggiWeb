//Dal Cin Eva
//modifica menù in alto
let listItems = document.getElementsByClassName("item_text");

async function list() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = json.programming_languages_popular[i];
    }

    //Sostituzione logo its con logo w3school
    let changeImg = document.getElementsByClassName("eltdf-normal-logo")[0];
    changeImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png';
}
list();