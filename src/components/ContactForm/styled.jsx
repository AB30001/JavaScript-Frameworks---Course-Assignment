import styled from "styled-components";

export const StyledForm = styled.form`
  h1 {
    margin-bottom: 2rem;
  }
  div {
    margin-block: 1rem;
  }
  > div > p {
    margin-block: 3rem;
  }
  > div > div {
    text-align: center;
  }
  button {
    background-color: ${({ theme }) => theme.colors.attention};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    transition: transform 0.2s ease;
    float: right;
    
    &:hover {
      transform: scale(1.05);
    }
    
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
