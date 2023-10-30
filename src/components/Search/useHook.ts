import { MAXIMUM_NUMBER_OF_VISIBLE_OPTIONS } from './data';
import placeholder from './placeholder.json';

export function useSearch() {
  const isLoading = true;

  const options = placeholder.filter(
    (_, index) => index < MAXIMUM_NUMBER_OF_VISIBLE_OPTIONS,
  );

  return { isLoading, options };
}
