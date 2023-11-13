import { SpinnerGap } from '@phosphor-icons/react';
import styled from 'styled-components';

import { SpinnerProps } from './type';

const Container = styled(SpinnerGap)<SpinnerProps>`
  color: ${({ theme }) => theme.BLUE_900};
  font-size: 32rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export { Container };
