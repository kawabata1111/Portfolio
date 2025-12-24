import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  attribute vec3 aInitialPosition;
  attribute float aSize;
  varying float vSize;

  void main() {
    vec3 pos = aInitialPosition;

    // ゆっくりと漂う動き
    float drift = sin(pos.x * 0.5 + uTime * 0.1) * 0.1
                + cos(pos.z * 0.3 + uTime * 0.08) * 0.1;
    pos.y += drift;

    // ゆっくり回転
    float angle = uTime * 0.02;
    float cosA = cos(angle);
    float sinA = sin(angle);
    pos.xz = mat2(cosA, -sinA, sinA, cosA) * pos.xz;

    // マウスからの反発効果
    vec3 mousePos = vec3(uMouse.x * 5.0, uMouse.y * 5.0, 0.0);
    vec3 diff = pos - mousePos;
    float dist = length(diff);
    float radius = 5.0;
    float force = smoothstep(radius, 0.0, dist) * 0.8;
    force = force * force;
    vec3 pushDir = normalize(diff + vec3(0.001));
    pos += pushDir * force;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vSize = aSize;
    gl_PointSize = aSize * (80.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  varying float vSize;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;

    // 星のような輝き（中心が明るい）
    float glow = 1.0 - d * 2.0;
    glow = pow(glow, 1.5);

    // 青白い星の色
    vec3 color = mix(vec3(0.8, 0.9, 1.0), vec3(1.0, 1.0, 1.0), glow);

    // キラキラ効果
    float twinkle = glow * (0.8 + 0.2 * sin(vSize * 100.0));

    gl_FragColor = vec4(color, twinkle);
  }
`

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 3000 }) => {
  const ref = useRef<THREE.Points>(null)
  const smoothMouse = useRef(new THREE.Vector2(0, 0))

  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // 広い宇宙空間に配置
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      // ランダムなサイズ（星のバリエーション）
      sizes[i] = Math.random() * 1.5 + 0.5
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aInitialPosition', new THREE.BufferAttribute(positions.slice(), 3))
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      transparent: true,
      depthWrite: false,
    })

    return { geometry: geo, material: mat }
  }, [count])

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return

    // 回転は無効化
    // ref.current.rotation.y += (pointer.x * 0.1 - ref.current.rotation.y) * 0.05
    // ref.current.rotation.x += (-pointer.y * 0.1 - ref.current.rotation.x) * 0.05

    // マウス位置を滑らかに補間（遅延を減らす）
    smoothMouse.current.x += (pointer.x - smoothMouse.current.x) * 0.15
    smoothMouse.current.y += (pointer.y - smoothMouse.current.y) * 0.15

    // uniformだけ更新（超軽い）
    material.uniforms.uTime.value = clock.elapsedTime
    material.uniforms.uMouse.value.set(smoothMouse.current.x, smoothMouse.current.y)
  })

  return <points ref={ref} geometry={geometry} material={material} />
}

interface Scene3DProps {
  className?: string;
  opacity?: number;
}

const Scene3D: React.FC<Scene3DProps> = ({ className = "", opacity = 1 }) => {
  return (
    <div className={`${className}`} style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 1.5]}>
        <Particles count={5000} />
      </Canvas>
    </div>
  )
}

export default Scene3D
