'use client'
import React from 'react';
import sitcomData from '../../public/data/sitcoms.json';
import { useParams } from 'next/navigation';
import { SeasonCard } from '@/components';

const Sitcom: React.FC = () => {
  const params = useParams();
  const sitcom = decodeURIComponent(params.sitcom as string);
  const selectedSitcom = sitcomData[sitcom as keyof typeof sitcomData];

  if (!selectedSitcom) {
    return <div>Sitcom not found.</div>;
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{selectedSitcom.name}</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {selectedSitcom.seasons.map((season) => (
            <SeasonCard key={season.number} season={season} sitcom={sitcom} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitcom;
