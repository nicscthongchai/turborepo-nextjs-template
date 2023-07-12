import { twMerge } from 'tailwind-merge';
import { Button } from 'ui';
import { MainLayout } from 'components/Layout/MainLayout';
import { useScreen } from 'hooks/useScreen';
import { NextSeo } from 'next-seo';
import { NextPageWithLayout } from 'types/page';

const IndexPage: NextPageWithLayout = () => {
  const { breakpoints, currentBreakpoint, width, height } = useScreen();
  return (
    <>
      <NextSeo title="Index Page" />

      <div className="flex h-screen flex-col items-center justify-center gap-y-5">
        <div className="text-2xl">Hello, world!</div>
        <div className="flex gap-5">
          {Object.keys(breakpoints).map(bp => {
            if (!breakpoints[bp as Breakpoint]) return null;
            return (
              <span
                key={bp}
                className={twMerge(currentBreakpoint === bp && 'font-bold')}
              >
                {bp}
              </span>
            );
          })}
        </div>
        <div className="text-base">
          Window: {width} <small>x</small> {height}
        </div>
        <div className="space-x-2.5">
          <Button>Button</Button>
        </div>
      </div>
    </>
  );
};

IndexPage.Layout = MainLayout;

export default IndexPage;
