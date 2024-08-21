import Navbar from "./Navbar.jsx";
import './scss/Home.scss'
import Scene from "./Scene.jsx";
import {Canvas} from "@react-three/fiber";

const Home = () => {
    return (
        <div className={`homeContainer`}>
            <Navbar/>
            <Canvas camera={{ zoom: 2.9 }}>
                <Scene />
            </Canvas>
        </div>
    )
}

export default Home;
