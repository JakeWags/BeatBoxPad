/*

* @author: Jake Wagoner
* @author: Josh Madsen

  Using Howler.js

*/

/*

  To load files, just put file into 'audio' folder and put the localPath from the HTML file into the filePaths array inside filePaths.js.
  Then, put the name you want on the button in the buttonLabels array inside buttonLabels.js.

  ***Make sure label is in same array index position as the filepath***

*/

let buttonsPerRow = parseInt(document.getElementById("BeatBoxPad").getAttribute("data-buttonsPerRow"));
  if (isNaN(buttonsPerRow)) {
    buttonsPerRow = 3;
  };
  if (buttonsPerRow > 5) {
    buttonsPerRow = 5;
    alert('Maximum buttons per row is 5');
  }

let sounds = [];

// Dynamically creates a div element for every filepath loaded.
const createSoundboardItem = (i) => {
  let div = document.createElement("DIV");
  let text = document.createTextNode(buttonLabels[i]);
  div.className = "soundboard-item";
  div.onclick = () => {sounds[i].play()};
  div.style = "width: " + ((100 / buttonsPerRow)-3) + "%";
  div.appendChild(text);
  document.getElementById("div-container").appendChild(div);
}

//sets up sounds array with Howl object of every filepath
//This allows you to do sounds[1].play and it will play the file in index of 1
for (let i=0;i<filePaths.length;i++) {
  sounds.push(new Howl({src:[filePaths[i]]}));
  createSoundboardItem(i);
}
