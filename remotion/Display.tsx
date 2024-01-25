import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ReactNode } from "react";
import { interpolateOver, Keyframe } from "./utils";

interface DisplayProps {
  className?: string;
  children?: ReactNode;
  keyframes?: Keyframe[];
}
export function Display(props: DisplayProps) {
  const { fps, height } = useVideoConfig();
  const frame = useCurrentFrame();

  const y = interpolateOver(
    frame,
    fps,
    props.keyframes || [{ delay: 0, from: 0, delta: 100 }],
  );

  // const y = interpolate(
  //   spring({
  //     frame,
  //     fps,
  //     config: {
  //       damping: 200,
  //     },
  //   }),
  //   [0, 1],
  //   [0, -100],
  // );
  return (
    <AbsoluteFill
      className={props.className}
      style={{
        top: height / 2,
        transform: `translateY(${y}px)`,
      }}
    >
      {props.children}
    </AbsoluteFill>
  );
}
