import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Bureau from "../3D_model/Bureau"
import { mainColors } from "../styles/variables"
import '../styles/3dhouse.scss'

export default function Bureau3D() {
    return (
        <div className="flex justify-between items-center">
        <div className="w-1/2"
            data-aos="fade-up"
        >
            <h3 className=" ml-20" style={{color: mainColors.mainBrown}}>Projet Atos</h3>
            <p className="ml-20" style={{color: mainColors.mainBrown}}>Modélisation 3D d'une maison</p>
            <p className="text-gray-800 px-20 w-[1/2]">"Un intérieur cosy et raffiné. L’harmonie des matériaux et le choix des couleurs créent une ambiance intime, propice au bien-être quotidien."</p>
        </div>
        <div className="w-2/3 h-[500px]"
            data-aos="fade-left"
        >
            <Canvas camera={{ position: [3000, 0, 2000], fov: 75, near: 0.1, far: 5000  }}>
                <ambientLight />
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} enableDamping dampingFactor={0.05} />
                <Suspense fallback={null}>
                    <Bureau />
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>
        </div>
        </div>
    )
}