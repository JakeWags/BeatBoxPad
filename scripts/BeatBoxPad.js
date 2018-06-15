/*
@author: Jake Wagoner
@author: Josh Madsen

Using Howler.js
*/
let filePaths = ['./audio/deepsub.wav', './audio/lightsnare.wav', './audio/cymbal.wav'];
let sounds = [];

//sets up sounds array with Howl object of every filepath
//This allows you to do sounds[1].play and it will play the file in index of 1
for (let i=0;i<filePaths.length;i++) {
  sounds.push(new Howl({src:[filePaths[i]]}));
}
