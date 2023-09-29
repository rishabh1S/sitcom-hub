'use client'
import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { getRandomEpisodeNumber } from '../utils/randomEpisode';
import sitcomData from '../public/data/sitcoms.json';

const availableSitcoms = [
  "Friends",
  "The Office",
  "How I Met Your Mother",
  "That '70s Show",
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const sitcom = decodeURIComponent(params.sitcom as string);

  const handleRandomEpisodeClick = () => {
    const randomSitcom = availableSitcoms[Math.floor(Math.random() * availableSitcoms.length)];
    const randomEpisodeData = getRandomEpisodeNumber(sitcomData, randomSitcom);
    if (randomEpisodeData !== null) {
      router.push(`/${randomSitcom}/${randomEpisodeData.season}/${randomEpisodeData.episode}`);
    }
  };
  

  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref className="self-center text-2xl font-semibold whitespace-nowrap">
         Sitcom Hub
        </Link>
        {sitcom && (
          <button
            onClick={handleRandomEpisodeClick}
            className="text-white sm:text-lg hover:text-blue-500"
          >
            Random Episode
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
