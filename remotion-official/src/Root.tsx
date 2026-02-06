import {Composition} from "remotion";
import {MyComposition, BedieselRoboDesorden, BedieselOrdenVisibilidad} from "./Composition";

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

      <Composition
        id="BedieselRoboDesorden"
        component={BedieselRoboDesorden}
        durationInFrames={450} // 5 screens * 3s
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="BedieselOrdenVisibilidad"
        component={BedieselOrdenVisibilidad}
        durationInFrames={450} // 5 screens * 3s
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
