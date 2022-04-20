import { React } from "react";
import GuideHome from "../../components/GuideHome/GuideHome";

export default function App() {

    return (
        <div className="main-home">
            <div className="main-home__img">
                <img src='/assets/home.png' alt="Img"></img>
            </div>
            <div className="main-home__content">
                <GuideHome></GuideHome>
            </div>
        </div>
    );
}