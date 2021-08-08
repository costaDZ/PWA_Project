
import styled from 'styled-components';

export const MenuList = styled.ul`

`;


export const MenuListItems = styled.li`
    display: inline-block;
    padding: 0 0.5em;
    cursor:pointer;
    border-radius: 20px;
    transition : .3s;
    &:hover {
    background-color: #dbdbdb;
    }
`;

export const MenuListItemsLinks = styled.a`
${props => props.hide ?
        "@media(max-width: 992px) { display : none;}"
        :
        'display: block'
    }

`;