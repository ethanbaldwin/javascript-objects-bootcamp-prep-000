var playlist = {artist1: "song1"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = "song";
  return playlist;
}

function removeFromPlaylist(playlist, artist1) {
  delete playlist.artist1;
  return playlist;
}