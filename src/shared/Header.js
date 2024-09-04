import '../style/Header.css'
import image from '../assets/images/favicon.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="mainHeader">
            <div className="logo">
                <img src={image} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to={'/about'}> About us </Link></li>
                    <li><Link to={'/contact'}>Contact us</Link></li>
                    <li ><Link to={'/login'}>Login</Link></li>
                    <li className='logout'><Link to={'/login'}> Logout </Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;