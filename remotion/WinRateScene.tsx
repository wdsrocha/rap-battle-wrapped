import { z } from "zod";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Number } from "./Number";
import React from "react";
import { move } from "./utils";

export const WinRateSceneProps = z.object({
  nickname: z.string(),
  matchesParticipated: z.number(),
  tournamentsParticipated: z.number(),
  matchesWon: z.number(),
});

const WinRateSequenceProps = z.object({
  totalMatches: z.number(),
  wonMatches: z.number(),
});

const WinRate = (props: z.infer<typeof WinRateSequenceProps>) => {
  const { height, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const y = interpolate(
    spring({
      frame,
      fps,
      config: {
        damping: 200,
      },
    }),
    [0, 1],
    [250, 50],
  );

  const winRate = (100 * props.wonMatches) / props.totalMatches;

  const lostMatches = props.totalMatches - props.wonMatches;
  const lossRate = (100 * lostMatches) / props.totalMatches;

  const animatedWinRate = interpolate(
    spring({
      frame,
      fps,
      config: {
        damping: 200,
      },
    }),
    [0, 1],
    [0, winRate],
    {
      easing: Easing.inOut(Easing.ease),
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        top: height / 2,
        transform: `translateY(${y}px)`,
      }}
    >
      <div className="flex w-full flex-col items-center gap-y-16">
        <div className="flex w-full items-center justify-evenly">
          <div className="items-left flex flex-col gap-y-4">
            <span className="text-7xl font-semibold text-green-500">
              👍 <Number value={winRate} precision={2} />%
            </span>
            <span className="text-4xl text-slate-400">
              {props.wonMatches} vitórias
            </span>
          </div>
          <div className="items-left flex flex-col gap-y-4">
            <span className="text-7xl font-semibold text-slate-400">
              👎 <Number value={lossRate} precision={2} />%
            </span>
            <span className="text-4xl text-slate-400">
              {lostMatches} derrotas
            </span>
          </div>
        </div>
        <div className="w-full max-w-3xl">
          <div className="h-2.5 w-full rounded-full bg-slate-700">
            <div
              className="h-2.5 rounded-full bg-green-500"
              style={{ width: `${animatedWinRate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const WinRateScene = (props: z.infer<typeof WinRateSceneProps>) => {
  const { fps, height } = useVideoConfig();
  const frame = useCurrentFrame();

  const SECOND_SEQUENCE_START = 2 * fps;

  const { matchesParticipated, matchesWon } = props;

  const y = move(frame, fps, [0, SECOND_SEQUENCE_START]);

  return (
    <AbsoluteFill className="w-full bg-slate-950 text-5xl text-slate-50">
      <Sequence>
        <AbsoluteFill
          style={{
            top: height / 2,
            transform: `translateY(${y}px)`,
          }}
        >
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-slate-400">você batalhou</span>
              <span className="text-8xl font-semibold">
                <Number value={matchesParticipated} />
              </span>
              <span className="text-slate-400">vezes</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={SECOND_SEQUENCE_START}>
        <WinRate
          totalMatches={props.matchesParticipated}
          wonMatches={matchesWon}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
