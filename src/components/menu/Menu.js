import React from 'react';
import {
    MenuList,
    MenuListItems,
    MenuListItemsLinks
} from './styles.js';


export const Menu = () => {


    return (
        <MenuList>
            <MenuListItems>
                <MenuListItemsLinks hide> Model S</MenuListItemsLinks>
            </MenuListItems>


            <MenuListItems>
                <MenuListItemsLinks hide> Model 3</MenuListItemsLinks>
            </MenuListItems>

            <MenuListItems>
                <MenuListItemsLinks hide> Model X</MenuListItemsLinks>
            </MenuListItems>

            <MenuListItems>
                <MenuListItemsLinks hide>Model Y</MenuListItemsLinks>
            </MenuListItems>

            <MenuListItems>
                <MenuListItemsLinks hide>Solar Roof</MenuListItemsLinks>
            </MenuListItems>

            <MenuListItems>
                <MenuListItemsLinks hide>Solar Panels</MenuListItemsLinks>
            </MenuListItems>
        </MenuList>

    )
}
