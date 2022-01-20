import styled from "styled-components";

export const ContProyectos = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;

  img {
    height: 40rem;
  }

  @media screen and (max-width: 1360px) {
    img {
      height: 20rem;
    }
  }

  @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 5rem;


  }

  @media screen and (max-width: 500px) {
    img {
    height: 10rem;
    }
  }
`;

export const ContProyect = styled.div`
  td {
    flex-direction: column;
    align-items: center;
    border: 1px solid #000000;
  }

  img {
    height: 10rem;

    :hover {
      background-color: #000000;
    }
  }

  @media screen and (max-width: 1360px) {
    td {
      width: 2rem;
      height: 5rem;
    }

    img {
      height: 6rem;
    }
  }

  @media screen and (max-width: 768px) {

  }

  @media screen and (max-width: 500px) {
  }
`;

export const ProIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media screen and (max-width: 1360px) {
    h3 {
        font-size:1rem;
      padding:0.3rem;
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 500px) {
  }
`;

export const ProTube = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.7rem;
  padding-top: 0.5rem;

  a {
    color: #000000 !important;
  }

  @media screen and (max-width: 1360px) {
    font-size: 1rem;
    padding: 0.4rem 0.4rem 0.4rem 0.4rem;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 500px) {
  }
`;

export const ProLink = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  padding-top: 0.3rem;
  a {
    color: #000000 !important;
  }

  @media screen and (max-width: 1360px) {
    font-size: 1rem;
    padding: 0.4rem 0.4rem 0.4rem 0.4rem;
    
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 500px) {
  }
`;

// @media screen and (max-width: 1360px) {
// }

// @media screen and (max-width: 768px) {
// }

// @media screen and (max-width: 500px) {
// }

// @media screen and (max-width: 375px) {
// }
