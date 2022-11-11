let site = document.getElementById(`app`);
let creation = ``;
let missing = ``;
let chosenname = ``;
let backgroundContent = ``;
let alitnmentContent = ``;
let classContent = ``;
let raceContent = ``;
let mychosenname = ``;
let myNewCharacter = ``;
const backgroundArr = ['Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Outlander', 'Noble', 'Sage', 'Sailor', 'Solider', 'Urchin'];
const alignmentArr = ['Neutral good', 'Chaotic good', 'Lawful neutral', 'Neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil',];
const classArr = ['Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard'];
const raceArr = ['Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
const choose = ['Race', 'Class', 'Alignment', 'Background'];
const arrCollection = [raceArr, classArr, alignmentArr, backgroundArr];
const voiceline = ['Greetins! I am a ', 'known as a ', 'I align with ', 'In my past life I was an '];
const output = [false, false, false, false];

function view(){
    let viewArr = ``;
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
    <div>${viewArr}</div>`; 
}

view()

function chosencharacter(main, undercategory){
    output[main] = `${voiceline[main]} ${arrCollection[main][undercategory]}. `;
    view();
}
/*
updateview()
function updateview() {
    site.innerHTML = `
<h1>Character creation</h1>
<p>Be ready for your travels and create your new Dungeons and Dragons character!</p><br/>
<p>Name your character!</p>
<div>${mychosenname}</div>
<input id="namebox" type="text" value="${chosenname}" placeholder="Enter name"/><button onclick="nameGenerator()">Create my name!</button>
<div>${creation}</div><br/>

<P>Choose race: </p>
<div>${raceArr}</div>

<p>Choose class:</p>
<div>${classContent}</div>

<p>Choose alignment:</p>
<div>${alitnmentContent}</div>

<p>Choose background:</p>
<div>${backgroundContent}</div>

<div>${missing}</div>
`;
}

function nameGenerator() {
    chosenname = document.getElementById(`namebox`).value;
    mychosenname = `<div>Greetings! My glorious name is ${chosenname}, a pleasure!</div>`;
    updateview()
}


function radioGenerator(arr, choice) {
    for (let i = 0; i < arr.length; i++) {
        choice += `<input onchange="chosencharacter()" type="radio" name="background"/>${arr[i]}<br/>`;
    }
    updateview();
}
radioGenerator(backgroundArr, backgroundContent);
radioGenerator(alignmentArr);
radioGenerator(classArr);
radioGenerator(raceArr);

function chosencharacter() {
    
    updateview();
}
*/
