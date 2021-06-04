import React, {useState} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, NavLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import "./Navbar.css"
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';


const Navbar = ({ toggle }) => {

    const [isLoggedin,CheckState] = useState(localStorage.getItem('user') ? true : false);

    function logout() {
        if (isLoggedin) {
            localStorage.removeItem('user');
            localStorage.removeItem('jwt');
            CheckState(localStorage.getItem('user') ? true : false);
            toast.info('Logged out successfully')
        }
    }
    function nothing() {

    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img className="logo" src="https://i.ibb.co/sq7hVY4/logo.png" alt="" />
                        <span>Soulmate</span>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>

                            <NavLink to="/matchmake" >Matchmake</NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink to="/searchprofile" >Search Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/service" >Premium Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact" >Contact Us</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={isLoggedin ? '/' : '/signin'} onClick={isLoggedin ? logout : nothing}>{isLoggedin?'Sign out':'Sign In'}</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/chat">Chat</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
