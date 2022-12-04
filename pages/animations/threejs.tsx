import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import anistyles from '../../styles/animations.sass'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Model} from './src/Centaurus'


export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>ThreeJS test</title>
          <meta name="description" content="Welcome on Alexis Opolka's website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThreeJSTest />
  
      </div>
    )
  }

function ThreeJSTest() {
    return (
       <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
             backgroundColor: '#111a21',
             width: '100vw',
             height: '100vh',
          }}
       >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
          </Suspense>
          <OrbitControls />
       </Canvas>
    );
}