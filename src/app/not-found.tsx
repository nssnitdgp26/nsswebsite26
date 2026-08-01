import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="premium-kicker">404</p>
        <h1 className="premium-heading mt-3 text-4xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">The page you are looking for is not part of the {siteConfig.name} website.</p>
        <Link href="/" className="mt-8 inline-flex rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground">Return home</Link>
      </div>
    </main>
  );
}
