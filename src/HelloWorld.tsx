import {
  AbsoluteFill, staticFile, Video, Audio
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor1: zColor(),
  logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText: propOne,
  titleColor: propTwo,
  logoColor1,
  logoColor2,
}) => {

// A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
      <AbsoluteFill style={{backgroundColor: "black"}}>
        <Audio src={staticFile("song.mp3")} />
        <p style={({backgroundColor: "black", color: "white", fontSize: "48px"})}>INSERT CAPTION HERE</p>
        <Video src={staticFile("vid.mp4")}/>
      </AbsoluteFill>
  );
};
