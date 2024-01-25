import { z } from "zod";
import { CompositionProps } from "./constants";

export const RenderRequest = z.object({
  id: z.string(),
  inputProps: CompositionProps,
});

export const ProgressRequest = z.object({
  bucketName: z.string(),
  id: z.string(),
});

export type ProgressResponse =
  | {
      type: "error";
      message: string;
    }
  | {
      type: "progress";
      progress: number;
    }
  | {
      type: "done";
      url: string;
      size: number;
    };

export const Stats = z.object({
  nickname: z.string(),
  tournaments: z.number().nonnegative(),
  titles: z.number().nonnegative(),
  finals: z.number().nonnegative(),
});

export type Stats = z.infer<typeof Stats>;
