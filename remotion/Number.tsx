import { useCurrentFrame, useVideoConfig } from "remotion";
import { interpolateDigits } from "./utils";

export const Number = ({
  value,
  precision = 0,
  className = "",
}: {
  value: number;
  precision?: number;
  className?: string;
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const animatedValue = interpolateDigits(frame, fps, value).toFixed(precision);

  return <span className={className}>{animatedValue}</span>;
};
