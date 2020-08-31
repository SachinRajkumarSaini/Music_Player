const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs = [
    {
        name: "Play-Date",
        title: "Play-Date",
        artist: "Melanie Martinez",
    },
    {
        name: "Cheap-Thrills",
        title: "Cheap-Thrills",
        artist: "Sia",
    },
    {
        name: "Yummy",
        title: "Yummy",
        artist: "Justin Bieber",
    },
    {
        name: "Despacito",
        title: "Despacito",
        artist: "Luis Fonsi",
    },
    {
        name: "Senorita",
        title: "Senorita",
        artist: "Shawn Mendes",
    }
];

let isplaying = true;

const playmusic = () =>{
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const stopmusic = ()=>{
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", ()=>{
  isplaying ? stopmusic() : playmusic();
});


const loadsongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `sound/${songs.name}.mp3`;
    img.src = `img/${songs.name}.JPG`;
};

indexSongs = 0;

const nextSong = () => {
    indexSongs = (indexSongs + 1)% songs.length;
    loadsongs(songs[indexSongs]);
    music.play();
    play.classList.replace("fa-play", "fa-pause");
}
const prevSong = () => {
    indexSongs = (indexSongs - 1 + songs.length) % songs.length;
    loadsongs(songs[indexSongs]);
    music.play();
    play.classList.replace("fa-play", "fa-pause");
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);