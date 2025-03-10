import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#E6FFE6] py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Bouton de retour */}
        <div className="mb-12">
          <Link href="/" legacyBehavior>
            <a className="bg-[#40c057] text-white px-6 py-3 rounded-full hover:bg-[#2b8a3e] transition-all duration-300 hover:shadow-lg inline-flex items-center">
              Retour à la page principale
            </a>
          </Link>
        </div>
        
        {/* Titre et introduction */}
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#1a472a] to-[#40c057] text-transparent bg-clip-text">
          Détails de projets web
        </h1>
        
        <p className="text-[#1a472a] text-center text-xl max-w-3xl mx-auto mb-20">
          Bienvenue dans mon univers de développement web! Explorez ma collection de 
          projets et plongez dans les détails de chaque réalisation. Cliquez sur un projet pour 
          découvrir son histoire complète: les technologies que j'ai maîtrisées, les défis que j'ai 
          relevés et les solutions innovantes que j'ai créées.
        </p>
        
        {/* Liste des projets */}
        <div className="space-y-20">
          {/* Projet 1 */}
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src="/pepiniere.png"
                alt="Site web d'une Pépinière"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Site web d'une Pépinière</h2>
              <p className="text-gray-700 mb-6">
                Ce projet a consisté à créer un site complet pour une pépinière avec plusieurs fonctionnalités essentielles: un panier d'achat pour les clients, une barre de recherche efficace, ainsi que des filtres et catégories pour faciliter la navigation. 
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-[#40c057]">Défis rencontrés:</strong> L'implémentation d'un système de filtrage interactif qui maintient les performances du site et l'optimisation des images pour un temps de chargement rapide.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">HTML</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
              </div>
            </div>
          </div>
          
          {/* Projet 2 */}
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src="/jeux.png"
                alt="Jeux avec tableau de score"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Jeux avec tableau de score</h2>
              <p className="text-gray-700 mb-6">
                Ce jeu interactif propose une expérience engageante où les joueurs doivent ramasser une clé, éviter les ennemis, et atteindre une porte. Le tableau de score ajoute un élément compétitif qui encourage les utilisateurs à améliorer leurs performances.
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-[#40c057]">Défis rencontrés:</strong> La mise en place de collisions précises et d'une logique de jeu fluide. L'implémentation d'un système de score persistant a également nécessité une attention particulière.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">HTML</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Node.js</span>
              </div>
            </div>
          </div>
          
          {/* Projet 3 */}
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src="/list.png"
                alt="Liste à faire"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Liste à faire</h2>
              <p className="text-gray-700 mb-6">
                Application de gestion de tâches développée avec IntelliJ IDEA en utilisant la bibliothèque React. Cette application permet aux utilisateurs de créer, modifier et supprimer des tâches, avec une interface intuitive et réactive.
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-[#40c057]">Défis rencontrés:</strong> La gestion efficace de l'état avec React et l'implémentation d'une fonctionnalité de persistance des données pour que les tâches soient sauvegardées entre les sessions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">React</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">IntelliJ IDEA</span>
              </div>
            </div>
          </div>
          
          {/* Projet 4 */}
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src="/quiz.png"
                alt="Quizz sur la géographie"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Quizz sur la géographie</h2>
              <p className="text-gray-700 mb-6">
                Un quiz interactif sur la géographie mondiale avec des questions générées aléatoirement. Les utilisateurs peuvent tester leurs connaissances sur différents pays, capitales et caractéristiques géographiques.
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-[#40c057]">Défis rencontrés:</strong> La création d'un système de questions aléatoires qui évite les répétitions et la mise en place d'un mécanisme de scoring précis qui encourage les utilisateurs à réessayer.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">HTML</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
              </div>
            </div>
          </div>
          
          {/* Projet 5 */}
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src="/laravelle.png"
                alt="Librarie La Ravelle"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Librarie La Ravelle</h2>
              <p className="text-gray-700 mb-6">
                Site web transactionnel pour une bibliothèque, développé avec le framework Laravel. Ce projet offre une plateforme complète permettant aux utilisateurs de parcourir le catalogue, de réserver des livres et de gérer leurs emprunts.
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-[#40c057]">Défis rencontrés:</strong> L'implémentation d'un système d'authentification sécurisé et la création d'une base de données relationnelle optimisée pour gérer efficacement le catalogue et les transactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">MySQL</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">PHP</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Tailwind</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
              </div>
            </div>
          </div>
          
          {/* Projet 6 */}
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src="/benactor.png"
                alt="Benactor"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Benactor</h2>
              <p className="text-gray-700 mb-6">
                Développement d'une application web moderne qui facilite la coordination entre les organisations et les bénévoles. Benactor offre une plateforme où les organisations peuvent publier leurs besoins et les bénévoles peuvent offrir leur temps et leurs compétences.
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-[#40c057]">Défis rencontrés:</strong>  La création d'un système de mise en relation efficace entre organisations et bénévoles, ainsi que la gestion des calendriers et des disponibilités en temps réel. Un défi supplémentaire a été le manque de participation de l'un des coéquipiers, ce qui a nécessité une réorganisation des tâches et une adaptation rapide pour respecter les délais du projet.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Next.js</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Drizzle</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Hono</span>
                <span className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}