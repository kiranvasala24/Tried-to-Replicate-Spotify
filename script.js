console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Chaar Botal Vodka @ Mp3HunGama.Com.mp3');
let masterPLay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Chaar Botal Vodka", filepath:"Chaar Botal Vodka @ Mp3HunGama.Com.mp3", coverPath:"cover1.jpg"},
    {songName: "Chaar Botal Vodka", filepath:"Chaar Botal Vodka @ Mp3HunGama.Com.mp3", coverPath:"cover1.jpg"},
    {songName: "Chaar Botal Vodka", filepath:"Chaar Botal Vodka @ Mp3HunGama.Com.mp3", coverPath:"cover1.jpg"},
    {songName: "Chaar Botal Vodka", filepath:"Chaar Botal Vodka @ Mp3HunGama.Com.mp3", coverPath:"cover1.jpg"},
    {songName: "Chaar Botal Vodka", filepath:"Chaar Botal Vodka @ Mp3HunGama.Com.mp3", coverPath:"cover1.jpg"},
    {songName: "Chaar Botal Vodka", filepath:"Chaar Botal Vodka @ Mp3HunGama.Com.mp3", coverPath:"cover1.jpg"},
]

let audioElement = new Audio('Chaar Botal Vodka @ Mp3HunGama.Com.mp3');
//audioElement.play();
// handle play/pause click
masterPLay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPLay.classList.remove('fa-play-circle');
        masterPLay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    }
    else
    audioElement.pause();
    masterPLay.classList.remove('fa-pause-circle');
    masterPLay.classList.add('fa-play-circle');
})
//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})