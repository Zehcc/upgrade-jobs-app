import React, { useState, useRef } from 'react'


const GuideHome = () => {

    const dataText = [
        { title: "first title", text: "first text" },
        { title: "second title", text: "second text" },
        { title: "third title", text: "third text" }
    ];
    const [data, setData] = useState(0);
    const guideRef = useRef();
    const previus = () => {
        guideRef.current.style.opacity = 0;
        setTimeout(() => {
            setData(data - 1);
            guideRef.current.style.opacity = 1;
        }, 1000);
    }
    const next = () => {
        guideRef.current.style.opacity = 0;
        setTimeout(() => {
            setData(data + 1);
            guideRef.current.style.opacity = 1;
        }, 1000);

    }
    return (
        <div className='guide'>
            <div className='guide__content'
                ref={guideRef}
                style={{ border: "1px solid solid", padding: "10px", transition: "opacity 1s linear" }}>
                <h1>{dataText[data].title}</h1>
                <p>{dataText[data].text}</p>
            </div>
            <div className='guide__buttons'>
                {data > 0 && <button onClick={previus}>previus</button>}
                {data < 2 && <button onClick={next}>next</button>}
            </div>
        </div>
    )
}

export default GuideHome