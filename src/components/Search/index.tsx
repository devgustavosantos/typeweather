import { Spinner } from '../Spinner';
import * as S from './styles';
import { useSearch } from './use';

export function Search() {
  const { isLoading, options } = useSearch();

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Input
          type="text"
          placeholder="Buscar local"
          isLoading={isLoading}
        />

        <Spinner isActive={isLoading} />
      </S.InputWrapper>

      <S.List>
        {options.map((city) => {
          return (
            <li key={city.id}>
              <S.Option>{city.name}</S.Option>
            </li>
          );
        })}
      </S.List>
    </S.Container>
  );
}
