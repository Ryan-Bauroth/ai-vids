import {
    AbsoluteFill, staticFile, Sequence, Img, Audio
} from "remotion";
import {z} from "zod";

export const myCompSchema = z.object({
    song: z.string()
});

export const birthmonths: React.FC<z.infer<typeof myCompSchema>> = (schema) => {

// A <AbsoluteFill> is just a absolutely positioned <div>!
    return (
        <AbsoluteFill style={{backgroundColor: "black"}}>
            <Audio src={staticFile(schema.song)}></Audio>
            <Sequence durationInFrames={30 * 2}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        Your birth month
                        <br/>
                        =
                        <br/>
                        Your abandoned location
                    </p>
                    <Img src={staticFile("image0.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-12%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0',
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 2} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        January
                    </p>
                    <Img src={staticFile("image1.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 3.5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        February
                    </p>
                    <Img src={staticFile("image2.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-12%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        March
                    </p>
                    <Img src={staticFile("image3.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-12%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 6.5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        April
                    </p>
                    <Img src={staticFile("image4.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-12%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 8} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        May
                    </p>
                    <Img src={staticFile("image5.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-12%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 9.5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        June
                    </p>
                    <Img src={staticFile("image6.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-12%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 11} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        July
                    </p>
                    <Img src={staticFile("image7.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 12.5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        August
                    </p>
                    <Img src={staticFile("image8.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 14} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        September
                    </p>
                    <Img src={staticFile("image9.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 15.5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        October
                    </p>
                    <Img src={staticFile("image10.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 17} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        November
                    </p>
                    <Img src={staticFile("image11.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
            <Sequence from={30 * 18.5} durationInFrames={30 * 1.5}>
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
                        padding: '17px',
                        top: '100px',
                        zIndex: '1',
                        textShadow: '3px 3px black',
                    })}>
                        December
                    </p>
                    <Img src={staticFile("image12.png")} style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(0%, -50%)',
                        width: '740px',
                        height: '740px',
                        zIndex: '0'
                    }}/>
                </div>
            </Sequence>
        </AbsoluteFill>
    );
};
