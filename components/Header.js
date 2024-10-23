import Link from 'next/link';
import Image from 'next/image';
import TechACMLogo from './techacm-logo.svg';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-24 h-24 mx-auto mb-4">
        <Link href="/">
          <Image
            src={TechACMLogo}
            alt="TechACM Logo"
            width={96}
            height={96}
            className="rounded-full"
          />
        </Link>
      </div>
      <p className="text-2xl text-center dark:text-white">
        {name}
      </p>
    </header>
  );
}
