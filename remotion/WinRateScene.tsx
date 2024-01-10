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
import React from "react";

export const WinRateSceneProps = z.object({
  matchesParticipated: z.number(),
  tournamentsParticipated: z.number(),
  matchesWon: z.number(),
});

const WinRateSequenceProps = z.object({
  from: z.number(),
  totalMatches: z.number(),
  wonMatches: z.number(),
});

const DIGITS_BEZIER = Easing.bezier(0.33, 1, 0.68, 1);

const interpolateDigits = (frame: number, fps: number, goal: number) =>
  interpolate(frame, [0, 1 * fps], [0, goal], {
    easing: DIGITS_BEZIER,
    extrapolateRight: "clamp",
  });

const WinRateSequence = (props: z.infer<typeof WinRateSequenceProps>) => {
  const { height, fps } = useVideoConfig();
  const frame = useCurrentFrame() - props.from;

  const anotherContentTranslation = interpolate(
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

  const wr = interpolateDigits(frame, fps, winRate).toFixed(2);
  const lr = interpolateDigits(frame, fps, lossRate).toFixed(2);

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
    <Sequence from={props.from}>
      <AbsoluteFill
        style={{
          top: height / 2,
          transform: `translateY(${anotherContentTranslation}px)`,
        }}
      >
        <div className="flex w-full flex-col items-center gap-y-16">
          <div className="flex w-full items-center justify-evenly">
            <div className="items-left flex flex-col gap-y-4">
              <span className="text-7xl font-semibold text-green-500">
                👍 {wr}%
              </span>
              <span className="text-4xl text-slate-400">
                {props.wonMatches} vitórias
              </span>
            </div>
            <div className="items-left flex flex-col gap-y-4">
              <span className="text-7xl font-semibold text-slate-400">
                👎 {lr}%
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
    </Sequence>
  );
};

export const WinRateScene = (props: z.infer<typeof WinRateSceneProps>) => {
  const { fps, height } = useVideoConfig();
  const frame = useCurrentFrame();

  const SECOND_SEQUENCE_START = 1 * fps;

  const { matchesParticipated, tournamentsParticipated, matchesWon } = props;

  const animatedMatchesParticipated = interpolateDigits(
    frame,
    fps,
    matchesParticipated,
  ).toFixed(0);
  const animatedTournamentsParticipated = interpolateDigits(
    frame,
    fps,
    tournamentsParticipated,
  ).toFixed(0);

  const springAnimation = (delay: number) =>
    spring({
      frame: frame - delay,
      fps,
      config: {
        damping: 200,
      },
    });

  const contentTranslation =
    frame < SECOND_SEQUENCE_START
      ? interpolate(springAnimation(0), [0, 1], [0, -100])
      : interpolate(
          springAnimation(SECOND_SEQUENCE_START),
          [0, 1],
          [-100, -300],
        );

  return (
    <AbsoluteFill className="bg-slate-950 text-5xl text-slate-50">
      <Sequence>
        <AbsoluteFill
          style={{
            top: height / 2,
            transform: `translateY(${contentTranslation}px)`,
          }}
        >
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-8xl font-semibold">
                {animatedMatchesParticipated}
              </span>
              <div className="flex flex-col items-center gap-y-2 text-slate-400">
                <span>batalhas</span>
                <span>disputadas</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-8xl font-semibold">
                {animatedTournamentsParticipated}
              </span>
              <div className="flex flex-col items-center gap-y-2 text-slate-400">
                <span>edições</span>
                <span>participadas</span>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      <WinRateSequence
        from={SECOND_SEQUENCE_START}
        totalMatches={props.matchesParticipated}
        wonMatches={matchesWon}
      />
    </AbsoluteFill>
  );
};
