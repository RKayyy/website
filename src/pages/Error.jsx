import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


const Error = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, []);



  return (
    <div> <Particles options={particlesOptions} init={particlesInit} />
    <div className='flex flex-col pt-48'>
      <h1 className='text-white'><b>Error</b></h1>
    </div>
    </div>
  )
}

export default Error