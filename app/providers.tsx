import { PropsWithChildren } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <NuqsAdapter>{children}</NuqsAdapter>
    </>
  );
}
