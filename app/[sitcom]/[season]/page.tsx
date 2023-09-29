'use client'
import React from 'react';
import sitcomData  from '../../../public/data/sitcoms.json';
import { useParams } from 'next/navigation';
import { EpisodeList, SeasonHeader } from '@/components';



const Season: React.FC = () => {
  const params = useParams();
  const { sitcom, season } = params;
  const decodedSitcom = decodeURIComponent(sitcom as string);
  const selectedSitcom = sitcomData[decodedSitcom as keyof typeof sitcomData];
  const selectedSeason = selectedSitcom?.seasons.find(
    (s) => s.number === Number(season)
  );

  if (!selectedSitcom || !selectedSeason) {
    return <div>Season not found.</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-5xl w-full p-4 my-4">
        <div className='flex flex-col sm:flex-row justify-around items-center'>
          <SeasonHeader
            sitcom={decodedSitcom}
            seasonNumber={Number(season)}
            coverUrl={selectedSeason.cover}
          />
          <EpisodeList
            episodes={selectedSeason.episodes}
            sitcom={sitcom as string}
            season={season as string}
          />
        </div>
      </div>
    </div>
  );
};

export default Season;
