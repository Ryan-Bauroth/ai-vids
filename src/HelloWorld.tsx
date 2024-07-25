import {
    AbsoluteFill, staticFile, Sequence, Img, Audio
} from "remotion";
import {z} from "zod";
import {zColor} from "@remotion/zod-types";

export const myCompSchema = z.object({
    titleText: z.string(),
    titleColor: zColor(),
    logoColor1: zColor(),
    logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = () => {

// A <AbsoluteFill> is just a absolutely positioned <div>!
    return (
        <AbsoluteFill style={{backgroundColor: "black"}}>
            <Audio src={staticFile("let_go.mp3")}></Audio>
            <Sequence durationInFrames={30 * 3}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "32px",
                        fontFamily: 'Trebuchet MS',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '17px',
                        top: '100px'
                    })}>
                        Which do you want in your backyard?
                    </p>
                    <Img src={staticFile("image0.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '57%',
                        transform: 'translate(0%, -50%)',
                        width: '540px',
                        height: '540px'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 3} durationInFrames={30 * 3}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "48px",
                        fontFamily: 'Trebuchet MS',
                        fontWeight: 'bold',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '3px',
                        top: '75px'
                    })}>
                        1
                    </p>
                    <Img src={staticFile("image1.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '540px',
                        height: '540px'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 3 * 2} durationInFrames={30 * 3}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "48px",
                        fontFamily: 'Trebuchet MS',
                        fontWeight: 'bold',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '3px',
                        top: '75px'
                    })}>
                        2
                    </p>
                    <Img src={staticFile("image2.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '540px',
                        height: '540px'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 3 * 3} durationInFrames={30 * 3}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "48px",
                        fontFamily: 'Trebuchet MS',
                        fontWeight: 'bold',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '3px',
                        top: '75px'
                    })}>
                        3
                    </p>
                    <Img src={staticFile("image3.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '540px',
                        height: '540px'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 3 * 4} durationInFrames={30 * 3}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "48px",
                        fontFamily: 'Trebuchet MS',
                        fontWeight: 'bold',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '3px',
                        top: '75px'
                    })}>
                        4
                    </p>
                    <Img src={staticFile("image4.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '540px',
                        height: '540px'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 3 * 5} durationInFrames={30 * 3}>
                <div style={{position: 'relative'}}>
                    <p style={({
                        color: "white",
                        fontSize: "48px",
                        fontFamily: 'Trebuchet MS',
                        fontWeight: 'bold',
                        position: "absolute",
                        width: '540px',
                        height: '540px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '3px',
                        top: '75px'
                    })}>
                        5
                    </p>
                    <Img src={staticFile("image5.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '540px',
                        height: '540px'
                    }}/>
                </div>
            </Sequence>
        </AbsoluteFill>
    );
};
