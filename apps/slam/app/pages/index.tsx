/** @format */

import { useEffect, useState, useCallback } from 'react';

export function Index() {
  const [state, setstate] = useState({});

  const getSlam = useCallback(async () => {
    const response = await fetch('http://localhost:3333/api');
    const body = await response.json();

    setstate(body);
  }, []);

  useEffect(() => {
    getSlam();
  }, []);
  return <div>{JSON.stringify(state)}</div>;
}

export default Index;
