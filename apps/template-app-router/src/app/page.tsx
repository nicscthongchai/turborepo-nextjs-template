import { Button } from 'ui';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link href="https://nextjs.org/" target="_blank">
        <Button>Next.js</Button>
      </Link>
    </div>
  );
}
