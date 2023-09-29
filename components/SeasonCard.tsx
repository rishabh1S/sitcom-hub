// components/SeasonCard.tsx
import React from 'react';
import Link from 'next/link';

interface SeasonCardProps {
  season: {
    number: number;
    cover: string;
  };
  sitcom: string;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ season, sitcom }) => {
  return (
    <Link
      href={`/${sitcom}/${season.number}`}
      passHref
      className="block border border-gray-800 rounded shadow hover:bg-gray-800 transition duration-300 relative group hover:scale-105"
    >
      <div className="relative overflow-hidden aspect-w-4 aspect-h-3">
        <img
          src={season.cover}
          alt={`Season ${season.number} Cover`}
          className="object-cover w-full h-full group-hover:opacity-70"
        />
      </div>
      <div className="absolute top-2 left-2 bg-black bg-opacity-60 p-1 rounded">
        <span className="font-bold text-white">Season {season.number}</span>
      </div>
    </Link>
  );
};

export default SeasonCard;
