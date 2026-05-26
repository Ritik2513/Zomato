import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { TextureLoader } from "three";

import burgerImg from "../assets/food-burger.png";
import pizzaImg from "../assets/food-pizza.png";
import sushiImg from "../assets/food-sushi.png";

function FoodBillboard({ src, position, scale, rotationSpeed }) {
  const tex = useLoader(TextureLoader, src);
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * rotationSpeed) * 0.35;
    ref.current.rotation.z = Math.sin(t * rotationSpeed * 0.7) * 0.08;
    ref.current.position.y =
      position[1] + Math.sin(t * 0.8 + position[0]) * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <planeGeometry args={[scale, scale]} />
        <meshBasicMaterial map={tex} transparent toneMapped={false} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="studio" />

        {/* Floating foods */}
        <FoodBillboard
          src={burgerImg}
          position={[-2.8, 0.4, 0]}
          scale={2.4}
          rotationSpeed={0.2}
        />
        <FoodBillboard
          src={pizzaImg}
          position={[2.6, 0.6, -0.5]}
          scale={2.6}
          rotationSpeed={0.18}
        />
        <FoodBillboard
          src={sushiImg}
          position={[0, -1.8, 0.5]}
          scale={2.8}
          rotationSpeed={0.22}
        />
      </Suspense>
    </Canvas>
  );
}
