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

  let hidden = props.keyframes && props.keyframes[0].delay > frame;

  return hidden ? null : (
    <AbsoluteFill
      className={`px-4 ${props.className}`}
      style={{
        top: height / 2,
        transform: `translateY(${y}px)`,
        textWrap: "balance",
      }}
    >
      {props.children}
    </AbsoluteFill>
  );
}
