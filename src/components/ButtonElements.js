import styled from "styled-components"
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#01BF71' : '#010606') };

white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
font-family: 'Poppins', sans-serif;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : 'rgb(255,215,245) radial-gradient(circle, rgba(255,215,245,1) 0%, rgba(252,70,107,1) 100%);') };
}
`

