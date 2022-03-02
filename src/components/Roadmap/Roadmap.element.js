import styled from "styled-components";


export const Image = styled.img`

    width: ${({wid}) => wid ? wid+"%": "100%"};
    display: block;
    margin: 0 auto;

`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5vh;
    flex-direction: row;
    @media only screen and (max-width: 768px) {
        margin-top: 0vh;
        flex-direction: column;
    }
`;

export const Title = styled.p`
    font-size: 1.5rem;
    margin: auto;
    padding-bottom: 10px;
    color: #fff;
    max-width: 250px;
    text-align: center;
`;

export const Progress = styled.h3`
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 23px;
    text-align: center;
    color: #fff;
`;

export const FlexItem = styled.div`
    padding: 5px;
    @media only screen and (max-width: 768px) {
        margin-top: 10vh;
    }
   
`;





