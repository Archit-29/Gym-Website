import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo (1).png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';
const Header = () => {


    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (

        <div className="header">
            <img className='logo' src={Logo} />
            {menuOpened === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: "#3c3f45", padding: '0.5rem',
                        borderRadius: "5px"
                    }}
                    onClick={() => { setMenuOpened(true) }}>
                    <img src={Bars} style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (<ul className='header-menu'>
                    <li><Link
                        onClick={() => { setMenuOpened(false) }}
                        to='header'
                        spy={true}
                        smooth={true}
                    >Home</Link></li>

                    <li><Link
                     onClick={() => { setMenuOpened(false) }}
                     to='programs'
                     spy={true}
                     smooth={true}
                    >Programs</Link></li>

                    <li><Link
                     onClick={() => { setMenuOpened(false) }}
                     to='Reasons'
                     spy={true}
                     smooth={true}
                    >Why us</Link></li>

                    <li onClick={() => { setMenuOpened(false) }}><Link
                     onClick={() => { setMenuOpened(false) }}
                     to='plans'
                     span={true}
                     smooth={true}
                    >Plans</Link></li>


                    <li><Link
                        onClick={() => { setMenuOpened(false) }}
                        to='Testimonials'
                        span={true}
                        smooth={true}
                    >Testimonials</Link></li>
            </ul>)}
        </div>
    )
}

export default Header