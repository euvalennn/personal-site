export async function getLastFm() {
  const url =
    "https://lastfm.nkko.workers.dev/?method=user.getRecentTracks&user=euvalennn";
  const res = await fetch(url);
  const data = await res.json();
  return {
    name: data.recenttracks.track[0].name,
    artist: data.recenttracks.track[0].artist["#text"],
    cover_art: data.recenttracks.track[0].image[2]["#text"],
    album: data.recenttracks.track[0].album["#text"],
  };
}
