import React from 'react';

import { Logo, Menu, SubMenu } from '../../components';
import styled from 'styled-components';

const Navbar = styled.div`
    font-size: 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width: 100%;
    background: transparent;
    padding :.4em 0 ;
`

export const Header = () => {



    return (
        <Navbar>
            <Logo />
            <Menu />
            <SubMenu />
        </Navbar>
    )

}


