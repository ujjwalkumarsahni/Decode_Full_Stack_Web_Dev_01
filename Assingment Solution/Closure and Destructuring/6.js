function createPlaylist(playlistName) {
    let songs = []; 

    return {
        addSong: function (songName, artist) {
            songs.push({ songName, artist });
            console.log(`"${songName}" by ${artist} added to "${playlistName}" playlist.`);
        },
        listSongs: function () {
            if (songs.length === 0) {
                console.log(`"${playlistName}" playlist is empty.`);
            } else {
                console.log(`Songs in "${playlistName}" playlist:`);
                songs.forEach((song, index) => {
                    console.log(`${index + 1}. "${song.songName}" by ${song.artist}`);
                });
            }
        }
    };
}

// Create a playlist instance
const myPlaylist = createPlaylist("Chill Vibes");

myPlaylist.addSong("Blinding Lights", "The Weeknd");
myPlaylist.addSong("Shape of You", "Ed Sheeran");

myPlaylist.listSongs();
