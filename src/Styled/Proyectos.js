import styled from "styled-components";

export const ContProyectos = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;

    img{
        height: 40rem;
    }
`;

export const ContProyect = styled.div`
td{
    flex-direction: column;
    align-items: center;
        border: 1px solid #000000
    }

    img{
        height: 10rem;

        :hover{
            background-color: #000000
        }
    }
`;

export const ProIcons = styled.div`
display: flex;
    align-items: center;
    justify-content: space-around;
    

    h3{
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

export const ProTube = styled.div`
text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.7rem;
    padding-top: 0.5rem;

    a{
        color: #000000 !important;
    }
`;

export const ProLink = styled.div`
text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    padding-top: 0.3rem;
    a{
        color: #000000 !important;
    }
`;
