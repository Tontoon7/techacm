import Layout, { GradientBackground } from '../components/Layout';
import Navbar from '../components/Navbar'
import Link from 'next/link';
import { 
    Lightbulb, 
    Check,
    TrendingUp, 
    PiggyBank, 
    Workflow, 
    Clock, 
    Shield 
  } from 'lucide-react';


export default function Services() {
  return (
    <Layout>
        <Navbar/>
      <section id="features" class="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Nos services</h1>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Vous pouvez
        </p>
    </div>
    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div
            class="h-[250px] overflow-hidden rounded-lg border bg-small dark:bg-large select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex items-center justify-center mb-4"> 
                <TrendingUp className="h-12 w-12 text-current" />
              </div>
                <div class="space-y-2">
                    <h3 class="font-bold">ROI Garanti</h3>
                    <p class="text-sm text-muted-foreground">Réalisez en moyenne 30% d&apos;économies sur vos outils digitaux tout en augmentant votre productivité dès les 3 premiers mois.</p>
                </div>
            </div>
        </div>

        <div
            class="h-[250px] overflow-hidden rounded-lg border bg-small dark:bg-larg select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex items-center justify-center mb-4">
                <PiggyBank className="h-12 w-12 text-current" />
              </div>
                <div class="space-y-2">
                    <h3 class="font-bold">Solutions Économiques</h3>
                    <p class="text-sm">Découvrez les alternatives performantes qui vous feront économiser entre 40% et 60% sur votre budget technologique annuel.</p>
                </div>
            </div>
        </div>

        <div
            class="h-[250px] overflow-hidden rounded-lg border bg-small dark:bg-larg select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="flex items-center justify-center mb-4"> 
                  <Workflow className="h-12 w-12 text-current" />
                </div>
                <div class="space-y-2">
                    <h3 class="font-bold">Automatisation Sur Mesure</h3>
                    <p class="text-sm text-muted-foreground">Gagnez jusqu&apos;à 15h par semaine grâce à l&apos;automatisation intelligente de vos tâches répétitives et de vos processus métier.</p>
                </div>
            </div>
        </div>

        <div
            class="h-[250px] overflow-hidden rounded-lg border bg-small dark:bg-larg select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex items-center justify-center mb-4"> 
                <Clock className="h-12 w-12 text-current" />
              </div>
                <div class="space-y-2">
                    <h3 class="font-bold">Mise en Place</h3>
                    <p class="text-sm text-muted-foreground">Profitez d&apos;une méthodologie éprouvée permettant une implémentation très rapide adaptée à votre projet.</p>
                </div>
            </div>
        </div>

        <div
            class="h-[250px] overflow-hidden rounded-lg border bg-small dark:bg-larg select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex items-center justify-center mb-4"> 
                <Lightbulb className="h-12 w-12 text-current" />
              </div>
                <div class="space-y-2">
                    <h3 class="font-bold">Support Dédié</h3>
                    <p class="text-sm text-muted-foreground">Un accompagnement personnalisé pour vous assurer un succès optimal même après la fin du projet.</p>
                </div>
            </div>
        </div>

        <div
            class="h-[250px] overflow-hidden rounded-lg border bg-small dark:bg-larg select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-current" />
              </div>
                <div class="space-y-2">
                    <h3 class="font-bold">Expertise Reconnue</h3>
                    <p class="text-sm text-muted-foreground">Plusieurs années d&apos;expertise en solutions digitales et d&apos;une veille constante sur plus de 300 outils testés et évalués pour votre secteur.</p>
                </div>
            </div>
        </div>

    </div>

</section>

<div className="pt-5" id="pricing">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-indigo-400">Nos Services</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Un accompagnement adapté à chaque étape de votre croissance
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-900 dark:text-white">
          Choisissez la formule qui correspond le mieux à vos besoins actuels
        </p>
        
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Audit Digital Express */}
          <div className="ring-1 ring-white/10 hover:ring-indigo-500 hover:ring-2 hover:shadow-indigo-500 hover:scale-105 transition-all duration-300 rounded-3xl p-8 xl:p-10 bg-small dark:bg-large">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="tier-audit" className="text-lg font-semibold leading-8 text-black dark:text-white">Audit Digital Express</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-900 dark:text-white">
              Un diagnostic complet de votre infrastructure digitale en une semaine
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-black dark:text-white">1 500€</span>
              <span className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">HT</span>
            </p>
            <Link href="/contact" className="bg-white/10 text-black dark:text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Réserver un audit
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-900 dark:text-white xl:mt-10">
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Analyse de vos outils actuels
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Identification des optimisations
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Recommandations détaillées
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Livraison en 5 jours
              </li>
            </ul>
          </div>

          {/* Sprint d'Optimisation */}
          <div className="bg-small dark:bg-large ring-1 ring-white/10 hover:ring-indigo-500 hover:ring-2 hover:shadow-indigo-500 hover:scale-105 transition-all duration-300 rounded-3xl p-8 xl:p-10">
            <div className="flex items-baseline justify-between gap-x-4">
              <h2 id="tier-sprint" className="text-lg font-semibold leading-8 text-black dark:text-white">Sprint d&apos;Optimisation</h2>
              <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-black dark:text-white">Plus populaire</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-900 dark:text-white">
              Un mois d&apos;accompagnement intensif pour transformer vos outils
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-black dark:text-white">3 500€</span>
              <span className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">HT</span>
            </p>
            <Link href="/contact" className="bg-indigo-500 text-black dark:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Démarrer un sprint
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-900 dark:text-white xl:mt-10">
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Audit initial approfondi
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Mise en place des solutions
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Formation des équipes
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Support d&apos;implémentation
              </li>
            </ul>
          </div>

          {/* Transformation Digitale */}
          <div className="bg-small dark:bg-large ring-1 ring-white/10 hover:ring-indigo-500 hover:ring-2 hover:shadow-indigo-500 hover:scale-105 transition-all duration-300 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="tier-transform" className="text-lg font-semibold leading-8 text-black dark:text-white">Transformation Digitale</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-900 dark:text-white">
              Une transformation complète sur 3 mois pour automatiser vos processus
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-black dark:text-white">8 500€</span>
              <span className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">HT</span>
            </p>
            <Link href="/contact" className="bg-white/10 text-black dark:text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Lancer votre transformation
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-900 dark:text-white xl:mt-10">
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Audit complet et plan détaillé
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Automatisation des processus
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                Formation approfondie
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-black dark:text-white" />
                3 mois de support post-projet
              </li>
            </ul>
          </div>
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
