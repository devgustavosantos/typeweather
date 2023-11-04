import styled from 'styled-components';

import { InputProps } from './Search.types';

const Container = styled.div`
  outline: 0;
`;

const InputWrapper = styled.div`
  padding: 17rem 20rem;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.GRAY_600};
  display: flex;
`;

const Input = styled.input<InputProps>`
  flex-grow: 1;
  color: ${({ theme, isLoading }) =>
    isLoading ? theme.GRAY_200 : theme.GRAY_100};
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 16rem;
  font-weight: 400;
  line-height: 22.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.GRAY_400};
  }
`;

const List = styled.ul`
  border-radius: 8rem;
  overflow: hidden;
  margin-top: 8rem;
`;

const Option = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 16rem 20rem;
  background-color: ${({ theme }) => theme.GRAY_500};
  border-bottom: 1rem solid ${({ theme }) => theme.GRAY_700};
`;

export { Container, Input, InputWrapper, List, Option };
