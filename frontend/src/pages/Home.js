import './Home.css';
import Loading from '../Loading.jsx';
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Airforce from '../assets/Airforce.jsx';

function Home() {
    const controlsRef = useRef();

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.autoRotate = true;
            controlsRef.current.autoRotateSpeed = 0.7;
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.object.position.set(5, 0, 0);
            controlsRef.current.object.lookAt(controlsRef.current.target);
            controlsRef.current.update();
        }
    }, [controlsRef.current]);

    // Loading screen
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    return (
        <div>
            <div className="home-content">
                <h1>THE AIR FORCE 2 BY NIKE</h1>
                <div id="af1">
                    <Canvas camera={{ position: [5, 0, 0], fov: 75 }} style={{ zIndex: 0 }}>
                        <ambientLight color={'black'} intensity={1} />
                        <OrbitControls
                            ref={controlsRef}
                            enablePan={false}
                            enableZoom={false}
                            autoRotate={true}
                            rotateSpeed={0.7}
                            minDistance={0.3}
                            maxDistance={0.3}
                        />
                        <Suspense fallback={null}>
                            <Airforce />
                        </Suspense>
                        <Environment preset="sunset" />
                        <ContactShadows
                            position={[0, -0.1, 0]}
                            rotation={[Math.PI / 10, 0, 0]}
                            opacity={1}
                            scale={10}
                            blur={1}
                            far={10}
                            resolution={256}
                            color="#000000"
                        />
                    </Canvas>
                    <a id="info" href="/shop/men/shoes">MORE INFORMATION</a>
                </div>
            </div>
            {loading && <Loading />}
        </div>
    );
}

export default Home;
