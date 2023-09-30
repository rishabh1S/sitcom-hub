import React from 'react';
import Link from 'next/link';
import sitcomData from '../public/data/sitcoms.json';

type Sitcom = keyof typeof sitcomData;

const Home: React.FC = () => {
  const sitcomKeys = Object.keys(sitcomData) as Sitcom[];

  return (
  <main className="relative isolate overflow-hidden flex items-center justify-center">
    <div className="max-w-5xl w-full p-4 space-y-4 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8">Choose a Sitcom</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sitcomKeys.map((sitcomKey) => {
            const sitcom = sitcomData[sitcomKey];
            return (
              <Link key={sitcomKey} href={`/${sitcomKey}`} passHref className="block border border-gray-200 rounded hover:bg-gray-200 hover:text-gray-900 hover:scale-105 transition duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={sitcom.cover}
                    alt={`${sitcom.name} Cover`}
                    className="w-full h-48 object-cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center">{sitcom.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
  </main>
  );
};

export default Home;
