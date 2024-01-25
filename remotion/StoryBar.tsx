import { z } from "zod";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

// force current <= total
const StoryBarProps = z.object({
  current: z.number().nonnegative(),
  total: z.number().nonnegative(),
});

export function StoryBar(props: z.infer<typeof StoryBarProps>) {
  const { current, total } = props;
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  if (current >= total)
    throw new Error(
      `Current story index must be lesser than total number of stories.
      current: ${current}, total: ${total}`,
    );

  const seen = current; // works bc current is 0-indexed
  const unseen = total - (current + 1);

  return (
    <AbsoluteFill>
      <div className="mx-4 mt-4 flex gap-x-4">
        {Array.from(new Array(seen)).map((_, i) => (
          <div key={i} className="h-2.5 w-full rounded-full bg-slate-400" />
        ))}
        <div className="h-2.5 w-full rounded-full bg-slate-700">
          <div
            className="h-2.5 rounded-full bg-slate-400"
            style={{ width: `${(100 * frame) / durationInFrames}%` }}
          ></div>
        </div>
        {Array.from(new Array(unseen)).map((_, i) => (
          <div key={i} className="h-2.5 w-full rounded-full bg-slate-700" />
        ))}
      </div>
    </AbsoluteFill>
  );
}
