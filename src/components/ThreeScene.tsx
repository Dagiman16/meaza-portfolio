'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.4, 32, 32]}>
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.7}
        roughness={0.2}
        emissive="#f97316"
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
}

function AnimatedBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 1.2) * 0.15;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.6, 0.6, 0.6]}>
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.8}
        roughness={0.1}
        emissive="#eab308"
        emissiveIntensity={0.1}
      />
    </Box>
  );
}

function AnimatedTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[0.3, 0.12, 16, 32]}>
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.9}
        roughness={0.1}
        emissive="#f59e0b"
        emissiveIntensity={0.1}
      />
    </Torus>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl overflow-hidden shadow-2xl">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#f97316" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5}
          color="#eab308"
        />
        
        <FloatingParticles />
        <AnimatedSphere position={[-1.2, 0, 0]} />
        <AnimatedBox position={[0, 0, 0]} />
        <AnimatedTorus position={[1.2, 0, 0]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}