// components/SeasonHeader.tsx
import React from "react";

interface SeasonHeaderProps {
  sitcom: string;
  seasonNumber: number;
  coverUrl: string;
}

const SeasonHeader: React.FC<SeasonHeaderProps> = ({
  sitcom,
  seasonNumber,
  coverUrl,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        {sitcom} - Season {seasonNumber}
      </h1>
      <img
        src={coverUrl}
        alt={`Season ${seasonNumber} Cover`}
        className="w-72"
      />
    </div>
  );
};

export default SeasonHeader;
