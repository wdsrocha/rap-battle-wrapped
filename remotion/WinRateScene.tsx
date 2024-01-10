import { z } from "zod";
import { AbsoluteFill } from "remotion";
import React from "react";

export const WinRateSceneProps = z.object({
  matchesParticipated: z.number(),
  tournamentsParticipated: z.number(),
  matchesWon: z.number(),
});

export const WinRateScene = (props: z.infer<typeof WinRateSceneProps>) => {
  //   const frame = useCurrentFrame();
  //   const { fps } = useVideoConfig();

  const { matchesParticipated, tournamentsParticipated, matchesWon } = props;

  const winRate = ((100 * matchesWon) / matchesParticipated).toFixed(2);

  const matchesLost = matchesParticipated - matchesWon;
  const lossRate = ((100 * matchesLost) / matchesParticipated).toFixed(2);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center gap-y-40 bg-slate-950 text-5xl text-slate-50">
      <div className="flex w-full items-center justify-evenly">
        <div className="flex flex-col items-center gap-y-4">
          <span className="text-8xl font-semibold">{matchesParticipated}</span>
          <div className="flex flex-col items-center gap-y-2 text-slate-400">
            <span>batalhas</span>
            <span>disputadas</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <span className="text-8xl font-semibold">
            {tournamentsParticipated}
          </span>
          <div className="flex flex-col items-center gap-y-2 text-slate-400">
            <span>edições</span>
            <span>participadas</span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-y-16">
        <div className="flex w-full items-center justify-evenly">
          <div className="items-left flex flex-col gap-y-4">
            <span className="text-7xl font-semibold text-green-500">
              👍 {winRate}%
            </span>
            <span className="text-4xl text-slate-400">
              {matchesWon} vitórias
            </span>
          </div>
          <div className="items-left flex flex-col gap-y-4">
            <span className="text-7xl font-semibold text-slate-400">
              👎 {lossRate}%
            </span>
            <span className="text-4xl text-slate-400">
              {matchesLost} derrotas
            </span>
          </div>
        </div>
        <div className="w-full max-w-3xl">
          <div className="h-2.5 w-full rounded-full bg-slate-700">
            <div
              className="h-2.5 rounded-full bg-green-500"
              style={{ width: `${winRate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
