var library = {
    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },
    printPlaylists: function () {
        for (var key in this.playlists) {
            var playlist = this.playlists[key];
            console.log((playlist.id) + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
        }
    },
    printTracks: function () {
    for (var key in this.tracks) {
        var trackList = this.tracks[key];
        console.log((trackList.id) + ": " + trackList.name + " by " + trackList.artist + " (" + trackList.album + ")");
        }
    },
    printPlaylist: function (playlistId) {
        //print playlist info
        var trackId = this.playlists[playlistId].tracks;
        console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + trackId.length + " tracks")
    
        // console.log(library.playlists[playlistId].tracks)
        for (i = 0; i < trackId.length; i++) {
            //Loop through t01, t02
            var currentTrackId = trackId[i];
            console.log(this.tracks[currentTrackId].id + ": " + this.tracks[currentTrackId].name + " by " + this.tracks[currentTrackId].artist + " (" + this.tracks[currentTrackId].album + ")")
        }
    },
    addTrackToPlaylist: function (trackId, playlistId) {
        this.playlists[playlistId].tracks.push(trackId);
        // proof that new track has been added to playlist
        // console.log(library.playlists[playlistId].tracks)
    },
    addTrack: function (name, artist, album){
        // console.log(name);
        var newTrackId = uid();
    
        this.tracks[newTrackId] = {}
        this.tracks[newTrackId].id = newTrackId;
        this.tracks[newTrackId].name = name;
        this.tracks[newTrackId].artist = artist;
        this.tracks[newTrackId].album = album;
    },
    addPlaylist: function (name) {
        var newPlaylistId = uid();
    
        this.playlists[newPlaylistId] = {};
        this.playlists[newPlaylistId].id = newPlaylistId;
        this.playlists[newPlaylistId].name = name;
        this.playlists[newPlaylistId].tracks = [];
    }
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var breaker = "--------";
library.printPlaylists();
console.log(breaker);
library.printTracks();
console.log(breaker);
library.printPlaylist("p01");
console.log(breaker);
library.addTrackToPlaylist("t03", "p01");
console.log(breaker);
library.addTrack("Happy Birthday", "Public Domain", "Holiday Songs");
console.log(library.tracks);
console.log(breaker);
library.addPlaylist("New Playlist");
console.log(library.playlists);

// var addPlaylist = function (name) {
//     var newPlaylistId = uid();

//     library.playlists[newPlaylistId] = {};
//     library.playlists[newPlaylistId].id = newPlaylistId;
//     library.playlists[newPlaylistId].name = name;
//     library.playlists[newPlaylistId].tracks = [];


// }
// addPlaylist("New Playlist")
// console.log(library.playlists)