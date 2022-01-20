import styled from "styled-components";

export const ContADM = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 100vh;

    img {
        width: 40rem;

        @media screen and (max-width: 1360px) {
            width: 20rem;
        }

        @media screen and (max-width: 500px) {
            width: 10rem;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    @media screen and (max-width: 500px) {
        justify-content: flex-end;
    }

    @media screen and (max-width: 375px) {}
}
`;

export const ContImg = styled.div`
  padding: 1rem 5rem 1rem 5rem;

  @media screen and (max-width: 1360px) {
    padding: 1rem 3rem 1rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem 1rem 1rem;
  }
`;

export const ContText = styled.div`
  padding: 1rem 10rem 1rem 5rem;

  @media screen and (max-width: 1360px) {
    padding: 1rem 3em 1rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 1rem 2rem 1rem;
  }

    @media screen and (max-width: 375px) {}

  p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: justify;

    @media screen and (max-width: 1360px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 375px) {}
  }

  
`;