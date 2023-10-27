import { Container } from './styles';
import { SpinnerProps } from './type';

export function Spinner({ isActive }: SpinnerProps) {
  return <Container isActive={isActive} />;
}
