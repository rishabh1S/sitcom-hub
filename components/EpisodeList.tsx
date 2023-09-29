// components/EpisodeList.tsx
import React from 'react';
import Link from 'next/link';

interface EpisodeListProps {
  episodes: { number: number; title: string }[];
  sitcom: string;
  season: string;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, sitcom, season }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {episodes.map((episode) => (
        <Link
          key={episode.number}
          href={`/${sitcom}/${season}/${episode.number}`}
          className="block p-4 border border-gray-200 rounded shadow hover:bg-gray-200 hover:text-gray-900 transition duration-300"
        >
          Episode {episode.number}
        </Link>
      ))}
    </div>
  );
};

export default EpisodeList;
