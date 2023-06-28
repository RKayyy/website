import React, { useState, useEffect } from "react";
import "../styles/Lionpage.css";
import astronaut from "../images/astronaut.png";

const Astronautmovement = () => {
  const [dir, setDir] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveAstronaut = () => {
      switch (dir) {
        case 1:
          setPosition((prevPos) => ({ x: prevPos.x + [120], y: prevPos.y }));
          break;
        case 2:
          setPosition((prevPos) => ({ x: prevPos.x - [120], y: prevPos.y }));
          break;
        case 3:
          setPosition((prevPos) => ({ x: prevPos.x, y: prevPos.y + [120] }));
          break;
        case 4:
          setPosition((prevPos) => ({ x: prevPos.x, y: prevPos.y - [120] }));
          break;
        case 5:
          setPosition((prevPos) => ({ x: prevPos.x + [120], y: prevPos.y + [120] }));
          break;
        case 6:
          setPosition((prevPos) => ({ x: prevPos.x - [120], y: prevPos.y - [120] }));
          break;
        case 7:
          setPosition((prevPos) => ({ x: prevPos.x - [120], y: prevPos.y + [120] }));
          break;
        case 8:
          setPosition((prevPos) => ({ x: prevPos.x + [120], y: prevPos.y - [120] }));
          break;
        default:
          setPosition({ x: 0, y: 0 });
      }
    };

    moveAstronaut();
  }, [dir]);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 5) + 1;
    setRandomNumber((prevNumber) =>
      prevNumber === number ? generateRandomNumber() : number
    );
  };

  return (
    <div className="text-white">
      <button onClick={() => setDir(prevDir => prevDir === 7 ? 0 : 7)}>--lu--</button>
<button onClick={() => setDir(prevDir => prevDir === 3 ? 0 : 3)}>--up--</button>
<button onClick={() => setDir(prevDir => prevDir === 5 ? 0 : 5)}>--ru--</button>
<br />
<button onClick={() => setDir(prevDir => prevDir === 1 ? 0 : 1)}>--right--------</button>
<button onClick={() => setDir(prevDir => prevDir === 2 ? 0 : 2)}>left--</button>
<br />
<button onClick={() => setDir(prevDir => prevDir === 6 ? 0 : 6)}>--ld--</button>
<button onClick={() => setDir(prevDir => prevDir === 4 ? 0 : 4)}>--down--</button>
<button onClick={() => setDir(prevDir => prevDir === 8 ? 0 : 8)}>--rd--</button>


      <img
        className="scale-[25%]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        src={astronaut}
        alt="Astronaut"
      />
      {randomNumber && (
        <div>
          <p>Random Number: {randomNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Astronautmovement;
