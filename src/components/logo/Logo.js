import React from 'react';

import styled from 'styled-components';
import logo from '../../images/logo.svg';

const MainLogo = styled.a`
    cursor: pointer;
`


export const Logo = () => {

    return (
        <MainLogo>
            <img src={logo} alt="logo" />
        </MainLogo>
    )
}

