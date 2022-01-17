import styled from "styled-components";

export const ContContacto = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 100vh;

    table {
        text-align: center;

        img {
            height: 3rem;
        }
    }

    img {
        height: 40rem;
    }
`;

export const ContTd = styled.div`
    border: 1px solid #000000;
    text-align: center;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Contact = styled.img`
    width: 50rem;
    height: 10rem;
`;