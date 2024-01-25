import { Composition, Still } from "remotion";
import { Main } from "./MyComp/Main";
import {
  defaultMyCompProps,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";
import "../styles/global.css";
import { WinRateScene, WinRateSceneProps } from "./WinRateScene";
import { FinalWrap, FinalWrapProps } from "./FinalWrap";
import { IntroScene } from "./IntroScene";
import { Stats } from "../types/schema";
import { TitlesScene } from "./TitlesScene";

const defaultProps: Stats = {
  nickname: "Big Xang",
  tournaments: 32,
  titles: 7,
  finals: 13,
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={20 * VIDEO_FPS}
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
        id="IntroScene"
        component={IntroScene}
        schema={Stats}
        durationInFrames={5 * VIDEO_FPS}
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        fps={VIDEO_FPS}
        defaultProps={defaultProps}
      />
      <Composition
        id="WinRateScene"
        component={WinRateScene}
        schema={WinRateSceneProps}
        durationInFrames={4 * VIDEO_FPS}
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        fps={VIDEO_FPS}
        defaultProps={{
          nickname: "Pura",
          matchesParticipated: 233,
          tournamentsParticipated: 95,
          matchesWon: 156,
        }}
      />
      <Composition
        id="TitlesScene"
        component={TitlesScene}
        schema={Stats}
        durationInFrames={6 * VIDEO_FPS}
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        fps={VIDEO_FPS}
        defaultProps={defaultProps}
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
