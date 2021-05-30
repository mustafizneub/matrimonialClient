import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SidebarMenu, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>
                    
                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Search Profile
                    </SidebarLink>

                      <SidebarLink to="work" onClick={toggle}>
                        Premium Services
                    </SidebarLink>

                      <SidebarLink to="services" onClick={toggle}>
                        Contact Us
                    </SidebarLink>

                      <SidebarLink to="signup" onClick={toggle}>
                        SignUp
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
