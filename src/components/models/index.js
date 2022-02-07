import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import "./index.css";

export const Container = ({ geometry, color, handleBack }) => {
  console.log(geometry);
  const ModelContainer = (props) => {
    const mesh = useRef();

    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    const HandleGeometry = () => {
      console.log(geometry, "test");
      switch (geometry) {
        case "coneGeometry": {
          return <coneGeometry />;
        }
        case "circleGeometry": {
          return <circleGeometry />;
        }
        case "sphereGeometry": {
          return <sphereGeometry />;
        }
        case "latheGeometry": {
          return <latheGeometry />;
        }
        default: {
          return <boxGeometry />;
        }
      }
    };

    return (
      <mesh ref={mesh} scale={[1.5, 1.5, 1.5]}>
        <HandleGeometry />
        <meshBasicMaterial
          attach="material"
          color={color}
          side={THREE.DoubleSide}
        ></meshBasicMaterial>
      </mesh>
    );
  };
  return (
    <>
      <div className="button-container">
        <button onClick={() => handleBack()}>back</button>
      </div>
      <Canvas className="canva">
        <ambientLight intensity={0.5} />
        <ModelContainer position={[-1.2, 0, 0]} />
      </Canvas>
    </>
  );
};
