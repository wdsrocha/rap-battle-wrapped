import { Easing, interpolate, spring } from "remotion";

const DIGITS_BEZIER = Easing.bezier(0.33, 1, 0.68, 1);

export const interpolateDigits = (frame: number, fps: number, goal: number) =>
  interpolate(frame, [0, fps], [0, goal], {
    easing: DIGITS_BEZIER,
    extrapolateRight: "clamp",
  });

export interface Keyframe {
  delay: number;
  from: number;
  delta: number;
}

export const interpolateOver = (
  frame: number,
  fps: number,
  keyframes: Keyframe[],
) => {
  for (let i = 0; i < keyframes.length; i++) {
    if (i === keyframes.length - 1 || frame < keyframes[i + 1].delay) {
      return interpolate(
        spring({
          frame: frame - keyframes[i].delay,
          fps,
          config: {
            damping: 200,
          },
        }),
        [0, 1],
        [keyframes[i].from, keyframes[i].from - keyframes[i].delta],
      );
    }
  }
};

export const move = (frame: number, fps: number, bumps: number[]) => {
  for (let i = 0; i < bumps.length; i++) {
    if (i === bumps.length - 1 || frame < bumps[i + 1]) {
      return interpolate(
        spring({
          frame: frame - bumps[i],
          fps,
          config: {
            damping: 200,
          },
        }),
        [0, 1],
        [-100 * i, -200 * i - 100],
      );
    }
  }
};
