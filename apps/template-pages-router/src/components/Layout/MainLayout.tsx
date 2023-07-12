import { ReactNode } from 'react';

export type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = props => {
  const { children } = props;
  return <main>{children}</main>;
};
