import React from 'react';

import { OverlayHolder, Title, Description } from './styles';

import { useSelector } from 'react-redux';

import Fade from 'react-reveal/Fade';

export const MainTitle = () => {


    let state = useSelector((state) => (state.reducer));
    const { opacity, currentItem } = state;


    return (
        <OverlayHolder opacity={opacity}>
            <Fade bottom>
                <Title>
                    {currentItem && currentItem[0].title}
                </Title>


                <Description>
                    {currentItem && currentItem[0].description}
                </Description>
            </Fade>

        </OverlayHolder>
    )
}



