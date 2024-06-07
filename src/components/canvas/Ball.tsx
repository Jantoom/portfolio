import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Text,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

interface BallProps {
  label: string;
  imgUrl: string;
}
const Ball: React.FC<BallProps> = ({ label, imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
        <Text
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, Math.PI, 6.25]}
          depthOffset={-15}
          curveRadius={-1}
          fontSize={0.25}
          color="#ffffff"
        >
          {label}
        </Text>
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  name: string;
  icon: any;
}
const BallCanvas: React.FC<BallCanvasProps> = ({ name, icon }) => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball label={name} imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
