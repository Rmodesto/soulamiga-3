
import Link from 'next/link';
import { monserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/assets/kthero1.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of site hero section"
      />
    </div>
  );
}
