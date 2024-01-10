"use client";

import { Player, Thumbnail } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
import { FinalWrap } from "../remotion/FinalWrap";
import { WinRateScene } from "../remotion/WinRateScene";

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex max-w-4xl items-center justify-center">
          <Player
            component={WinRateScene}
            inputProps={{
              nickname: "Pura",
              matchesParticipated: 85,
              tournamentsParticipated: 43,
              matchesWon: 48,
              titlesWon: 6,
              finalsReached: 7,
              favoriteHost: "Batalha da La Prata",
              greatestRival: "Onec",
              weakestFoe: "James",
              strongestFoe: "Xavier",
            }}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              width: "100%",
            }}
            controls
            autoPlay
            loop
          />
          <Thumbnail
            component={FinalWrap}
            inputProps={{
              nickname: "Pura",
              matchesParticipated: 85,
              tournamentsParticipated: 43,
              matchesWon: 48,
              titlesWon: 6,
              finalsReached: 7,
              favoriteHost: "Batalha da La Prata",
              greatestRival: "Onec",
              weakestFoe: "James",
              strongestFoe: "Xavier",
            }}
            durationInFrames={DURATION_IN_FRAMES}
            frameToDisplay={0}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              width: "100%",
            }}
          />
        </div>
        <RenderControls text={text} setText={setText} inputProps={inputProps} />
      </div>
    </div>
  );
};

export default Home;
