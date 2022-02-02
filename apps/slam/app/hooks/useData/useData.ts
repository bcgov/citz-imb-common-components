/** @format */

import { useQuery, useQueryClient } from 'react-query';

// export interface UseData {}

export function useData(endpoint: string, getData) {
  const queryClient = useQueryClient();

  const queryResults = useQuery(endpoint, getData);

  console.log('queryResults', queryResults);

  return queryResults;
}

export default useData;
