import './scss/Navbar.scss'
import {IoMoon} from "react-icons/io5";
import {MdSunny} from "react-icons/md";
import useDarkStore from "./stores/Dark.js";

const Navbar = () => {
    const {dark, setDark} = useDarkStore();

    return (
        <>
            <nav className={`navContainer`}>
                <ul className={`nav-grid`}>
                    <li>
                        <h1>Projects</h1>
                    </li>
                    <li>
                        <h1>Abouts</h1>
                    </li>
                    <li>
                        <h1>Contents</h1>
                    </li>
                    <li style={{ alignContent: "center", }}>
                        <div onClick={() => setDark(!dark)}>
                            {dark ? <MdSunny size={25}/> : <IoMoon size={25}/>}
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
