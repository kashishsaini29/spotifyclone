console.log("Welcome to Spotify Clone");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songsName: "Distance_Love_-_Ze(128k)", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songsName: "_Simar_Dorraha(128k)", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songsName: "G_Shit_(Full_Video)(128k)", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songsName: "Aa_Giya_Ni_Ohi_Billo(128k)", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songsName: "Selfmade-Chaach(128k)", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songsName: "Chal_Mera_Putt_(Title_(128k)", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songsName: "_Chu_Gon_Do_(128k)", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songsName: "US_(Official_Vi(128k)", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songsName: "Temporary_Pyar(128k)", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songsName: "_Chu_Gon_Do_(128k)", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },

]

songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songsName;
});

//audioElement.play();

// Handel play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-pause');
     element.classList.add('fa-circle-play');

   })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    console.log(e.target);

    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
})
})