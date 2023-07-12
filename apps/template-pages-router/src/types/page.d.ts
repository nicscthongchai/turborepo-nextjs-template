import React, {
  ComponentType,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  Layout?: ComponentType<any> | React.FC<any>;
  getLayout?: (page: ReactElement) => ReactElement<any, any>;
};
