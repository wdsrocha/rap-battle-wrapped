import { z } from "zod";
import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { Stats } from "../types/schema";
import { Display } from "./Display";

export const IntroScene = (props: z.infer<typeof Stats>) => {
  const { fps } = useVideoConfig();
  const { nickname } = props;

  return (
    <AbsoluteFill className="bg-slate-950 text-5xl text-slate-50">
      <Series>
        <Series.Sequence durationInFrames={2 * fps}>
          <Display>
            <h1 className="text-center text-8xl font-semibold">{nickname}</h1>
          </Display>
        </Series.Sequence>
        <Series.Sequence durationInFrames={4 * fps}>
          <Display>
            <p className="text-center text-7xl">Veja seu ano como MC</p>
          </Display>
          <Display keyframes={[{ delay: fps, from: 80, delta: 80 }]}>
            <p className="text-center text-4xl text-slate-400">
              Com os dados coletados pelo{" "}
              <span className="text-slate-50">@am._news</span>
            </p>
          </Display>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
