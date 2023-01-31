import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 13.25rem;
  max-width: 54rem;
  margin: 0 auto 10rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme["color-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  form {
    margin-bottom: 3rem;
    input {
      width: 100%;
      border: 1px solid ${(props) => props.theme["gray-500"]};
      background: ${(props) => props.theme["gray-900"]};
      padding: 0.75rem 1rem;
      border-radius: 6px;
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-400"]};
      }
    }
  }
`;

export const SectionList = styled.section`
  display: flex;
  gap: 2rem;

  article {
    max-width: 26rem;
    max-height: 16.25rem;
    padding: 2rem;
    flex-direction: column;
    background: ${(props) => props.theme["gray-600"]};
    border-radius: 10px;

    header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      strong {
        flex: 1;
        font-size: 1.25rem;
        line-height: 1.6;
      }

      time {
        margin-top: 0.3rem;
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${(props) => props.theme["gray-300"]};
      }
    }

    p {
      display: block;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
