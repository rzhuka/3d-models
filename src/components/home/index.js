import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import "./index.css";

const Home = ({ handleChangeView }) => {
  const Box = () => {
    const mesh = useRef();

    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    return (
      <mesh ref={mesh} scale={[2, 2, 2]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial
          color={"#1399B9"}
          side={THREE.DoubleSide}
        ></meshBasicMaterial>
      </mesh>
    );
  };

  return (
    <div className="homeContainer">
      <Canvas className="canvas">
        <Box />
      </Canvas>

      <div className="tittle">Welcome in 3D-models page!</div>
      <div className="body">
        <div className="button-container">
          <button onClick={() => handleChangeView("newDesign")}>
            New design
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => handleChangeView("allDesigns")}>
            {" "}
            All designs
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
