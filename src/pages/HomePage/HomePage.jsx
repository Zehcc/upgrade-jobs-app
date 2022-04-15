import { useRef, useState } from "react";

export default function App() {
    const textRef = useRef();
    const [textData, setTextData] = useState(1);
    const previous = () => {
        textRef.current.style.opacity = 0;
        setTimeout(() => {
            setTextData(textData - 1);
            textRef.current.style.opacity = 1;
        }, 1000);
    };

    const next = () => {
        textRef.current.style.opacity = 0;
        setTimeout(() => {
            setTextData(textData + 1);
            textRef.current.style.opacity = 1;
        }, 1000);
    };

    return (
        <div className="main-home">
            <div className="main-home__img">
                <img src="" alt="Img"></img>
            </div>
            <div
                ref={textRef}
                className="main-home__text"
                style={{
                    border: "1px solid black",
                    padding: "8px",
                    transition: "opacity 1s linear"
                }}
            >
                <p>Texto {textData}</p>
            </div>
            <div>
                <button style={{ width: "50px" }} onClick={previous}>
                    Prev
                </button>
                <button style={{ width: "50px" }} onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
}