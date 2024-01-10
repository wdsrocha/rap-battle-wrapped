import { z } from "zod";
import { AbsoluteFill } from "remotion";
import React from "react";

export const FinalWrapProps = z.object({
  nickname: z.string(),
  matchesParticipated: z.number(),
  tournamentsParticipated: z.number(),
  matchesWon: z.number(),
  titlesWon: z.number(),
  finalsReached: z.number(),
  favoriteHost: z.string(),
  greatestRival: z.string(),
  weakestFoe: z.string(),
  strongestFoe: z.string(),
});

export const FinalWrap = (props: z.infer<typeof FinalWrapProps>) => {
  const {
    nickname,
    matchesParticipated,
    tournamentsParticipated,
    matchesWon,
    titlesWon,
    finalsReached,
    favoriteHost,
    greatestRival,
    weakestFoe,
    strongestFoe,
  } = props;

  const winRate = ((100 * matchesWon) / matchesParticipated).toFixed(0);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-around bg-slate-950 text-5xl text-slate-50">
      <div className="col-span-3 flex flex-col items-center gap-y-4">
        <span className="text-4xl text-slate-400">
          Batalhas de Rima do Amazonas
        </span>
        <span className="text-6xl">Retrospectiva 2023</span>
      </div>
      <div className="mx-28 grid grid-cols-3 gap-x-32 gap-y-14">
        <div className="col-span-3">
          <div className="text-4xl text-slate-400">MC </div>
          <span className="text-8xl uppercase">{nickname}</span>
        </div>
        <Data label="Batalhas" value={matchesParticipated} />
        <Data label="Vitórias" value={matchesWon} />
        <Data label="Win Rate" value={`${winRate}%`} />
        <Data label="Edições" value={tournamentsParticipated} />
        <Data label="Folhinhas" value={titlesWon} />
        <Data label="Finais" value={finalsReached} className="mb-8" />
        <TextData label="Batalha Mais Frequentada 📌" value={favoriteHost} />
        <TextData label="Maior Rival ⚔" value={greatestRival} />
        <TextData label="Maior Freguês 🐤" value={weakestFoe} />
        <TextData label="Maior Carrasco ☠️" value={strongestFoe} />
      </div>
      <div className="font-mono uppercase text-slate-400">
        retrospectiva2023.batalha.org
      </div>
    </AbsoluteFill>
  );
};

const TextData = (props: {
  label: string;
  value: string;
  className?: string;
}) => {
  const { label, value, className } = props;
  return (
    <div
      className={`col-span-3 flex  flex-col items-start gap-y-2 ${className}`}
    >
      <span className="text-slate-400">{label}</span>
      <span className="text-7xl">{value}</span>
    </div>
  );
};

const Data = (props: {
  label: string;
  value: string | number;
  className?: string;
}) => {
  const { label, value, className } = props;
  return (
    <div className={`flex flex-col items-center gap-y-2 ${className}`}>
      <span className="text-8xl font-semibold">{value}</span>
      <div className="flex flex-col items-center gap-y-2 text-slate-400">
        <span>{label}</span>
      </div>
    </div>
  );
};
