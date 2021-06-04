import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { CloseIcon, Icon, SidebarContainer, SidebarMenu, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
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
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>

                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/searchprofile" onClick={toggle}>
                            Search Profile
                    </SidebarRoute>
                    </SideBtnWrap>

                    <SideBtnWrap>
                        <SidebarRoute to="/service" onClick={toggle}>
                            Premium Services
                    </SidebarRoute>
                    </SideBtnWrap>
                    <SideBtnWrap>
                        <SidebarRoute to="/matchmake" onClick={toggle}>
                            Matchmake
                    </SidebarRoute>
                    </SideBtnWrap>
                    <SideBtnWrap>
                        <SidebarRoute to="/contact" onClick={toggle}>
                            Contact Us
                    </SidebarRoute>
                    </SideBtnWrap>

                    <SideBtnWrap>
                        <SidebarRoute to="/chat" onClick={toggle}>
                            Chat
                    </SidebarRoute>
                    </SideBtnWrap>


                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={isLoggedin ? '/' : '/signin'} onClick={isLoggedin ? logout : nothing}>{isLoggedin ? 'Sign out' : 'Sign In'}</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
