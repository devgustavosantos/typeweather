import { Container } from './Spinner.styles';
import { SpinnerProps } from './Spinner.types';

export function Spinner({ isActive }: SpinnerProps) {
  return <Container isActive={isActive} />;
}
