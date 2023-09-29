export function getRandomEpisodeNumber(
  sitcomData: any,
  sitcomName: string
): { season: number; episode: number } | null {
  const selectedSitcom = sitcomData[sitcomName];
  if (!selectedSitcom) {
    return null;
  }

  const seasons = selectedSitcom.seasons;
  if (!seasons || seasons.length === 0) {
    return null;
  }

  const randomSeasonNumber = Math.floor(Math.random() * 8) + 1; // Random season from 1 to 8
  const randomSeason = seasons.find(
    (season: { number: number }) => season.number === randomSeasonNumber
  );

  if (
    !randomSeason ||
    !randomSeason.episodes ||
    randomSeason.episodes.length === 0
  ) {
    return null;
  }

  const randomEpisodeNumber = Math.floor(Math.random() * 20) + 1; // Random episode from 1 to 20
  const randomEpisode = randomSeason.episodes.find(
    (episode: { number: number }) => episode.number === randomEpisodeNumber
  );

  if (!randomEpisode) {
    return null;
  }

  return { season: randomSeasonNumber, episode: randomEpisodeNumber };
}
