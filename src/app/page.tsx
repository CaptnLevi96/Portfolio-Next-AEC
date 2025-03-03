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
                
                <button className="group border-2 border-[#40c057] text-[#1a472a] px-10 py-4 rounded-full hover:bg-[#40c057] hover:text-white transition-all hover:shadow-lg relative overflow-hidden">
                  <span className="relative z-10">Mon CV</span>
                  <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#40c057] to-[#69db7c] transition-all duration-300 group-hover:w-full -z-10"></div>
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
      title: "BlaBlaBla",
      description: "BlaBlaBla",
      image: "/motdepasse.png",
      category: "Design graphique / UI-UX",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://captnlevi96.github.io/Generateur-de-mot-de-passe/" 
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
      </div>
    </div>
    
  );
}