import React, { useEffect, useState } from "react";

import magicianGIF from "../assets/magician.mp4";
import "../styles/MagicianMove.css";

export default function MagicianMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveLogo = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
    };

    const moveLogoWithDelay = (e) => {
      setTimeout(() => {
        moveLogo(e);
      }, 600);
    };

    window.addEventListener("mousemove", moveLogoWithDelay);

    return () => {
      window.removeEventListener("mousemove", moveLogoWithDelay);
    };
  }, []);

  return (
    <div className="main">
      <img
        className="logo"
        src={magicianGIF}
        alt="Magician"
        style={{ position: "absolute", left: position.x, top: position.y }}
      />
    </div>
  );
}
