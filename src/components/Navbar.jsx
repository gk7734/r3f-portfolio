import './scss/Navbar.scss'
import {IoMoon} from "react-icons/io5";
import {MdSunny} from "react-icons/md";
import useDarkStore from "./stores/Dark.js";
import logoW from '../assets/Images/Logo-W.webp'
import logoD from '../assets/Images/Logo-D.webp'
import curve from '../assets/Images/Curve.webp'
import curveD from '../assets/Images/Curve-D.webp'

const data = [
    {
        title: "Projects",
        link: "#projects"
    },
    {
        title: "Abouts",
        link: "#abouts"
    },
    {
        title: "Blog",
        link: "#blog"
    },
    {
        title: "Contents",
        link: "#contents"
    }
]

const Navbar = () => {
    const {dark, setDark} = useDarkStore();

    return (
        <>
            <div className={`long-bar`}/>
            <nav className={`navContainer`}>
                <div className={`round-box`}>
                    <img src={curve} alt={"curve-1"} id={`c-1`} className={`curve`}/>
                    <img src={logoD} className={`logo`} alt={"logo"}/>
                    <img src={curve} alt={"curve-2"} id={`c-2`} className={`curve`}/>
                </div>
                <div className={`nav-box`}>
                    <ul className={`nav-grid`}>
                        {data.map((item, index) => {
                            return (
                                <a href={item.link} key={index}>
                                    <li>
                                        <h1>{item.title}</h1>
                                    </li>
                                </a>
                            )
                        })}
                        <li style={{alignContent: "center"}}>
                            <div onClick={() => setDark(!dark)} className={`circle-border`}>
                                {dark ? <MdSunny size={25}/> : <IoMoon size={25}/>}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
