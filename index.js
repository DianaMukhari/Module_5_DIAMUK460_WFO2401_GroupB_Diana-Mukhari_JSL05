// JavaScript code goes here
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "lots os love", artist: "westlife", genre: "R&B" },
    { title: "tears of alion", artist: "Maryjane flogs", genre: "R&B" },
    { title: "live a little", artist: "oxford james", genre: "Rock" },
    { title: "sweet pie", artist: "brony", genre: "Pop" },
    { title: "Fool again", artist: "kelvin momo", genre: "Rock" }
    

];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock"
};

function generatePlaylist(guardians, songs) {
    const playlists = {};

    for (const guardian in guardians) {
        const genre = guardians[guardian];
        const playlist = songs
            .filter(song => song.genre === genre)
            .map(song => `${song.title} - ${song.artist}`);
        playlists[guardian] = playlist;
    }

    return playlists;
};
function displayPlaylists(playlists) {
    const container = document.getElementById("playlists");

    for (const guardian in playlists) {
        const playlist = playlists[guardian];

        // Create container for playlist
        const playlistContainer = document.createElement("div");
        playlistContainer.className = "playlist";

        // Create header for playlist
        const playlistHeader = document.createElement("h2");
        playlistHeader.className = "playlist-title";
        playlistHeader.textContent = `${guardian}'s Playlist`;
        playlistContainer.appendChild(playlistHeader);

        // Create list for playlist songs
        const playlistList = document.createElement("ul");
        playlistList.className = "playlist-songs";
        playlist.forEach(song => {
            const listItem = document.createElement("li");
            listItem.className = "song";
            listItem.innerHTML = `<span class="song-title">${song}</span>`;
            playlistList.appendChild(listItem);
        });

        // Append list to container
        playlistContainer.appendChild(playlistList);

        // Append container to main container
        container.appendChild(playlistContainer);
    }
}





// Call generatePlaylist and display the playlists for each Guardian
const generatedPlaylists = generatePlaylist(guardians, songs);
displayPlaylists(generatedPlaylists);
