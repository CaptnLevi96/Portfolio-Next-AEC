"use client"

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const titles = ["Infographe", "Développeur web", "Designer web"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isShattering, setIsShattering] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sectionsVisible, setSectionsVisible] = useState({
    home: false,
    about: false
  });

  // Gestion de la séquence de chargement initiale
  useEffect(() => {
    setTimeout(() => {
      setIsShattering(true);
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setShowContent(true);
          setSectionsVisible(prev => ({ ...prev, home: true }));
        }, 500);
      }, 1000);
    }, 2000);
  }, []);

  // Gestion du scroll pour la navbar et la révélation des sections
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Gestion de la visibilité de la navbar
      if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      }
      setLastScrollY(currentScrollY);

      // Révélation des sections au scroll
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        if (aboutTop < window.innerHeight * 0.75) {
          setSectionsVisible(prev => ({ ...prev, about: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Effet de typing
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentTitle.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [titleIndex, displayText, isDeleting, titles]);

  return (
    <div className="relative">
      {/* Loader Screen */}
      {!isLoaded && (
        <div className={`fixed inset-0 flex items-center justify-center bg-[#1a472a] text-white z-[60] transition-all duration-1000 ${isShattering ? 'shatter' : ''}`}>
          <div className={`flex flex-col items-center justify-center text-8xl font-bold leading-tight ${isShattering ? 'loader' : ''}`}>
            <span className="mb-2">[LEVI LOSEKE]</span>
          </div>
        </div>
      )}

      {/* Header avec navigation */}
      <header 
        className={`
          py-4 
          fixed 
          left-1/2 
          -translate-x-1/2 
          bg-[#a4e0b0]/90 
          backdrop-blur-md 
          z-50 
          shadow-sm 
          rounded-full
          px-8
          mt-4
          transition-all 
          duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a 
                href="#home" 
                className="hover:text-[#40c057] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const homeSection = document.getElementById('home');
                  if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Accueil
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="hover:text-[#40c057] transition-colors" 
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                À propos
              </a>
            </li>
            <li><a href="#projects" className="hover:text-[#40c057] transition-colors">Projets</a></li>
            <li><a href="#contact" className="hover:text-[#40c057] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenu Principal */}
      <div>
        {/* Hero Section */}
        <section 
          id="home" 
          className={`
            min-h-screen 
            flex 
            items-center 
            bg-[#E6FFE6]
            transition-all 
            duration-1000 
            ease-in-out
            ${sectionsVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="max-w-7xl mx-auto px-8 pt-28">
            <div className="flex justify-between items-center gap-12">
              <div className="max-w-2xl">
                <h2 className="text-7xl font-bold mb-8 leading-tight">
                  <span className="text-[#40c057] block mb-4">Bonjour!, Je suis</span>
                  <span className="text-[#1a472a] min-h-[1.2em] block">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h2>
                <p className="text-gray-600 mb-10 text-xl leading-relaxed">
                  Développeur web passionné par la création d'expériences digitales innovantes.
                </p>
                <div className="flex gap-6">
                  <button className="bg-[#40c057] text-white px-10 py-4 rounded-full hover:bg-[#2b8a3e] transition-all hover:shadow-lg">
                    Me Contacter
                  </button>
                  <button className="border-2 border-[#40c057] text-[#1a472a] px-10 py-4 rounded-full hover:bg-[#40c057] hover:text-white transition-all hover:shadow-lg">
                    Mon CV
                  </button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/hero-image1.png"
                  alt="Developer illustration"
                  width={384}
                  height={384}
                  priority
                  className="w-96 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>


       {/* Experience Section */}
<section 
  id="about" 
  className={`
    min-h-screen 
    bg-gradient-to-b from-[#0a0a1f] to-[#1b1b55]
    text-white 
    py-20
    transition-all 
    duration-1000 
    ease-in-out
    ${sectionsVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `}
>
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#40c057] to-[#69db7c] text-transparent bg-clip-text animate-gradient">
      Mon parcours professionnel
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative flex justify-center">
        <div className="relative group">
          <Image
            src="/laptop-experience.png"
            alt="Laptop illustration"
            width={500}
            height={400}
            className="animate-float rounded-[50px] transition-all duration-500
                     group-hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)]
                     group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#40c057]/20 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500
                       rounded-[50px]"></div>
        </div>
      </div>

      <div className="space-y-8 relative">
        {/* Ligne de temps verticale */}
        <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#40c057] to-[#69db7c] rounded-full"></div>

        {[
          {
            title: "Infographe",
            company: "Flash Grafix",
            period: "Juin 2022 - Janvier 2024",
            description: "Création et conception graphique pour divers projets d'impression et de communication visuelle",
            skills: ["Adobe Suite", "Design", "Mise en page", "Gestion de projet", "Service client"]
          },
          {
            title: "Aide pressier",
            company: "SupremeX Inc.",
            period: "Mai 2022 - Juin 2022",
            description: "Support aux opérations d'impression et contrôle qualité",
            skills: ["Contrôle qualité", "Travail d'équipe", "Organisation"]
          },
          {
            title: "Préparateur de commandes",
            company: "Hose Power Canada",
            period: "Mai 2021 - Janvier 2022",
            description: "Gestion logistique et préparation précise des commandes clients",
            skills: ["Logistique", "Organisation", "Service client", "Gestion des stocks"]
          },
          {
            title: "Imprimeur sur presse numérique",
            company: "Bureau en gros",
            period: "Mai 2019 - Août 2019",
            description: "Production d'impressions numériques et service client personnalisé",
            skills: ["Impression numérique", "Service client", "Gestion du temps"]
          }
        ].map((exp, index) => (
          <div
            key={index}
            className="group relative pl-16 transition-all duration-500 hover:pl-20"
          >
            {/* Point sur la ligne de temps */}
            <div className="absolute left-5 w-3 h-3 bg-[#40c057] rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:bg-[#69db7c]"></div>

            <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-6 rounded-xl 
                        transition-all duration-300 transform hover:-translate-y-2 
                        hover:shadow-xl hover:shadow-[#40c057]/20 
                        hover:bg-[#2a2a4f] border border-[#40c057]/20">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#40c057] group-hover:text-[#69db7c] transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-[#40c057]/20 rounded-full text-[#40c057]">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#40c057]/90 text-lg mb-2">{exp.company}</p>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {exp.description}
                </p>
                
                {/* Tags de compétences */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full
                             text-[#40c057] hover:bg-[#40c057]/20 transition-all
                             transform hover:-translate-y-1 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Section Parcours Académique */}
<section className="min-h-screen bg-gradient-to-b from-[#1b1b55] to-[#2a2a6a] text-white py-20">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#40c057] to-[#69db7c] text-transparent bg-clip-text animate-gradient">
      Mon parcours académique
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 relative">
        {/* Ligne de temps verticale */}
        <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#40c057] to-[#69db7c] rounded-full"></div>

        {[
          {
            title: "AEC - Développement de sites web transactionnels",
            school: "Collège Ahuntsic",
            period: "2024 - 2025 (en cours)",
            description: "Formation approfondie en développement web et programmation",
            skills: ["React", "Node.js", "Next.js", "TypeScript", "SQL"]
          },
          {
            title: "DEC - Infographie en prémédia",
            school: "Collège Ahuntsic",
            period: "2022",
            description: "Formation en design graphique et production média",
            skills: ["Adobe Suite", "Design", "Mise en page", "Typographie"]
          },
          {
            title: "Diplôme d'étude secondaire",
            school: "École secondaire Horizon-Jeunesse",
            period: "2016",
            description: "Formation générale",
            skills: ["Travail d'équipe", "Communication", "Organisation"]
          }
        ].map((edu, index) => (
          <div
            key={index}
            className="group relative pl-16 transition-all duration-500 hover:pl-20"
          >
            {/* Point sur la ligne de temps */}
            <div className="absolute left-5 w-3 h-3 bg-[#40c057] rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:bg-[#69db7c]"></div>

            <div className="bg-[#1a1b83]/80 backdrop-blur-sm p-6 rounded-xl 
                          transition-all duration-300 transform hover:-translate-y-2 
                          hover:shadow-xl hover:shadow-[#40c057]/20 
                          hover:bg-[#2a2a8a] border border-[#40c057]/20">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#40c057] group-hover:text-[#69db7c] transition-colors">
                    {edu.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-[#40c057]/20 rounded-full text-[#40c057]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-[#40c057]/90 text-lg mb-2">{edu.school}</p>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {edu.description}
                </p>
                
                {/* Tags de compétences */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full
                               text-[#40c057] hover:bg-[#40c057]/20 transition-all
                               transform hover:-translate-y-1 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex justify-center">
        <div className="relative group">
          <Image
            src="/education-image.png"
            alt="Education illustration"
            width={500}
            height={400}
            className="animate-float rounded-[50px] transition-all duration-500
                       group-hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)]
                       group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#40c057]/20 to-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500
                         rounded-[50px]"></div>
        </div>
      </div>
    </div>
  </div>
</section>




        
      </div>
    </div>
  );
}