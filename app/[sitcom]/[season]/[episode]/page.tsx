"use client";
import React from "react";
import { useParams } from "next/navigation";
import sitcomData from "../../../../public/data/sitcoms.json";
import Link from "next/link";
import { EpisodeEmbedding, EpisodeNavigation } from "@/components";

const Episode: React.FC = () => {
  const params = useParams();
  const { sitcom, season, episode } = params;
  const decodedSitcom = decodeURIComponent(sitcom as string);
  const selectedSitcom = sitcomData[decodedSitcom as keyof typeof sitcomData];
  const selectedSeason = selectedSitcom?.seasons.find(
    (s) => s.number === Number(season)
  );
  const selectedEpisode = selectedSeason?.episodes.find(
    (e) => e.number === Number(episode)
  );

  if (!selectedSitcom || !selectedSeason || !selectedEpisode) {
    return <div>Episode not found.</div>;
  }

  const imdbID = selectedSitcom.imdbID;
  const episodeURL = `https://autoembed.to/tv/imdb/${imdbID}-${season}-${episode}`;

  // Find the index of the current episode in the season
  const episodeIndex = selectedSeason.episodes.findIndex(
    (e) => e.number === Number(episode)
  );

  // Calculate the previous and next episode numbers
  const prevEpisodeNumber =
    episodeIndex > 0 ? selectedSeason.episodes[episodeIndex - 1].number : null;
  const nextEpisodeNumber =
    episodeIndex < selectedSeason.episodes.length - 1
      ? selectedSeason.episodes[episodeIndex + 1].number
      : null;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full p-4 space-y-6">
        <EpisodeEmbedding episodeURL={episodeURL} />
        <h1 className="sm:text-2xl text-lg font-bold text-center">
          {selectedSitcom.name} - Season {season}
          <p>
            Episode {episode}: {selectedEpisode.title}
          </p>
        </h1>
        <EpisodeNavigation
          sitcom={sitcom as string}
          season={season as string}
          prevEpisodeNumber={prevEpisodeNumber}
          nextEpisodeNumber={nextEpisodeNumber}
        />
      </div>
    </div>
  );
};

export default Episode;
