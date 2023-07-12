'use client';

import { ReactNode, useEffect } from 'react';

export type RootLayoutClientProps = {
  children?: ReactNode;
};

export const RootLayoutClient: React.FC<RootLayoutClientProps> = props => {
  const { children } = props;

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  }, []);

  return <>{children}</>;
};

export default RootLayoutClient;
