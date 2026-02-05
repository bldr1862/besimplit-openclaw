import {Composition} from "remotion";
import {MyComposition} from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BesimplitIntro"
        component={MyComposition}
        durationInFrames={480} // 16s a 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
