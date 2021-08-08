import React from 'react'
import { OverlayHolder } from '../main-title/styles';

import { Btn, Button, Img } from './style.js';
import { useSelector } from 'react-redux';

import Fade from 'react-reveal/Fade';

import arrow from '../../images/down-arrow.svg';



export const BtnsSection = () => {

    let position = useSelector((state) => (state.reducer));


    const { opacity, currentItem } = position;


    return (
        <OverlayHolder btn opacity={opacity}>
            {(currentItem && currentItem[0].title === 'Accessories') ?
                <Btn grey>Shop Now</Btn> :
                <>
                    <Fade left>
                        <Btn grey>Custome Order</Btn>
                    </Fade>
                    <Fade right>
                        <Btn white>Existing Inventory</Btn>
                    </Fade>
                    <Button><Img src={arrow} alt="down" ></Img></Button>
                </>
            }

        </OverlayHolder>

    )
}
