import styled from "styled-components";

export const ContHabilidades = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;

    h1{
        padding-bottom: 1rem;
    }

    table {
        text-align: center;

        td {
            border: 1px solid #000000;
            text-align: center;
            width: 100px;
            height: 100px;

            img {
                height: 3rem;
            }
        }
    }

    img{
        height: 40rem;
    }
`;

export const ContIcons = styled.div`
    display: flex;
    flex-direction: column;
`;