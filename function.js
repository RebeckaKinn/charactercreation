let site = document.getElementById(`app`);
let chosenname = ``;
let mychosenname = ``;
let missingCategory = ``; 
let viewArr = ``;
const backgroundArr = ['Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Outlander', 'Noble', 'Sage', 'Sailor', 'Solider', 'Urchin'];
const alignmentArr = ['Neutral good', 'Chaotic good', 'Lawful neutral', 'Neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil',];
const classArr = ['Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard'];
const raceArr = ['Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
const choose = ['Race', 'Class', 'Alignment', 'Background'];
const arrCollection = [raceArr, classArr, alignmentArr, backgroundArr];
const voiceline = ['I am a ', 'Known as an equisit ', 'You might hear some rurmos about me, but I am really ', 'In my past life I was an '];
const output = [false, false, false, false];

view();
function view(){
    viewArr += `<div>`;
    for (let i = 0; i < output.length; i++){
        if (output[i]) viewArr += output[i];
    }
    viewArr += `</div>`;

    for (let i = 0; i < choose.length; i++){
        viewArr += `<h3>${choose[i]}</h3>`;
        for (let j = 0; j < arrCollection[i].length; j++){
            viewArr += `<input onchange="chosencharacter(${i}, ${j})" type ="radio" name="${i}"/>${arrCollection[i][j]}<br/>`;
        }
    }
    site.innerHTML = `
    <h1>Choose your character!</h1>
    <p>Be ready for your travels and create your new Dungeons and Dragons character!</p><br/>
    <p>Name your character!</p>
    <input id="namebox" type="text" value="${chosenname}" placeholder="Enter name"/><button onclick="nameGenerator()">Create my name!</button>
    <div>${missingCategory}</div>
    <div>${mychosenname}${viewArr}</div>
    `; 
}
//somethingMissing()

function chosencharacter(main, undercategory){
    output[main] = `${voiceline[main]} ${arrCollection[main][undercategory]}. `;
    view();
}

function nameGenerator() {
    chosenname = document.getElementById(`namebox`).value;
    mychosenname = `<div>Greetings! My glorious name is ${chosenname}, a pleasure!</div>`;
    view()
}

//function somethingMissing(){ 
//    if(){ 
//    missingCategory += `<div>You have chosen all!</div>`;
//} else {
//    missingCategory += `<div>You have not chosen yet!</div><br/>`;
//}
//    view();
//}