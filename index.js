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
    //new songs
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Let's Get It On", artist: "Marvin Gaye", genre: "R&B" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Like a Prayer", artist: "Madonna", genre: "Pop" }
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

        // Creating container for playlist
        const playlistContainer = document.createElement("div");
        playlistContainer.className = "playlist";

        // Creating header for playlist
        const playlistHeader = document.createElement("h2");
        playlistHeader.className = "playlist-title";
        playlistHeader.textContent = `${guardian}'s Playlist`;
        playlistContainer.appendChild(playlistHeader);

        // Creating list for playlist songs
        const playlistList = document.createElement("ul");
        playlistList.className = "playlist-songs";
        playlist.forEach(song => {
            const listItem = document.createElement("li");
            listItem.className = "song";

            // Creatng a span for song title
            const songTitle = document.createElement("span");
            songTitle.className = "song-title";
            songTitle.textContent = song.split(" - ")[0]; // Extracting only the title
            listItem.appendChild(songTitle);

            // Adding artist information
            const songArtist = document.createElement("span");
            songArtist.textContent = " - " + song.split(" - ")[1];
            listItem.appendChild(songArtist);

            playlistList.appendChild(listItem);
        });

        // Appending list to container
        playlistContainer.appendChild(playlistList);

        // Appending container to main container
        container.appendChild(playlistContainer);
    }
}


// Calling generatePlaylist and displaying the playlists for each Guardian
const generatedPlaylists = generatePlaylist(guardians, songs);
displayPlaylists(generatedPlaylists);
