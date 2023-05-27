'use client';

import { useEffect } from 'react';

const RegisterServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  }, []);

  return null;
};

export default RegisterServiceWorker;
