var playlist = new Object ({Prince: "Purple Rain"})

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist;
  return playlist;
}
