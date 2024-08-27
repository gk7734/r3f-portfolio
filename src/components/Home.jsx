import Navbar from "./Navbar.jsx";
import './scss/Home.scss'
import Scene from "./Scene.jsx";
import {Canvas} from "@react-three/fiber";

const Home = () => {
    return (
        <div className={`homeContainer`}>
            <Navbar/>
            <div className={`home-grid`}>
                <Canvas camera={{zoom: 2.9}}>
                    <Scene/>
                </Canvas>
                <div className={`stack-grid`}>
                    <div className={`circle-grid`}>
                        <div className={`round-stack`}>

                        </div>
                    </div>
                    <div className={`blog-slider`}>
                        <div className={`round-slider`}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
