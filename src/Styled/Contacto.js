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

      @media screen and (max-width: 500px) {
        height: 2rem;


      }

      @media screen and (max-width: 375px) {
      }
    }
  }

  @media screen and (max-width: 1360px) {
    justify-content: center;
    margin-top: 4rem;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 6rem;
    h1{
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
  }

  @media screen and (max-width: 375px) {
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

  @media screen and (max-width: 1360px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 375px) {
  }
`;

export const ContImg = styled.div`
  img {
    height: 40rem;
  }

  @media screen and (max-width: 1360px) {
    img {
      margin-left: 2rem;
      height: 30rem;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      height: 20rem;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      margin-top: 2rem;
      height: 10rem;
    }
  }

  @media screen and (max-width: 375px) {
  }
`;
