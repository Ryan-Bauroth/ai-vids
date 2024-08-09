import { Composition } from "remotion";
import { Img1_5, myCompSchema } from "./img1_5";
import {birthmonths} from "./birthmonths";
import {Vid_Img1_5} from "./vid_img_1_5";

// Each <Composition> is an entry in the sidebar!

//birthmonths  = 600 frames
const components = [Img1_5, birthmonths, Vid_Img1_5];
const frames = [30 * 4 * 6, 600, 30 * 3 * 6]
const songs = ["comfort_chain.mp3", "backrooms.mp3", "IGOTMAD.mp3", "let_go.mp3", "tek_it.mp3", "great_fairy_fountain.mp3", "dark_world.mp3"]

let usedComponent = 0
let usedSong = 4

export const RemotionRoot: React.FC = () => {

  return (
    <>
      <Composition
        id="vid"
        component={components[usedComponent]}
        durationInFrames={frames[usedComponent]}
        fps={30}
        width={540}
        height={960}
        schema={myCompSchema}
        defaultProps={{
            song: songs[usedSong]
        }}
      />
    </>
  );
};
