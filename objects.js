var playlist = new Object ({Prince: "Purple Rain"})

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artist;
  return playlist;
}
