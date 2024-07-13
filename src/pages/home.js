import './home.css';
import React, {Suspense} from "react";
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls, ContactShadows} from "@react-three/drei";
import Airforce from '../assets/Airforce.jsx';
import NikeLogo from '../assets/Nike-Logo.png';

function Home() {

    return (
        <div>
            <img id={"nike"} src={NikeLogo} alt="Nike"/>
            <h1>THE NEW AIR FORCE 2</h1>
            <div id={"af1"}>
                <Canvas camera={{position: [0, 0, 5], fov: 75}}>
                    <ambientLight intensity={0.5}/>
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={false}
                        autoRotate={true}
                        autoRotateSpeed={1}
                        minDistance={0.3}
                        maxDistance={0.3}/>
                    <Suspense fallback={null}>
                        <Airforce/>
                    </Suspense>
                    <Environment preset={'sunset'}/>
                    <ContactShadows position={[0, -0.1, 0]} rotation={[Math.PI / 10, 0, 0]} opacity={1} scale={10}
                                    blur={1} far={10} resolution={256} color='#000000'/>
                </Canvas>
                <a id={"info"} href="/shop/men/shoes">MORE INFORMATION</a>
                <a href="/shop/men">KIDS</a>
            </div>
        </div>

    );
}

export default Home;
