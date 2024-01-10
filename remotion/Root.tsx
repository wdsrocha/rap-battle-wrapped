import { Composition, Still } from "remotion";
import { Main } from "./MyComp/Main";
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";
import "../styles/global.css";
import { WinRateScene, WinRateSceneProps } from "./WinRateScene";
import { FinalWrap, FinalWrapProps } from "./FinalWrap";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id="NextLogo"
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />
      <Composition
        id="WinRateScene"
        component={WinRateScene}
        schema={WinRateSceneProps}
        durationInFrames={2 * VIDEO_FPS}
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        fps={VIDEO_FPS}
        defaultProps={{
          matchesParticipated: 233,
          tournamentsParticipated: 95,
          matchesWon: 156,
        }}
      />
      <Still
        id="FinalWrap"
        component={FinalWrap}
        schema={FinalWrapProps}
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        defaultProps={{
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
      />
    </>
  );
};
