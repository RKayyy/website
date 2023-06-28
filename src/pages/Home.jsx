import React, { useCallback, useEffect } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import Main from "../components/Main";
import '../fonts/fonts.css';
import $ from 'jquery';
import '../styles/paths.css'

const Home = () => {

  const particlesInit = useCallback(main => {
    loadFull(main);
}, []);

useEffect(() => {
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });
 
}, []);




  return (
    <div style={{fontFamily: 'Oswald'}}>
      <Particles options={particlesOptions} init={particlesInit} />
    <div className="h-auto flex flex-col justify-center">
      


      <div className="h-[400px] flex flex-row justify-center items-end">
        <Main />
      </div>
      <div className="flex flex-row justify-center items-end" style={{fontFamily: 'Oswald'}}>
        <h1 className="text-white" style={{fontFamily: 'Oswald'}}>Scroll down for more!</h1>
      </div>
     
     
      <div className="text-white m-36 pt-96 text-center" style={{fontFamily: 'Oswald'}}>
        <h1 className="text-8xl text-white" style={{fontFamily: 'Oswald'}}>About Me</h1>
        <br></br>
        <br></br>
        <div className="text-xl">
        Culpa reprehenderit aliqua proident proident veniam anim eiusmod veniam
        ad eiusmod adipisicing sunt exercitation velit. Aute amet ea ea Lorem
        ipsum tempor dolor anim ullamco. Excepteur fugiat ea Lorem consequat.
        Duis pariatur dolor veniam ad non anim sint nisi velit cillum nulla
        eiusmod cillum magna. Aute ex fugiat occaecat do dolor tempor commodo id
        Lorem sunt. Excepteur non enim reprehenderit magna non reprehenderit et
        culpa. Qui in nisi sint irure exercitation fugiat deserunt labore minim
        duis. Aliquip pariatur ut adipisicing et. Anim eu ut eu eiusmod proident
        sint veniam veniam nulla commodo ipsum qui do. Esse excepteur mollit
        deserunt do commodo veniam. Culpa dolor aliqua reprehenderit cillum anim
        commodo excepteur nulla anim officia aliquip ea cupidatat mollit. Irure
        voluptate ut laborum magna labore eiusmod occaecat. Duis exercitation
        est minim sit non. Magna sint proident nostrud nulla dolor labore elit
        in cupidatat magna veniam sit. Incididunt non elit non nisi do sint
        aliqua Lorem duis irure. Fugiat elit eu nisi nisi. Pariatur laboris
        laborum ullamco duis ut qui consectetur velit laboris aute do nostrud.
        Adipisicing elit anim aliquip reprehenderit eu dolore aliquip non aute
        exercitation magna aliqua consequat. Occaecat aliquip do est tempor
        voluptate reprehenderit voluptate aliqua adipisicing consequat
        incididunt dolor ea laboris.
      
      </div>
      </div>
      <br></br>
    </div>
    </div>
  );
};

export default Home;
