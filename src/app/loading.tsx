export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center" aria-busy="true" aria-live="polite">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-primary" />
      <span className="sr-only">Loading page</span>
    </main>
  );
}
