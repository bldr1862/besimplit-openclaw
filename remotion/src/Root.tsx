import {Composition} from 'remotion';
import {BesimplitIntro} from './BesimplitIntro';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BesimplitIntro"
        component={BesimplitIntro}
        durationInFrames={1800} // 60s a 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
