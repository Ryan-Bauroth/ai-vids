import { Composition } from "remotion";
import { Img1_5, myCompSchema } from "./img1_5";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="vid"
        component={Img1_5}
        durationInFrames={18 * 30}
        fps={30}
        width={540}
        height={960}
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />
    </>
  );
};
