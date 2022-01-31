/** @format */

import { useEffect, useState, useCallback } from 'react';
import { UITable } from '@CITZ-IMB/UITable';
export function Index() {
  const [state, setstate] = useState({ message: 'whatchoo talkin bout willis?' });

  const getSlam = useCallback(async () => {
    try {
      const response = await fetch(`${window.location.protocol}//${window.location.hostname}/api`);
      const body = await response.json();

      setstate(body);
    } catch (error) {
      console.log('error:', error);
    }
  }, []);

  useEffect(() => {
    getSlam();
  }, []);

  return <div><UITable></UITable></div>;
}

export default Index;
