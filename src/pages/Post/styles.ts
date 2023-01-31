import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto 2rem;
  gap: 0.5rem;

  strong {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue-300"]};

    &:hover {
      text-decoration: underline;
      transition: text-decoration 0.2s;
    }
  }

  img {
    width: 100%;
    max-width: 54rem;
  }
`;
