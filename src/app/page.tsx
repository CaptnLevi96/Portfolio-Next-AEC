"use client"

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Définition des types
type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
};

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
  
  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = useState<string>('Programmation');

  // Données des projets
  const projects: Project[] = [
    {
      title: "Site web d'une Pépinière",
      description: "Site d'une pépiniere avec un panier une barre recherche filtre et catégories",
      image: "/pepiniere.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Jeux avec tableau de score",
      description: "Jeux qui consiste a rammaser une clé, éviter les ennemies et attendre la porte",
      image: "/jeux.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript", "NodeJS"]
    },
    {
      title: "Liste à faire",
      description: "Liste à faire dévéloppé avec Inteliji IDEA à l'aide de la librairie REACT.",
      image: "/list.png",
      category: "Programmation",
      tags: ["React", "CSS", "IntelliJ IDEA"]
    },
    {
      title: "Quizz sur la géographie",
      description: "Un quiz interactif en HTML, CSS et JavaScript avec questions aléatoires. 🚀",
      image: "/quiz.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Librarie La Ravelle",
      description: "Site web transactionnel d'une bibliothèque produite avec la librairie Laravel",
      image: "/laravelle.png",
      category: "Programmation",
      tags: ["MySQL", "PHP", "Tailwind", "JavaScript"]
    },
    {
      title: "Générateur de mot de passe",
      description: "Application servant à créer des mots de passe sécurisés et aléatoires en un clic pour renforcer ta protection en ligne",
      image: "/motdepasse.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript"] 
    }
   
  ];


  // Reste du code...
  
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
      
      if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      }
      setLastScrollY(currentScrollY);

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
          font-bold
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

            <li>
              <a 
                href="#projects" 
                className="hover:text-[#40c057] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Projets
              </a>
            </li>
            
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
              <span className="text-[#40c057] block mb-4 relative animate-float">
                Bonjour!, Je suis
                {/* Ajout d'éléments décoratifs */}
              </span>
              <span className="text-[#1a472a] min-h-[1.2em] block relative">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-#1f4b2e mb-10 text-xl leading-relaxed font-normal">
           Développeur web passionné par la création d'expériences digitales innovantes. Fort d'une formation en infographie et en développement web, je combine créativité visuelle et expertise technique pour donner vie à des projets web uniques.<br/> <br/>Mon parcours polyvalent me permet d'apporter une vision globale, de la conception graphique à l'implémentation technique.
          </p>
                <div className="flex gap-6">
                <button className="group bg-[#40c057] text-white px-10 py-4 rounded-full hover:bg-[#2b8a3e] transition-all hover:shadow-lg relative overflow-hidden">
                  <span className="relative z-10">Me Contacter</span>
                  <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#69db7c] to-[#40c057] transition-all duration-300 group-hover:w-full"></div>
                </button>
                <a 
  href="/LeviLosekeCV.pdf" 
  download
                className="group border-2 border-[#40c057] text-[#1a472a] px-10 py-4 rounded-full hover:bg-[#40c057] hover:text-white transition-all hover:shadow-lg relative overflow-hidden inline-flex items-center justify-center"
              >
                <span className="relative z-10">Télécharger mon CV</span>
                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#40c057] to-[#69db7c] transition-all duration-300 group-hover:w-full -z-10"></div>
              </a>

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
    <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#40c057] to-[#69db7c] text-transparent bg-clip-text animate-gradient">
      Mon parcours professionnel
    </h2>

<p className="text-gray-300 text-center text-xl max-w-3xl mx-auto mb-4">
  Mon expérience professionnelle diversifiée m'a permis de développer des compétences variées, de l'infographie à la gestion de projet, en passant par le service client et la production.
