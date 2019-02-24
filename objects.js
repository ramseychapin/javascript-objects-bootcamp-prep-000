var playlist = new Object ({Prince: "Purple Rain"})

function updatePlaylist (playlist, artist, song) {
  playlist[playlist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist;
  return playlist;
}
