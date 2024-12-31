import { z } from "zod";
import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { Stats } from "../types/schema";
import { Display } from "./Display";
import { Number } from "./Number";

interface WithEmojiProps {
  symbol: string;
  children?: React.ReactNode;
}

const WithEmoji = ({ symbol, children }: WithEmojiProps) => (
  <div className="flex items-center gap-x-8">
    <span role="img">{symbol}</span>
    {children}
    {/* -ml-4 fixes char default spacing */}
    <span role="img" className="-ml-4">
      {symbol}
    </span>
  </div>
);

export const RivalScene = (props: z.infer<typeof Stats>) => {
  const { fps } = useVideoConfig();
  const { nickname, rival, rivalWins, rivalLosses } = props;

  const leftSidePad = Math.max(0, rival.length - nickname.length);
  const rightSidePad = Math.max(0, nickname.length - rival.length);

  return (
    <AbsoluteFill className="bg-slate-950 text-5xl text-slate-50">
      <Series>
        <Series.Sequence durationInFrames={fps}>
          <Display>
            <p className="text-center text-6xl">Dentre tantas batalhas</p>
          </Display>
        </Series.Sequence>
        <Series.Sequence durationInFrames={1.5 * fps}>
          <Display>
            <p className="text-center text-6xl">
              Teve um MC que lhe enfrentou diversas vezes
            </p>
          </Display>
        </Series.Sequence>
        <Series.Sequence durationInFrames={5 * fps}>
          <Display
            keyframes={[
              { delay: 0, from: 0, delta: 100 },
              { delay: 2 * fps, from: -120, delta: 80 },
            ]}
          >
            <div className="flex flex-col items-center gap-y-4 text-slate-400">
              <WithEmoji symbol="⚔️">
                <span>Seu Maior Rival</span>
              </WithEmoji>
              <p className="text-center text-8xl font-semibold text-slate-50">
                {rival}
              </p>
              <p className="text-center">
                {rivalWins + rivalLosses} confrontos diretos
              </p>
            </div>
          </Display>
          <Display keyframes={[{ delay: 2 * fps, from: 200, delta: 80 }]}>
            <div className="flex w-full items-center justify-center gap-x-8 font-mono text-slate-400">
              <div className="flex items-center gap-x-4">
                <span>
                  <span className="text-slate-950">
                    {Array(leftSidePad).fill("_").join("")}
                  </span>
                  {nickname}
                </span>
                <Number
                  className="text-8xl font-semibold text-slate-50"
                  value={rivalWins}
                />
              </div>
              <div className="font-semibold">X</div>
              <div className="flex items-center gap-x-4">
                <Number
                  className="text-8xl font-semibold text-slate-50"
                  value={rivalLosses}
                />
                <span>
                  {rival}
                  <span className="text-slate-950">
                    {Array(rightSidePad).fill("_").join("")}
                  </span>
                </span>
              </div>
            </div>
          </Display>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