</p>
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
    <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#9bb4f9] to-[#6a7fb8] text-transparent bg-clip-text animate-gradient">
      Mon parcours académique
    </h2>
    <p className="text-gray-300 text-center text-xl max-w-3xl mx-auto mb-12">
      Ma formation combine créativité et technique, avec une spécialisation en développement web qui complète parfaitement mes compétences en design graphique.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 relative">
        {/* Ligne de temps verticale */}
        <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#9bb4f9] to-[#9bb4f9] rounded-full"></div>

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
            <div className="absolute left-5 w-3 h-3 bg-[#9bb4f9] rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:bg-[#9bb4f9]"></div>

            <div className="bg-[#1a1b83]/80 backdrop-blur-sm p-6 rounded-xl 
                          transition-all duration-300 transform hover:-translate-y-2 
                          hover:shadow-xl hover:shadow-[#40c057]/20 
                          hover:bg-[#2a2a8a] border border-[#40c057]/20">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#9bb4f9 group-hover:text-[#b7c9fa] transition-colors">
                    {edu.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-[#40c057]/20 rounded-full text-[#9bb4f9]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-[#9bb4f9]/90 text-lg mb-2">{edu.school}</p>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {edu.description}
                </p>
                
                {/* Tags de compétences */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full
                               text-[#9bb4f9] hover:bg-[#40c057]/20 transition-all
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

{/* Section Compétences */}
<section className="min-h-screen bg-gradient-to-b from-[#2a2a6a] to-[#1a1a4f] text-white py-20">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#6a7fb8] to-[#9370db] text-transparent bg-clip-text animate-gradient">
      Mes compétences
    </h2>
    
    <p className="text-gray-300 text-center text-xl max-w-3xl mx-auto mb-16">
      Au fil de mes expériences et formations, j'ai développé une expertise technique approfondie, combinant programmation, design et outils digitaux pour créer des solutions web complètes.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* PROGRAMMATION */}
      <div className="group lg:row-span-2">
        <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-8 rounded-2xl 
                    border border-[#6a7fb8]/20 transition-all duration-300
                    hover:transform hover:-translate-y-2 hover:shadow-xl
                    hover:shadow-[#6a7fb8]/20 hover:bg-[#2a2a4f]">
          <h3 className="text-3xl font-bold mb-6 text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
            Programmation
          </h3>
          <div className="space-y-4">
            {[
              { name: "HTML", level: 90 },
              { name: "CSS", level: 85 },
              { name: "JavaScript", level: 80 },
              { name: "React", level: 70 },
              { name: "Node.js", level: 70 },
              { name: "Next.js", level: 75 },
              { name: "TypeScript", level: 65 },
              { name: "MySQL", level: 80 },
              { name: "MongoDB", level: 60 },
              { name: "PHP", level: 50 },
              { name: "Laravel", level: 65 },
              { name: "Docker", level: 40 }
            ].map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-[#1a1a3f] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#6a7fb8] to-[#9370db] rounded-full
                             transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESIGN */}
      <div className="group">
        <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-8 rounded-2xl 
                    border border-[#6a7fb8]/20 transition-all duration-300
                    hover:transform hover:-translate-y-2 hover:shadow-xl
                    hover:shadow-[#6a7fb8]/20 hover:bg-[#2a2a4f]">
          <h3 className="text-3xl font-bold mb-6 text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
            Design
          </h3>
          <div className="space-y-4">
            {[
              { name: "Adobe Photoshop", level: 95 },
              { name: "Adobe Illustrator", level: 95 },
              { name: "Adobe InDesign", level: 90 },
              { name: "Adobe XD", level: 90 },
              { name: "Figma", level: 90 }
            ].map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-[#1a1a3f] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#6a7fb8] to-[#9370db] rounded-full
                             transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AUTRES */}
      <div className="group">
        <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-8 rounded-2xl 
                    border border-[#6a7fb8]/20 transition-all duration-300
                    hover:transform hover:-translate-y-2 hover:shadow-xl
                    hover:shadow-[#6a7fb8]/20 hover:bg-[#2a2a4f]">
          <h3 className="text-3xl font-bold mb-6 text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
            Autres
          </h3>
          <div className="space-y-4">
            {[
              { name: "Office 365", level: 85 },
              { name: "Wordpress", level: 85 },
              { name: "Git", level: 70 },
              { name: "SEO", level: 65 },
              { name: "UI/UX Design", level: 80 }
            ].map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-[#1a1a3f] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#6a7fb8] to-[#9370db] rounded-full
                             transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image sous Design et Autres */}
      <div className="lg:col-span-2">
        <div className="relative group">
          <Image
            src="/skills-image.svg"
            alt="Skills illustration"
            width={600}
            height={0}
            className="rounded-[50px] transition-all duration-500
                     group-hover:shadow-[0_20px_50px_rgba(106,127,184,0.3)]
                     group-hover:scale-105 ml-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6a7fb8]/20 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500
                       rounded-[50px] ml-20"></div>
        </div>
      </div>
    </div>
  </div>
  
</section>

{/* Section Projets */}
<section id="projects" className="min-h-screen bg-[#E6FFE6] py-20">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#1a472a] to-[#40c057] text-transparent bg-clip-text animate-gradient">
      Mes projets
    </h2>
    <p className="text-[#1a472a] text-center text-xl max-w-3xl mx-auto mb-16">
      Découvrez une sélection de mes réalisations qui illustrent mon expertise en développement web et en design. Chaque projet représente un défi unique relevé avec créativité et rigueur technique.
    </p>

    {/* Filtres */}
    <div className="flex justify-center gap-4 mb-12 font-bold">
      {['Programmation', 'Design graphique / UI-UX'].map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-[#40c057] text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

{/* Grille de projets */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Site web d'une Pépinière",
      description: "Site d'une pépiniere avec un panier une barre recherche filtre et catégories.",
      image: "/pepiniere.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://captnlevi96.github.io/Projet-pepiniere/Index.html"
    },
    {
      title: "Jeux avec tableau de score",
      description: "Jeux qui consiste a rammaser une clé, éviter les ennemies et attendre la porte.",
      image: "/jeux.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      url: "https://github.com/CaptnLevi96/Projet-Jeux-La-Porte"
    },
    {
      title: "Liste à faire",
      description: "Liste à faire dévéloppé avec Inteliji IDEA à l'aide de la librairie REACT.",
      image: "/list.png",
      category: "Programmation",
      tags: ["React", "CSS", "IntelliJ IDEA"],
      url: "https://github.com/CaptnLevi96/liste-de-tache" 
    },
    {
      title: "Quizz sur la géographie",
      description: "Un quiz interactif en HTML, CSS et JavaScript avec questions aléatoires. 🚀",
      image: "/quiz.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://captnlevi96.github.io/Quiz-geographie/" 
    },
    {
      title: "Librarie La Ravelle",
      description: "Site web transactionnel d'une bibliothèque produite avec la librairie Laravel.",
      image: "/laravelle.png",
      category: "Programmation",
      tags: ["MySQL", "PHP", "Tailwind", "JavaScript", "MySQL"],
      url: "https://github.com/CaptnLevi96/ProjetLaravel1" 
    },
    {
      title: "Benactor",
      description: "Développement d'une application web moderne permettant la coordination entre organisations et bénévoles.",
      image: "/benactor.png",
      category: "Programmation",
      tags: ["Next.js", "Drizzle", "Hono","PostgresQL"],
      url: "https://www.benactor.com/" 
    },
    {
      title: "The Motherland",
      description: "Une illustration célébrant l’Afrique, son identité et sa culture. Fusion de symboles, couleurs panafricaines et éléments graphiques pour un hommage vibrant au continent. 🌍🎨",
      image: "/africa.png",
      category: "Design graphique / UI-UX",
      tags: ["Figma", "Adobe Illustrator"],
      url: "https://www.behance.net/gallery/202984359/Native-Motherland" 
    },
    {
      title: "Recolte",
      description: "Moodboard et maquette finale de d'un site web d'une épicerie biologique.",
      image: "/recolte.png",
      category: "Design graphique / UI-UX",
      tags: ["Figma"],
      url: "https://www.behance.net/gallery/201731649/Maquette-pour-Epicerie-biologique-Recette" 
    },
    {
      title: "Je t'aime",
      description: "Fresque multilingue d'une mosaïque conçue avec la phrase j'aime pour la salle de réception La Sirène à Laval.",
      image: "/sirene.png",
      category: "Design graphique / UI-UX",
      tags: ["Adobe Illustrator"],
      url: "https://www.behance.net/gallery/183773141/I-love-you-Mozaic"
    },
    

    {
      title: "Buqs",
      description: "Conception UI/UX de Buqs, une application de livres numériques offrant une navigation intuitive, une interface moderne et des options de lecture personnalisables.",
      image: "/buqs.png",
      category: "Design graphique / UI-UX",
      tags: ["Figma"],
      url: "https://www.behance.net/gallery/195433225/UIUX-design-for-a-e-book-application-named-Buqs" 
    },

    {
      title: "Poster Art tridimensionnelle",
      description: "Une illustration dynamique mettant en avant l’art 3D, avec une typographie métallisée, des formes flottantes et un fond cosmique vibrant.",
      image: "/3D.png",
      category: "Design graphique / UI-UX",
      tags: ["Adobe Illustrator", "Adobe Photoshop"],
      url: "https://www.behance.net/gallery/203123971/3D-Art-Poster" 
    },

    {
      title: "Ancien portfolio mobile",
      description: "La maquette moodboard Figma de mon ancien portfolio de développeur web, que j'avais conçue avant en utilisant HTML, CSS et JavaScript.",
      image: "/portfolio.png",
      category: "Design graphique / UI-UX",
      tags: ["Figma",  "Adobe Photoshop"],
      url: "https://www.behance.net/gallery/220772947/Mobile-portfolio-template" 
    }



  ].filter((project) => project.category === activeFilter)
    .map((project, index) => (
      <div
        key={index}
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
        >
        {/* Image du projet */}
        <div className="h-48 bg-gray-300 relative group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#40c057]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
              onClick={() => window.open(project.url, '_blank')} 
              className="bg-white text-[#40c057] px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              Voir le projet
            </button>
          </div>
        </div>

        {/* Contenu du projet */}
        <div className="p-6 flex flex-col flex-grow">

          <h3 className="text-xl font-bold text-[#1a472a] mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-sm px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
</div>
  </div>
</section>
{/* Section Contact */}
<section id="contact" className="min-h-screen bg-gradient-to-b from-[#E6FFE6] to-[#c8e6c9] py-20">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#1a472a] to-[#40c057] text-transparent bg-clip-text animate-gradient">
      Me contacter
    </h2>
    
    <p className="text-[#1a472a] text-center text-xl max-w-3xl mx-auto mb-16">
      Vous avez un projet en tête ou vous souhaitez simplement échanger ? N'hésitez pas à me contacter, je serais ravi de discuter avec vous !
    </p>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Formulaire de contact */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Envoyez-moi un message</h3>
        
        <form className="space-y-6" onSubmit={(e) => {
          e.preventDefault();
          // Ici, vous implémenteriez la logique d'envoi du formulaire
          // Pour l'instant, simulons juste une alerte de succès
          alert("Message envoyé avec succès !");
          // Réinitialiser le formulaire
          (e.target as HTMLFormElement).reset();
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-[#1a472a] font-medium mb-2">Nom</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[#1a472a] font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all"
                placeholder="votre@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-[#1a472a] font-medium mb-2">Sujet</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all"
              placeholder="Sujet de votre message"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-[#1a472a] font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all resize-none"
              placeholder="Votre message..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="group bg-[#40c057] text-white px-8 py-3 rounded-full hover:bg-[#2b8a3e] transition-all duration-300 hover:shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Envoyer le message</span>
            <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#69db7c] to-[#40c057] transition-all duration-300 group-hover:w-full"></div>
          </button>
        </form>
      </div>
      
      {/* Informations de contact et réseaux sociaux */}
      <div className="space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Mes coordonnées</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#40c057]/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-[#40c057]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <a href="mailto:Levilo97@outlook.com" className="text-[#1a472a] hover:text-[#40c057] transition-colors">Levilo97@outlook.com</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-[#40c057]/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-[#40c057]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500">Téléphone</p>
                <a href="tel:+1234567890" className="text-[#1a472a] hover:text-[#40c057] transition-colors">(438)-233-3595</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-[#40c057]/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-[#40c057]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500">Localisation</p>
                <p className="text-[#1a472a]">Laval, Québec, Canada</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Réseaux sociaux */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Suivez-moi</h3>
          
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#40c057]/10 p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/CaptnLevi96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#40c057]/10 p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            
            {/* Behance */}
            <a 
              href="https://www.behance.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#40c057]/10 p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.803 5.296c.588 0 1.12.034 1.596.103.477.069.885.196 1.225.382.34.187.602.436.79.75.186.311.28.705.28 1.175 0 .525-.132.986-.396 1.386-.262.4-.66.735-1.193 1.006.723.221 1.262.592 1.619 1.113.354.522.533 1.155.533 1.9 0 .522-.101.986-.303 1.393-.202.407-.476.747-.825 1.02-.349.268-.758.472-1.227.609-.47.134-.977.202-1.524.202H3.204V5.296h4.599zm-.25 3.809c.487 0 .89-.103 1.214-.308.322-.205.484-.56.484-1.064 0-.27-.054-.496-.16-.675-.109-.179-.258-.32-.445-.423-.187-.103-.407-.173-.658-.211-.254-.042-.525-.064-.814-.064H5.617v2.745h1.936zm.126 4.029c.317 0 .607-.03.872-.09a1.83 1.83 0 0 0 .66-.277c.182-.128.323-.3.427-.519.103-.218.154-.492.154-.819 0-.656-.184-1.126-.553-1.409-.369-.283-.866-.425-1.494-.425H5.617v3.54h2.062zM16.842 14.882c.327.347.81.52 1.448.52.451 0 .843-.112 1.173-.333.329-.224.533-.463.607-.718h2.005c-.321 1-.81 1.714-1.465 2.144-.656.43-1.447.645-2.372.645-.643 0-1.223-.103-1.738-.308a3.76 3.76 0 0 1-1.332-.882 3.925 3.925 0 0 1-.852-1.378c-.2-.536-.301-1.13-.301-1.782 0-.627.108-1.202.326-1.726.218-.523.52-.973.912-1.347.389-.375.853-.669 1.385-.88.535-.212 1.119-.318 1.752-.318.713 0 1.345.136 1.897.406.551.271 1.008.633 1.371 1.085.362.452.63.97.801 1.552.17.581.219 1.196.149 1.844H16.33c0 .633.165 1.137.491 1.484v.002zm2.882-4.945c-.291-.322-.783-.496-1.385-.496-.391 0-.715.065-.968.2-.254.134-.457.3-.61.499-.154.2-.261.412-.32.642-.058.226-.093.43-.101.608h3.965c-.057-.624-.29-1.13-.581-1.453zm-8.72 6.228V5.086h2.468v11.079h-2.468zM0 0h24v24H0z"/>
      </svg>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#40c057]/10 p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-[#1a472a] text-white py-8">
  <div className="max-w-7xl mx-auto px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-bold">[LEVI LOSEKE]</h3>
        <p className="text-gray-300 mt-2">Développeur web & Designer</p>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <a href="#home" className="hover:text-[#40c057] transition-colors">Accueil</a>
        <a href="#about" className="hover:text-[#40c057] transition-colors">À propos</a>
        <a href="#projects" className="hover:text-[#40c057] transition-colors">Projets</a>
        <a href="#contact" className="hover:text-[#40c057] transition-colors">Contact</a>
      </div>
    </div>
    
    <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Levi Loseke. Tous droits réservés.
      </p>
      
      <div className="flex space-x-4">
        <a 
          href="https://www.linkedin.com/" 
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
          href="https://www.behance.net/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#40c057] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.803 5.296c.588 0 1.12.034 1.596.103.477.069.885.196 1.225.382.34.187.602.436.79.75.186.311.28.705.28 1.175 0 .525-.132.986-.396 1.386-.262.4-.66.735-1.193 1.006.723.221 1.262.592 1.619 1.113.354.522.533 1.155.533 1.9 0 .522-.101.986-.303 1.393-.202.407-.476.747-.825 1.02-.349.268-.758.472-1.227.609-.47.134-.977.202-1.524.202H3.204V5.296h4.599zm-.25 3.809c.487 0 .89-.103 1.214-.308.322-.205.484-.56.484-1.064 0-.27-.054-.496-.16-.675-.109-.179-.258-.32-.445-.423-.187-.103-.407-.173-.658-.211-.254-.042-.525-.064-.814-.064H5.617v2.745h1.936zm.126 4.029c.317 0 .607-.03.872-.09a1.83 1.83 0 0 0 .66-.277c.182-.128.323-.3.427-.519.103-.218.154-.492.154-.819 0-.656-.184-1.126-.553-1.409-.369-.283-.866-.425-1.494-.425H5.617v3.54h2.062zM16.842 14.882c.327.347.81.52 1.448.52.451 0 .843-.112 1.173-.333.329-.224.533-.463.607-.718h2.005c-.321 1-.81 1.714-1.465 2.144-.656.43-1.447.645-2.372.645-.643 0-1.223-.103-1.738-.308a3.76 3.76 0 0 1-1.332-.882 3.925 3.925 0 0 1-.852-1.378c-.2-.536-.301-1.13-.301-1.782 0-.627.108-1.202.326-1.726.218-.523.52-.973.912-1.347.389-.375.853-.669 1.385-.88.535-.212 1.119-.318 1.752-.318.713 0 1.345.136 1.897.406.551.271 1.008.633 1.371 1.085.362.452.63.97.801 1.552.17.581.219 1.196.149 1.844H16.33c0 .633.165 1.137.491 1.484v.002zm2.882-4.945c-.291-.322-.783-.496-1.385-.496-.391 0-.715.065-.968.2-.254.134-.457.3-.61.499-.154.2-.261.412-.32.642-.058.226-.093.43-.101.608h3.965c-.057-.624-.29-1.13-.581-1.453zm-8.72 6.228V5.086h2.468v11.079h-2.468zM0 0h24v24H0z"/>
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