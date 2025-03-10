"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";


export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShattering, setIsShattering] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Gestion de la séquence de chargement initiale
  useEffect(() => {
    setTimeout(() => {
      setIsShattering(true);
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setShowContent(true);
        }, 500);
      }, 1000);
    }, 2000);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Loader Screen */}
      {!isLoaded && (
        <div className={`fixed inset-0 flex items-center justify-center bg-[#1a472a] text-white z-[60] transition-all duration-1000 ${isShattering ? 'shatter' : ''}`}>
          <div className={`flex flex-col items-center justify-center text-8xl font-bold leading-tight ${isShattering ? 'loader' : ''}`}>
            <span className="mb-2">[LEVI LOSEKE]</span>
          </div>
        </div>
      )}

      <div className={`min-h-screen flex flex-col bg-[#E6FFE6] transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex-grow py-20">
          <div className="max-w-7xl mx-auto px-8">
            {/* Bouton de retour */}
            <div className="mb-12">
  <Link href="/" legacyBehavior>
    <a className="bg-[#40c057] text-white px-6 py-3 rounded-full hover:bg-[#2b8a3e] transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2  font-bold">
      <FaArrowLeft />
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
                    <strong className="text-[#40c057]">Défis rencontrés:</strong> La création d'un système de mise en relation efficace entre organisations et bénévoles, ainsi que la gestion des calendriers et des disponibilités en temps réel. Un défi supplémentaire a été le manque de participation de l'un des coéquipiers, ce qui a nécessité une réorganisation des tâches et une adaptation rapide pour respecter les délais du projet.
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
        
        {/* Footer */}
        <footer className="bg-[#1a472a] text-white py-8 w-full mt-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">[LEVI LOSEKE]</h3>
                <p className="text-gray-300 mt-2">Infographe, Développeur web & Designer</p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Levi Loseke. Tous droits réservés.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/levi-loseke-183694238/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/CaptnLevi96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.behance.net/leviloseke2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0.5 94.187 511 323.626" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M206.729 238.87s48.358-3.59 48.358-60.297c0-56.711-39.563-84.387-89.678-84.387H.5v316.909h164.909s100.671 3.18 100.671-93.537c0 .001 4.389-78.688-59.351-78.688zm-53.19-88.357h11.87s22.416 0 22.416 32.973c0 32.969-13.183 37.749-28.136 37.749H73.161v-70.722h80.378zm7.21 204.257H73.161v-84.69h92.248s33.41-.438 33.41 43.522c0 37.068-24.954 40.888-38.07 41.168zm239.593-179.953c-121.873 0-121.765 121.766-121.765 121.766s-8.362 121.141 121.765 121.141c0 0 108.438 6.195 108.438-84.271h-55.768s1.86 34.068-50.81 34.068c0 0-55.777 3.738-55.777-55.135H510.64c0-.001 17.968-137.569-110.298-137.569zm-54.53 95.263s6.81-48.846 55.769-48.846c48.949 0 48.336 48.846 48.336 48.846H345.812zm117.096-118.199H332.159v-39.025h130.749v39.025z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}