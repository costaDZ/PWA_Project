import styled from 'styled-components';




export const OverlayHolder = styled.div`
    position: fixed;
    transition : .3s;
    flex-direction :column;
    width: 100%;

    ${props => props.btn ? 'bottom : 2em ;' : 'top : 5em;'}
    
    text-align: center;
    left: 50%;
    transform: translateX(-50%);

    ${props => props.btn ?
        `flex-direction : row ;
        justify-content: center;
        width: 70%; height: 6em;
        @media (max-width: 768px) {flex-direction: column; height : 12em; justify-content: space-evenly; align-items: center;}
        `
        :
        "block"};

    display : ${props => props.opacity === '.0' ? 'none' : 'flex'};


    


`;




export const Title = styled.h1`
    font-size: 4em;

`;





export const Description = styled.small`
    

`;