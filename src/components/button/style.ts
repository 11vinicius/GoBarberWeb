import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0ch;
    padding: 0 16px;
    width: 100%;
    color: #312e28;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
