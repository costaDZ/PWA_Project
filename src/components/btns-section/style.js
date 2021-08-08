import styled from 'styled-components';



export const Btn = styled.button`
    opacity: 1;
    margin : 0 1em;
    font-size: 1.2em;
    height : 2em;
    color: black;
    border-radius: 20px;
    padding: .4em 2em;
    border : none;
    font-weight: 300;
    letter-spacing: 1px;
    cursor : pointer;

    ${props => props.grey ?
        'background-color : #2e3036; color: white;' :
        'background-color : #d3d1d2; '
    }

    @media(max-width : 500px) {
    font-size: 1em;
    }
`;

export let Button = styled.button`
    position: absolute;
    bottom: 0;
    width: 3em;
    background: transparent;
    border: none;
`

export let Img = styled.img`

animation : top-To-Bottom .1s ease infinite;

@keyframes top-To-Bottom {
    0% {
        transform: translateY(-1px);
    }
    33% {
        transform: translateY(0px);
    }
    66% {
        transform: translateY(3px);
    }
    100% {
        transform: translateY(5px);
    }
}
`