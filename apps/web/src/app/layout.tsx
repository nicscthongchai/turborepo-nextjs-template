import { Metadata } from 'next';
import 'styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: `Home - WebSiteName`,
    template: `%s - WebSiteName`,
  },
  description: 'Input your website description here.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="contents">{children}</body>
    </html>
  );
}
