import { z } from "zod";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { Stats } from "../types/schema";
import { Display } from "./Display";
import { Number } from "./Number";
import { Keyframe } from "./utils";

export const TitlesScene = (props: z.infer<typeof Stats>) => {
  const { fps } = useVideoConfig();
  const { tournaments, titles, finals } = props;

  const kf: Keyframe[][] = [
    [
      { delay: 0, from: 0, delta: 100 },
      { delay: 2 * fps, from: -100, delta: 200 },
      { delay: 4 * fps, from: -300, delta: 150 },
    ],
    [
      { delay: 0, from: 250, delta: 200 },
      { delay: 2 * fps, from: 50, delta: 150 },
    ],
    [{ delay: 0, from: 450, delta: 150 }],
  ];

  return (
    <AbsoluteFill className="bg-slate-950 text-5xl text-slate-50">
      <Sequence>
        <Display keyframes={kf[0]}>
          <div className="flex flex-col items-center gap-y-4">
            <span className="text-slate-400">colou em</span>
            <Number className="text-8xl font-semibold" value={tournaments} />
            <span className="text-slate-400">edições</span>
          </div>
        </Display>
      </Sequence>
      <Sequence from={2 * fps}>
        <Display keyframes={kf[1]}>
          <div className="flex w-full items-center justify-evenly">
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-slate-400">conquistou</span>
              <Number className="text-8xl font-semibold" value={titles} />
              <span className="text-slate-400">folhinhas</span>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-slate-400">chegou em</span>
              <Number className="text-8xl font-semibold" value={finals} />
              <span className="text-slate-400">finais</span>
            </div>
          </div>
        </Display>
      </Sequence>
      <Sequence from={4 * fps}>
        <Display keyframes={kf[2]}>
          <span className="text-center text-8xl">🏆🏆🏆</span>
        </Display>
      </Sequence>
    </AbsoluteFill>
  );
};
