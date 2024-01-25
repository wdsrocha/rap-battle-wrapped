import { z } from "zod";
import { useVideoConfig } from "remotion";
import { CompositionProps } from "../../types/constants";
import React from "react";
import { WinRateScene } from "../WinRateScene";
import { TransitionSeries } from "@remotion/transitions";
import { IntroScene } from "../IntroScene";
import { TitlesScene } from "../TitlesScene";
import { Stats } from "../../types/schema";

const defaultProps: Stats = {
  nickname: "Big Xang",
  tournaments: 32,
  titles: 7,
  finals: 13,
};

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={4 * fps}>
        <IntroScene nickname="Pura" tournaments={23} titles={0} finals={0} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={8 * fps}>
        <WinRateScene
          nickname="Pura"
          matchesParticipated={10}
          matchesWon={1}
          tournamentsParticipated={9}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={6 * fps}>
        <TitlesScene {...defaultProps} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
