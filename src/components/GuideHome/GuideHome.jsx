import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const GuideHome = () => {
    let navigate = useNavigate();
    const dataText = [
        { title: "Encuentra el mejor empleo!", text: "En nuestra web puedes postularte como candidato de miles de empresas reconocidas por todo el panorama nacional e internacional. Si estas buscando una nueva oportunidad o quieres mejorar tus actuales condiciones, sumate con nosotros!" },
        { title: "Si eres candidato", text: "Solo estas a un paso de encontrar tu trabajo ideal!" },
        { title: "O si por el contrario eres una empresa", text: "Encuentra los mejores candidatos para tu empresa, asegura tu futuro!" }
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
    const toRegisterUser = () => {
        navigate("/registerUser");
    }
    const toRegisterCompany = () => {
        navigate("/registerCompany");
    }
    return (
        <div className='guide'>
            <div className='guide__content'
                ref={guideRef}>
                <h3>{dataText[data].title}</h3>
                <p>{dataText[data].text}</p>

                {data === 1 && <button onClick={toRegisterUser}>Empieza Aqui</button>}
                {data === 2 && <button onClick={toRegisterCompany}>Empieza Aqui</button>}
            </div>
            <div className='guide__buttons'>
                {data > 0 && <button onClick={previus}>previus</button>}
                {data < 2 && <button onClick={next}>next</button>}
            </div>
        </div>
    )
}

export default GuideHome