/*

* @author: Jake Wagoner
* @author: Josh Madsen

  Using Howler.js

*/

/*

  To load files, just put file into 'audio' folder and put the localPath from the HTML file into the filePaths array.
  Then, put the name you want on the button in the buttonLabels array.   ***Make sure label is in same array index position***

*/

let filePaths = [
  './audio/basskick.wav',
  './audio/lightsnare.wav',
  './audio/cymbal.wav',
  './audio/subkick2.wav',
  './audio/chicken.wav',
];
let buttonLabels = [
  'Bass',
  'Snare',
  'Cymbal',
  'Sub Kick',
  'Chicken',
];
let sounds = [];

// Dynamically creates a div element for every filepath loaded.
const createSoundboardItem = (i) => {
  let div = document.createElement("DIV");
  let text = document.createTextNode(buttonLabels[i]);
  div.className = "soundboard-item";
  div.onclick = () => {sounds[i].play()};
  div.appendChild(text);
  document.getElementById("div-container").appendChild(div);
}

//sets up sounds array with Howl object of every filepath
//This allows you to do sounds[1].play and it will play the file in index of 1
for (let i=0;i<filePaths.length;i++) {
  sounds.push(new Howl({src:[filePaths[i]]}));
  createSoundboardItem(i);
}
