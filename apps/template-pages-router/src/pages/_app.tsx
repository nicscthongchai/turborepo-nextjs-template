import { useEffect } from 'react';
import NoLayout from 'components/Layout/NoLayout';
import parseJson from 'lib/parseJson';
import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextPageWithLayout } from 'types/page';
import pkg from '~/package.json';
import 'styles/globals.css';

const NextApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps & { Component: NextPageWithLayout }
> = props => {
  const { Component, pageProps } = props;
  const enableServiceWorker = parseJson(
    process.env.NEXT_PUBLIC_ENABLE_SERVICE_WORKER
  );

  useEffect(() => {
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  const getLayout = Component.getLayout || (page => page);
  const Layout = Component.Layout || NoLayout;
  const appWithLayout = getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  return (
    <>
      <DefaultSeo
        defaultTitle={pkg.title}
        titleTemplate={`%s - ${pkg.title}`}
        description="Input your website description here."
      />
      {appWithLayout}
    </>
  );
};

export default NextApp;
