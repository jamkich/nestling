import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 40vh;
  color: #20252e;
  border-radius: 5px;
  padding: 30px;

  img {
    object-fit: cover;
    max-width: 300px;
    width: 50%;
    height: 90%;
    padding-right: 30px;
  }
`;

export const Quote = styled.p`
  font-size: 1.5em;
  font-family: 'Kalam', cursive;
  text-align: justify;
`;
