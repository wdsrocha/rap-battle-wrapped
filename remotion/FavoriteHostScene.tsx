import { z } from "zod";
import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { Stats } from "../types/schema";
import { Display } from "./Display";

export const FavoriteHostScene = (props: z.infer<typeof Stats>) => {
  const { fps } = useVideoConfig();
  const { favoriteHost, favoriteHostFreq } = props;

  return (
    <AbsoluteFill className="bg-slate-950 text-5xl text-slate-50">
      <Series>
        <Series.Sequence durationInFrames={2 * fps}>
          <Display>
            <p className="text-center text-6xl">
              Teve uma batalha que você não se cansou de ir...
            </p>
          </Display>
        </Series.Sequence>
        <Series.Sequence durationInFrames={2 * fps}>
          <Display>
            <div className="flex flex-col items-center gap-y-4 text-slate-400">
              <span>Sua batalha mais frequentada foi</span>
              <p className="text-center text-8xl font-semibold text-slate-50">
                {favoriteHost}
              </p>
              <p>
                <span>{favoriteHostFreq} </span>
                {favoriteHostFreq !== 1 ? (
                  <span>vezes!</span>
                ) : (
                  <span>vez!</span>
                )}
              </p>
            </div>
          </Display>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
