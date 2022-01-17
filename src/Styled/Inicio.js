import styled from "styled-components";

export const ContInicio = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 45rem
    }

    @media screen and (max-width: 1360px) {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;

        img {
            width: 25rem
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        img {
            width: 35rem
        }
    }

    @media screen and (max-width: 500px) {
        margin-top: 3rem;

        img {
            width: 15rem
        }

       
    }

    @media screen and (max-width: 375px) {
        img {
            width: 15rem
        }


    }
`;

export const ContH1 = styled.div`
    text-align: center;
    font-size: 2rem;
    text-shadow: 2px 2px 2px #ff5500da;

    @media screen and (max-width: 1360px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 1rem;
    }
`;