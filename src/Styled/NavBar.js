import styled from "styled-components";

export const ContNavBar = styled.div`
margin-top: 2rem;
margin-left: 4rem;
width: 90%;
height: 5rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem 2rem 1.5rem 2rem;
background-color: #ff5500;
position: fixed;

@media screen and (max-width: 1360px) {
    padding: 2rem 1rem 2rem 1rem;
}

@media screen and (max-width: 768px) {
    margin-left: 2rem;
}

@media screen and (max-width: 500px) {
    margin-left: 1.5rem;
    width: 90%;
    height: 10rem;
    display: flex;
    flex-direction: column;

    nav{
        display: flex;
    }
}

@media screen and (max-width: 375px) {
    margin-left: 1rem;
    width: 90%;
    height: 10rem;
    display: flex;
    flex-direction: column;

    nav{
        display: flex;
    }
}

h3 {
    margin: 0;
    padding: 1rem;
    color: #000000;
    border-left: 3px solid;
    border-right: 3px solid;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-width: 1360px) {
        font-size: 1rem;
        padding: 1rem 0.5rem 1rem 0.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        padding: 1rem 0.5rem 1rem 0.5rem;
    }
}

a {
    text-decoration: none;
    padding: 1rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all .3s;

    @media screen and (max-width: 1360px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
        padding: 1rem 0.5rem 1rem 0.5rem;
    }

    &:hover {
        color: #000000;
        border-left: 3px solid;
        border-right: 3px solid;
        border-radius: 1rem;

    }

}
}
`;

export const ContBtn = styled.div`
    display: flex;
    align-items: center;
`;

export const BanderasBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 0 0.5rem;

    img {
        width: 2rem;

        @media screen and (max-width: 1360px) {
            width: 1.5rem;
        }
        @media screen and (max-width: 768px) {
            width: 1.5rem;
        }
    }
`;

