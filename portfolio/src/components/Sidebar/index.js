import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link } from "react-router-dom"

const Sidebar = () => {
    <div className="nav-bar"> 
        ET LA IL SAFFICHE AU SEIN DE LA SIDEBAR OU PAS ?
        <Link className="logo" to="/">
        <img src={LogoS} alt="logo" /> 
        <img className="sub-logo" src={LogoSubtitle} alt="shiraz" />
        </Link>
    </div>
}

export default Sidebar;