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
       }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
       for (var key in library.playlists) {
              var playlist = library.playlists[key];
              console.log((playlist.id) + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
       }
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
       for (var key in library.tracks) {
              var trackList = library.tracks[key];
              console.log((trackList.id) + ": " + trackList.name + " by " + trackList.artist + " (" + trackList.album + ")");
       }
}
// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
       //print playlist info
       var trackId = library.playlists[playlistId].tracks;
       console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + trackId.length + " tracks")

       // console.log(library.playlists[playlistId].tracks)
       for (i = 0; i < trackId.length; i++) {
              //Loop through t01, t02
              var currentTrackId = trackId[i];
              console.log(library.tracks[currentTrackId].id + ": " + library.tracks[currentTrackId].name + " by " + library.tracks[currentTrackId].artist + " (" + library.tracks[currentTrackId].album + ")")
       }
}
// printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId);
       // proof that new track has been added to playlist
       // console.log(library.playlists[playlistId].tracks)
}

addTrackToPlaylist("t03", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
// console.log(name);
var newTrackId = uid();

library.tracks[newTrackId] = {}
library.tracks[newTrackId].id = newTrackId;
library.tracks[newTrackId].name = name;
library.tracks[newTrackId].artist = artist;
library.tracks[newTrackId].album = album;

}
addTrack("Happy Birthday", "Public Domain", "Holiday Songs")
// console.log(library.tracks)

// adds a playlist to the library

var addPlaylist = function (name) {
       var newPlaylistId = uid();

       library.playlists[newPlaylistId] = {};
       library.playlists[newPlaylistId].id = newPlaylistId;
       library.playlists[newPlaylistId].name = name;
       library.playlists[newPlaylistId].tracks = [];


}
addPlaylist("New Playlist")
console.log(library.playlists)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {

}