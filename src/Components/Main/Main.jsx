import "../Main/Main.css";
import { useState, useRef, useEffect } from "react";
import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";

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
          highlightColor: 0xa64ee3,
          midtoneColor: 0xaf85e8,
          lowlightColor: 0xc4bade,
          blurFactor: 0.70,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="main" ref={myRef}>
    </div>
  );
};

export default Main;
