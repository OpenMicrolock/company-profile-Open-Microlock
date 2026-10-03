'use client';
import Aos from 'aos';
import { useEffect } from 'react';
const AppProvidersWrapper = ({
  children
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {children}
    </>
  )

};
export default AppProvidersWrapper;