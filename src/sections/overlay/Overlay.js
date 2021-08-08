import React from 'react';
import styled from 'styled-components';


export const Overlay = ({ img }) => {



    return (
        <Container img={img} >
        </Container>
    )
}


const Container = styled.div`
    height : 100vh;
    width : 100vw;
    background : url(..${props => props.img}) center/cover no-repeat;
    margin : 0;
    `;