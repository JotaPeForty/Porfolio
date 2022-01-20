import styled from "styled-components";

export const ContHabilidades = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 1360px) {
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-end;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }

  @media screen and (max-width: 375px) {
  }

  h1 {
    padding-bottom: 1rem;

    @media screen and (max-width: 500px) {
      padding-bottom: 0rem;
      font-size: 1rem;
    }

    @media screen and (max-width: 375px) {
    }
  }

  table {
    text-align: center;

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 500px) {
    }

    @media screen and (max-width: 375px) {
    }

    td {
      border: 1px solid #000000;
      text-align: center;
      width: 100px;
      height: 100px;

      @media screen and (max-width: 500px) {
        width: 50px;
        height: 50px;
        font-size: 0.5rem;
      }

      @media screen and (max-width: 375px) {
      }

      img {
        height: 3rem;

        @media screen and (max-width: 500px) {
          height: 1.5rem;
        }

        @media screen and (max-width: 375px) {
        }
      }
    }
  }

  img {
    height: 40rem;

    @media screen and (max-width: 1360px) {
      height: 30rem;
    }

    @media screen and (max-width: 768px) {
      height: 15rem;
    }

    @media screen and (max-width: 500px) {
      height: 10rem;
    }

    @media screen and (max-width: 375px) {
        height: 15rem;
    }
  }
`;

export const ContIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

// @media screen and (max-width: 1360px) {
// }

// @media screen and (max-width: 768px) {
// }

// @media screen and (max-width: 500px) {
// }

// @media screen and (max-width: 375px) {
// }
