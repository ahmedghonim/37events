"use client";
import { Canvas } from '@react-three/fiber'
import { Center, FirstPersonControls, GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from '@react-three/drei'




function Sphere() {
    return (
        <Center top>
            <directionalLight position={[5, 5, 2]} />
            <mesh castShadow>
                <boxGeometry />

                <meshStandardMaterial color="red" />
            </mesh>
        </Center>
    )
}



export default function Scene() {
    return (
        <div className="bg-white h-[500px] w-[500px]">

            <Canvas shadows>
                <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
                    <GizmoViewcube />
                    <GizmoViewport />
                </GizmoHelper>

                <gridHelper args={[20, 50, "red", "blue"]} />
                <axesHelper args={[10]} />
                <OrbitControls />
                <Sphere />



                <OrbitControls autoRotateSpeed={4} />
            </Canvas>
        </div>
    );
}
