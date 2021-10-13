const music = document.querySelector('audio');
        const img = document.querySelector('img');
        const play = document.getElementById('play');
        const artist = document.getElementById('artist');
        const title = document.getElementById('title');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        const song = [
        {
            name:"jay",
            title:"NINJAGO JAY",
            artist:"THE FOLD"
        },
        {
            name:"cole",
            title:"NINJAGO COLE",
            artist:"THE FOLD"
        }
    ];

        let isPlaying = false;
        // for play function
        const playMusic = () => {
            isPlaying = true;
            music.play();
            play.classList.replace("fa-play", "fa-pause")
            img.classList.add("anime");
        };

        // for puase function
        const pauseMusic = () => {
            isPlaying = false;
            music.pause();
            play.classList.replace("fa-pause", "fa-play")
            img.classList.remove("anime");
        };

        play.addEventListener('click', () => {
            isPlaying ? pauseMusic() : playMusic();
        });

        // changing the music data

        const loadsong = (song) =>{
            title.textContent = song.title;
            artist.textContent = song.artist;
            music.src = "music/"+song.name+".mp3";
            img.src = "images/"+song.name+".png";
        };

        songIndex = 0;

        const nextsong = () => {
            songIndex = (songIndex + 1) % song.length;
            loadsong(song[songIndex]);
        };

        const prevsong = () => {
            songIndex = (songIndex - 1 + song.length) % song.length;
            loadsong(song[songIndex]);
        };

        next.addEventListener('click', nextsong);
        prev.addEventListener('click', prevsong);