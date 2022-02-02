/** @format */

import { act, renderHook } from '@testing-library/react-hooks';
import useData from './useData';

describe('useData', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useData());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
