import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import White_house from "../3D_model/red_house/White_house"
import Red_house from "../3D_model/red_house/Red_house"
import { mainColors } from "../styles/variables"
import '../styles/3dhouse.scss'

export default function White() {
    return (
        <div className="flex justify-between items-center">
        <div className="w-2/3 h-[500px]"
            data-aos="fade-left"
        >
            <Canvas camera={{ position: [0, 5, 40], fov: 30, near: 0.1, far: 5000  }}>
                <ambientLight />
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5}/>
                <Suspense fallback={null}>
                    <White_house />
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>
        </div>
        <div className="w-1/2"
            data-aos="fade-up"
        >
            <h3 className=" ml-20" style={{color: mainColors.mainBrown}}>Projet Sarah</h3>
            <p className="ml-20" style={{color: mainColors.mainBrown}}>Modélisation 3D d'une maison</p>
            <p className="text-gray-800 px-20 w-[1/2]">"Un intérieur cosy et raffiné. L’harmonie des matériaux et le choix des couleurs créent une ambiance intime, propice au bien-être quotidien."</p>
        </div>
        </div>
    )
}