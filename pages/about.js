import Image from 'next/image';
import Navbar from '../components/Navbar';
import Layout, {GradientBackground} from '../components/Layout';
import boost from '../assets/boost.svg';
import target from '../assets/target.svg';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <Navbar />
      <h1 className="text-center text-4xl my-10 font-bold">L&apos;expertise derrière Techacm</h1>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image src={boost} alt="Trouvez le bon outil pour votre projet"/>
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase dark:text-gray-300">À propos de Techacm</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">Pourquoi nous faire <span className="text-indigo-600">confiance</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Je me présente, je m&apos;appelle Axel Chevenement. Depuis plusieurs années je travaille avec différentes startups et entreprises pour les accompagner dans leurs projets digitaux.
            </p>
            <br/>
            <p className="text-gray-700 dark:text-gray-300">
              Chaque projet est unique et nécessite une approche personnalisée avec des outils adaptés. Dans les startups, il y a une veritable problématique de budget et de ressources. Cela nous pousse donc à trouver le bon outil pour accomplir une tâche ou un projet. 
            </p>
          </div>
          <div className="text-center mt-10">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              <Link href="/contact">
                Contactez-nous
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-2/3 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase dark:text-gray-300">Un service sur mesure</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">Techacm travaille selon votre <span className="text-indigo-600">approche</span></h2>
            <p className="text-gray-700 dark:text-gray-300">La prolifération des outils digitaux crée souvent plus de confusion que de clarté. Au fil des années, j&apos;ai développé une expertise unique dans l&apos;analyse et la sélection des solutions technologiques. Je reste constamment à l&apos;affût des dernières innovations, testant personnellement chaque outil. Cette approche pratique me permet de comprendre en profondeur les forces et les limites de chaque solution, au-delà des promesses marketing.</p>
          </div>
        </div>
        <div className="sm:w-1/3 p-5">
            <div className="image object-center text-center">
                <Image src={target} alt="Techacm travaille selon votre approche"/>
            </div>
        </div>
      </div>
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}
