import { z } from "zod";
import { useVideoConfig } from "remotion";
import { CompositionProps } from "../../types/constants";
import React from "react";
import { WinRateScene } from "../WinRateScene";
import { TransitionSeries } from "@remotion/transitions";

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={3 * fps}>
        <WinRateScene
          matchesParticipated={10}
          matchesWon={1}
          tournamentsParticipated={9}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={3 * fps}>
        <WinRateScene
          matchesParticipated={10}
          matchesWon={1}
          tournamentsParticipated={9}
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
