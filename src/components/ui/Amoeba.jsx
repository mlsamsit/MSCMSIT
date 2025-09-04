import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Custom shader for amoeba-like distortion
const AmoebaShader = {
  vertexShader: `
    uniform float time;
    uniform float strength;
    uniform vec2 mousePos;
    uniform float mouseInfluence;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    
    // Noise function
    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      
      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vNormal = normal;
      vPosition = position;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec3 pos = position;
      float noise = snoise(pos * 2.0 + time * 0.5) * strength;
      
      // Mouse interaction effect
      vec2 screenPos = (worldPosition.xy + vec2(5.0, 5.0)) / 10.0; // Normalize to screen space
      float dist = distance(screenPos, mousePos);
      float mouseEffect = smoothstep(0.3, 0.0, dist) * mouseInfluence;
      
      // Add mouse repulsion/attraction effect (minimal movement)
      vec2 mouseDirection = normalize(screenPos - mousePos);
      pos.xy += mouseDirection * mouseEffect * 0.05;
      pos += normal * (noise + mouseEffect * 0.03);
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    uniform vec2 mousePos;
    uniform float mouseInfluence;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      float fresnel = pow(1.0 - dot(normal, vec3(0.0, 0.0, 1.0)), 2.0);
      
      // Mouse interaction color effect
      vec2 screenPos = (vWorldPosition.xy + vec2(5.0, 5.0)) / 10.0;
      float dist = distance(screenPos, mousePos);
      float mouseEffect = smoothstep(0.4, 0.0, dist) * mouseInfluence;
      
      // Add white gradient on the right side
      vec3 lightDirection = normalize(vec3(1.0, 0.3, 0.5));
      float lightIntensity = max(0.0, dot(normal, lightDirection));
      float whiteGradient = pow(lightIntensity, 2.0) * 0.8;
      
      // Enhanced color with mouse interaction
      vec3 mouseColor = vec3(1.0, 0.8, 0.9); // Light pink/white when mouse is near
      vec3 baseColor = mix(color, mouseColor, mouseEffect * 0.6);
      
      // Blend base color with white gradient
      vec3 whiteColor = vec3(1.0, 1.0, 1.0);
      vec3 finalColor = mix(baseColor, whiteColor, whiteGradient) + fresnel * 0.2;
      float finalOpacity = opacity * (0.4 + fresnel * 0.2 + mouseEffect * 0.3);
      
      gl_FragColor = vec4(finalColor, finalOpacity);
    }
  `
};

function Amoeba({ position, scale, color, rotationSpeed = 1, mousePos, mouseInfluence }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    strength: { value: 0.15 },
    color: { value: new THREE.Color(color) },
    opacity: { value: 0.25 },
    mousePos: { value: new THREE.Vector2(0, 0) },
    mouseInfluence: { value: 0 }
  }), [color]);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.mousePos.value.set(mousePos.x, mousePos.y);
      materialRef.current.uniforms.mouseInfluence.value = mouseInfluence;
    }
    if (meshRef.current) {
      // Enhanced rotation with mouse influence (much slower speed)
      const mouseEffect = mouseInfluence * 0.1;
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * (0.2 + mouseEffect);
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * (0.3 + mouseEffect);
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * (0.1 + mouseEffect * 0.2);
      
      // Scale effect when mouse is near (minimal effect)
      const scaleEffect = 1 + mouseInfluence * 0.05;
      meshRef.current.scale.setScalar(scaleEffect);
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1.1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={AmoebaShader.vertexShader}
        fragmentShader={AmoebaShader.fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function AmoebaScene({ mousePos }) {
  // Get window dimensions for responsive behavior
  const { size } = useThree();
  const windowWidth = size.width;
  
  // Calculate responsive factors based on screen size
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  
  // Responsive scaling factors
  const scaleMultiplier = isMobile ? 0.6 : isTablet ? 0.8 : 1.0;
  const distanceMultiplier = isMobile ? 0.6 : isTablet ? 0.8 : 1.0;
  
  // Base amoeba configurations
  const baseAmoebas = [
    // Center amoeba - largest
    { position: [0, 0, -2.5], scale: [1.2, 1.5, 0.9], color: "#f0f8ff", rotationSpeed: 0.5 },
    // Random positions around the screen with varied sizes
    { position: [5.2, 3.5 , -3.2], scale: [0.8, 1.1, 0.6], color: "#ffffff", rotationSpeed: 0.8 },
    { position: [-6.1, -2.3, -1.8], scale: [0.4, 0.6, 0.3], color: "#f8f8ff", rotationSpeed: -0.6 },
    { position: [5.7, -3.9, -4.2], scale: [1.0, 0.7, 0.8], color: "#f5f5ff", rotationSpeed: 1.2 },
    { position: [-3.8, 3.6, -2.1], scale: [0.3, 0.4, 0.2], color: "#ffffff", rotationSpeed: -1 },
  ];
  
  // Apply responsive transformations
  const amoebas = baseAmoebas.map(amoeba => ({
    ...amoeba,
    position: [
      amoeba.position[0] * distanceMultiplier,
      amoeba.position[1] * distanceMultiplier,
      amoeba.position[2]
    ],
    scale: [
      amoeba.scale[0] * scaleMultiplier,
      amoeba.scale[1] * scaleMultiplier,
      amoeba.scale[2] * scaleMultiplier
    ]
  }));

  return (
    <>
      {amoebas.map((amoeba, index) => {
        // Convert 3D position to 2D screen coordinates for mouse influence calculation
        const screenX = (amoeba.position[0] + 5) / 10; // Normalize to 0-1
        const screenY = (amoeba.position[1] + 5) / 10; // Normalize to 0-1
        const distance = Math.sqrt(
          Math.pow(screenX - mousePos.x, 2) + Math.pow(screenY - mousePos.y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - distance / 0.3); // Influence within 0.3 units
        
        return (
          <Amoeba
            key={index}
            position={amoeba.position}
            scale={amoeba.scale}
            color={amoeba.color}
            rotationSpeed={amoeba.rotationSpeed}
            mousePos={mousePos}
            mouseInfluence={mouseInfluence}
          />
        );
      })}
    </>
  );
}

export default function AmoebaComponent() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert mouse position to normalized coordinates (0-1)
      const x = event.clientX / window.innerWidth;
      const y = 1 - (event.clientY / window.innerHeight); // Invert Y for 3D space
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#4da6ff" />
        <AmoebaScene mousePos={mousePos} />
      </Canvas>
    </div>
  );
}