import React, { useState } from 'react'
import styled from 'styled-components';
import close from '../../images/close.png';

import { sideBarInfo } from '../../carInfo';

import { handelSideBar } from '../../redux/actions/action';
import { connect } from 'react-redux';



const SideBar = ({ setSideBarPosition, sideBar }) => {

    console.log(sideBar);

    return (
        <Side style={{ transform: sideBar ? "translateX(0)" : "translateX(100%)" }}>
            <Btn onClick={() => setSideBarPosition("close")}>
                <Img src={close} alt='close button'></Img>
            </Btn>

            <ul>
                {sideBarInfo.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </Side>
    )
}

const mapStateToProps = state => ({
    sideBar: state.reducer.sideBar,
});

const mapDispatchToProps = dispatch => ({
    setSideBarPosition: (dir) => dispatch(handelSideBar(dir)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

const Side = styled.div`
    position: fixed;
    padding-top: 5em;
    height: 100vh;
    width: 16em;
    background: white;
    right: 0;
    z-index: 1;

    @media(max-width : 500px) {
        width: 100%;
        text-align: center;
    }
    .hide_slider {
        transform: translateX(100%);
    }
    

    ul {
        list-style: none;
        line-height: 3;
        padding-left: 1em;
        font-size: 1.2em;
        color: #717171;

        li:hover {
            transition: all .3s;
            color: black;
            cursor: pointer;
        }
    }
`

const Btn = styled.button`
    height: 2em;
    position: absolute;
    right: 9px;
    top: 12px;
    outline: none;
    border: none;

    &:hover {
        cursor: pointer;
    }
`


const Img = styled.img`
    height: 1.5em;
`
