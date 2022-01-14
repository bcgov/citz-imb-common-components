/** @format */

import { useEffect, useState, useCallback } from 'react';

export function Index() {
  const [state, setstate] = useState({ message: 'whatchoo talkin bout willis?' });

  const getSlam = useCallback(async () => {
    try {
      const response = await fetch('http://slam-api-ca94a8-dev.apps.silver.devops.gov.bc.ca');
      const body = await response.json();

      setstate(body);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getSlam();
  }, []);
  return <div>Backend: {state?.message}</div>;
}

export default Index;
