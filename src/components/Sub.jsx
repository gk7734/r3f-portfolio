import { IoIosArrowRoundUp } from "react-icons/io";
import './scss/Sub.scss'
import curve from '../assets/Images/Curve.webp'
import curveD from '../assets/Images/Curve-D.webp'

const Sub = () => {
    return (
        <div className={`subContainer`}>
            <div className={`center`}>
                <h1 className={`mainText`}>
                    Equal parts creative <br/>  developer & designer
                </h1>
                <div className={`round`}>
                    <IoIosArrowRoundUp size={35} color={`white`}/>
                </div>
            </div>
            <img src={curve} alt={`curve`} id={`c-1`} className={`curve`}/>
            <img src={curve} alt={`curve`} id={`c-2`} className={`curve`}/>
        </div>
    )

}

export default Sub;
