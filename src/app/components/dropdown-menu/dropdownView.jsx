import "./styles.css";
import styles from "@views/HomePage/homeStyle.module.css"
import { Link as GO } from 'react-scroll';

export const DropDownView = () => {
  
    return (
        <>
            <div id="dropdown">
                <div className="custom-select">
                    <div className="selected-option">
                        Menu
                    </div>
                    <ul className="options">
                        <GO to="home" smooth={true} duration={100}>Home</GO>
                        <GO to={`${styles.music}`} smooth={true} duration={100}>Musicas</GO>
                        <GO to={`demos`} smooth={true} duration={100}>Demos</GO>
                        <GO to={`${styles.members}`} smooth={true} duration={100}>Membros</GO>
                        <GO to={`${styles.events}`} smooth={true} duration={100}>Eventos</GO>
                        <GO to={`instafeed`} smooth={true} duration={100}>Fotos</GO>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default DropDownView;
