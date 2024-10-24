import Link from 'next/link';
import Image from 'next/image';
import boost from '../assets/boost.svg';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
<section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Transformez votre startup avec les bons outils, pas les plus chers</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Gagnez du temps, économisez de l&apos;argent et boostez votre productivité grâce à un accompagnement expert dans le choix et l&apos;optimisation de vos outils digitaux.</p>
            <Link href="/services" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-blue-600 dark:text-white rounded-lg hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                Nos offres
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                Prendre contact
            </Link> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={boost} alt="Boostez votre entreprise avec Techacm" />
        </div>                
    </div>
</section>
    </header>
  );
}
