import React from 'react'


import { handelSideBar } from '../../redux/actions/action';
import { connect } from 'react-redux';



import {
    MenuList,
    MenuListItems,
    MenuListItemsLinks
} from '../menu/styles';

const SubMenu = ({ setSideBarPosition }) => {
    return (
        <MenuList>
            <MenuListItems>
                <MenuListItemsLinks hide> Shop</MenuListItemsLinks>
            </MenuListItems>
            <MenuListItems>
                <MenuListItemsLinks hide> Account</MenuListItemsLinks>
            </MenuListItems>
            <MenuListItems>
                <MenuListItemsLinks onClick={() => setSideBarPosition("open")}  >
                    Menu
                </MenuListItemsLinks>
            </MenuListItems>
        </MenuList>
    )
}

const mapStateToProps = state => ({
    sideBar: state.sideBar,
});

const mapDispatchToProps = dispatch => ({
    setSideBarPosition: (dir) => dispatch(handelSideBar(dir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
