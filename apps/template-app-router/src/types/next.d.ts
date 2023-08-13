declare type NextLayoutProps<Params = any> = {
  params: Params;
  children: React.ReactNode;
};

declare type NextPageProps<Params = any> = {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
};
