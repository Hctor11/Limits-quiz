import "../Main/Main.css";
import { useState, useRef, useEffect } from "react";
import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";
import Preloader from '../Preloader/Preloader'
import { Link } from "react-router-dom";

const Main = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x9b82f5,
          midtoneColor: 0xaf85e8,
          lowlightColor: 0xc4bade,
          baseColor: 0x000000,
          zoom: 0.5,
          blurFactor: 0.8,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="main" ref={myRef}>
        <Preloader/>

        <div className="card">
            <h3 className="title">Limites</h3>
            <p className="desc">
            Serie de ejercicios básicos sobre limites, si logras acertar las 5 preguntas obtendras un premio.
            </p>
            <Link to={'/quiz'} className="link">Empezar</Link>
        </div>
    </div>
  );
};

export default Main;
