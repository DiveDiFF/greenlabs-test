import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { replace } = useRouter();
  useEffect(() => {
    replace("/product-list");
  }, [replace]);

  return <></>;
}
