// components/EpisodeEmbedding.tsx
import React from 'react';

interface EpisodeEmbeddingProps {
  episodeURL: string;
}

const EpisodeEmbedding: React.FC<EpisodeEmbeddingProps> = ({ episodeURL }) => {
  return (
    <div className="relative pb-[56.29%] max-w-full block mx-auto overflow-hidden">
      <iframe
        src={episodeURL}
        frameBorder="0"
        allowFullScreen
        seamless
        allow="autoplay"
        className="absolute top-0 left-0 w-full h-full"
        referrerPolicy="no-referrer"
      ></iframe>
    </div>
  );
};

export default EpisodeEmbedding;
