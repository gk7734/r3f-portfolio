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
                    <a href={'#projects'}>
                        <li>
                            <h1>Projects</h1>
                        </li>
                    </a>
                    <a href={'#abouts'}>
                        <li>
                            <h1>Abouts</h1>
                        </li>
                    </a>
                    <a href={'#blog'}>
                        <li>
                            <h1>Blog</h1>
                        </li>
                    </a>
                    <a href={'#contents'}>
                        <li>
                            <h1>Contents</h1>
                        </li>
                    </a>
                    <li style={{alignContent: "center",}}>
                    <div onClick={() => setDark(!dark)} className={`circle-border`}>
                            {dark ? <MdSunny size={25}/> : <IoMoon size={25}/>}
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
