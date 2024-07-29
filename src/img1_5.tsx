import {
    AbsoluteFill, staticFile, Sequence, Img, Audio
} from "remotion";
import {z} from "zod";

export const myCompSchema = z.object({
    song: z.string()
});

const slideLength = 4.5

export const Img1_5: React.FC<z.infer<typeof myCompSchema>> = (schema) => {

// A <AbsoluteFill> is just a absolutely positioned <div>!
    return (
        <AbsoluteFill style={{backgroundColor: "black"}}>
            <Audio src={staticFile(schema.song)}></Audio>
            <Sequence durationInFrames={30 * slideLength}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "34px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '34px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        POV: You are at the Olympics
                        <br/>
                        <br/>
                        Which French food do you eat first?
                    </p>
                    <Img src={staticFile("image0.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        zIndex: '0',
                        width: "540px"
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * slideLength} durationInFrames={30 * slideLength}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "40px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '34px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        1
                    </p>
                    <Img src={staticFile("image1.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        zIndex: '0',
                        width: "540px"
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * slideLength * 2} durationInFrames={30 * slideLength}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "40px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '34px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        2
                    </p>
                    <Img src={staticFile("image2.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        zIndex: '0',
                        width: "540px"
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * slideLength * 3} durationInFrames={30 * slideLength}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "40px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '34px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        3
                    </p>
                    <Img src={staticFile("image3.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        zIndex: '0',
                        width: "540px"
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * slideLength * 4} durationInFrames={30 * slideLength}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "40px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '34px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        4
                    </p>
                    <Img src={staticFile("image4.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        zIndex: '0',
                        width: "540px"
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * slideLength * 5} durationInFrames={30 * slideLength}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "40px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '34px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        5
                    </p>
                    <Img src={staticFile("image5.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        zIndex: '0',
                        width: "540px"
                    }}/>
                </div>
            </Sequence>
        </AbsoluteFill>
    );
};