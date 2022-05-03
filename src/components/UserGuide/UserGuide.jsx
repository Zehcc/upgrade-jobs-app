import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { guideData } from "../../GuideData/data";

const GuideHome = () => {
  let navigate = useNavigate();
  const { dataUser, dataCompany } = guideData;

  const [data, setData] = useState(-1);
  const [guide, setGuide] = useState("");
  const next = () => {
    setData(data + 1);
  };

  const setUser = () => {
    setGuide("user");
    setData(data + 1);
  };

  const setCompany = () => {
    setGuide("company");
    setData(data + 1);
  };
  const toRegister = (type) => {
    if (type === "user") {
      navigate("/registerUser");
    } else {
      navigate("/registerCompany");
    }
  };

  return (
    <>
      {data < 0 && (
        <div>
          <h2>¿Qué estás buscando?</h2>
          <div>
            <button onClick={setUser}>Estoy buscando trabajo</button>
            <button onClick={setCompany}>Estoy buscando candidatos</button>
          </div>
        </div>
      )}
      <div className='guide'>
        {data === 0 && (
          <img
            className='guide__image'
            src='/assets/Resume.png'
            alt='profile'
          />
        )}
        {data === 1 && (
          <img
            className='guide__image'
            src='/assets/Jobhunt.png'
            alt='profile'
          />
        )}
        {data === 2 && (
          <img
            className='guide__image'
            src='/assets/contact-companies.png'
            alt='profile'
          />
        )}
        {guide === "user" && (
          <>
            <div className='guide__content'>
              {dataUser[data].title && <h3>{dataUser[data].title}</h3>}
              <p>{dataUser[data].text}</p>
            </div>
            <div className='guide__buttons'>
              {data < 2 && (
                <button className='guide-btn' onClick={next}>
                  Siguiente
                </button>
              )}
              {data === 2 && (
                <button
                  className='guide-btn green'
                  onClick={() => toRegister("user")}
                >
                  Comenzar
                </button>
              )}
            </div>
          </>
        )}
        {guide === "company" && (
          <>
            <div className='guide__content'>
              {dataCompany[data].title && <h3>{dataCompany[data].title}</h3>}
              <p>{dataCompany[data].text}</p>
            </div>
            <div className='guide__buttons'>
              {data < 2 && (
                <button className='guide-btn' onClick={next}>
                  Siguiente
                </button>
              )}
              {data === 2 && (
                <button
                  className='guide-btn green'
                  onClick={() => toRegister("company")}
                >
                  Comenzar
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GuideHome;
