// components/EpisodeNavigation.tsx
import React from 'react';
import Link from 'next/link';

interface EpisodeNavigationProps {
  sitcom: string;
  season: string;
  prevEpisodeNumber: number | null;
  nextEpisodeNumber: number | null;
}

const EpisodeNavigation: React.FC<EpisodeNavigationProps> = ({
  sitcom,
  season,
  prevEpisodeNumber,
  nextEpisodeNumber,
}) => {
  return (
    <div className="flex justify-between">
      {prevEpisodeNumber && (
        <Link href={`/${sitcom}/${season}/${prevEpisodeNumber}`} passHref>
          <button className="block border border-gray-200 shadow-lg hover:bg-gray-200 hover:text-gray-900 transition duration-300 font-bold sm:py-2 sm:px-4 py-1 px-2 rounded">
            Previous Episode
          </button>
        </Link>
      )}

      {nextEpisodeNumber && (
        <Link href={`/${sitcom}/${season}/${nextEpisodeNumber}`} passHref>
          <button className="block border border-gray-200 shadow-lg hover:bg-gray-200 hover:text-gray-900 transition duration-300 font-bold sm:py-2 sm:px-4 py-1 px-2 rounded">
            Next Episode
          </button>
        </Link>
      )}
    </div>
  );
};

export default EpisodeNavigation;
