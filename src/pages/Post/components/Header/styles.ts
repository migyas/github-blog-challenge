import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 54rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin: -6.5rem auto 4.5rem;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme["gray-700"]};
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderWithLink = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;

  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme["blue-300"]};
  cursor: pointer;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;

  span {
    line-height: 1.3;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue-300"]};
    transition: border-bottom 0.2s;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme["color-title"]};
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["color-subtitle"]};

    svg {
      color: ${(props) => props.theme["gray-400"]};
    }
  }
`;
