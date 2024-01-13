"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React from "react";
import {
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { WinRateScene } from "../../remotion/WinRateScene";
import { useParams } from "next/navigation";

const Home: NextPage = () => {
  const { nickname }: { nickname: string } = useParams();
  console.log({ nickname });
  return (
    <div className="flex h-full items-center justify-center bg-black shadow-xl">
      <Player
        className="h-full"
        component={WinRateScene}
        inputProps={{
          nickname,
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
    </div>
  );
};

export default Home;
