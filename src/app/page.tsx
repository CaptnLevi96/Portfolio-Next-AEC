"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaArrowRight } from "react-icons/fa";

// Définition des types
type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  url?: string;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    home: false,
    about: false
  });
  

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Ce code ne s'exécute que côté client
    setIsDesktop(window.innerWidth > 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = useState<string>('Programmation');

  // Données des projets
  const projects: Project[] = [
    {
      title: "Site web d'une Pépinière",
      description: "Site d'une pépiniere avec un panier une barre recherche filtre et catégories",
      image: "/pepiniere.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://captnlevi96.github.io/Projet-pepiniere/Index.html"
    },
    {
      title: "Jeux avec tableau de score",
      description: "Jeux qui consiste a rammaser une clé, éviter les ennemies et attendre la porte",
      image: "/jeux.png",
      category: "Programmation",
      tags: ["HTML", "CSS", "JavaScript", "NodeJS"],
      url: "https://projet-jeux-la-porte-1.vercel.app/"
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
      description: "Site web transactionnel d'une bibliothèque produite avec la librairie Laravel",
      image: "/laravelle.png",
      category: "Programmation",
      tags: ["MySQL", "PHP", "Tailwind", "JavaScript"],
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
      description: "Une illustration célébrant l'Afrique, son identité et sa culture. Fusion de symboles, couleurs panafricaines et éléments graphiques pour un hommage vibrant au continent. 🌍🎨",
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
      image: "/LaSirene.png",
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
      description: "Une illustration dynamique mettant en avant l'art 3D, avec une typographie métallisée, des formes flottantes et un fond cosmique vibrant.",
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
      tags: ["Figma", "Adobe Photoshop"],
      url: "https://www.behance.net/gallery/220772947/Mobile-portfolio-template"
    }
  ];

  const formRef = useRef<HTMLFormElement>(null);
  
  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_l7a0gq2',    
      'template_c556s79',   
      formRef.current!,
      'i0XmF5NpB-1smVxNi'  
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      formRef.current?.reset();
    }, (error) => {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.");
    });
  };

  useEffect(() => {
    emailjs.init("i0XmF5NpB-1smVxNi");
  }, []);
  
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

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Ajouter l'écouteur d'événement uniquement si le menu est ouvert
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="relative">
      {/* Loader Screen */}
      {!isLoaded && (
        <div className={`fixed inset-0 flex items-center justify-center bg-[#1a472a] text-white z-[60] transition-all duration-1000 ${isShattering ? 'shatter' : ''}`}>
          <div className={`flex flex-col items-center justify-center text-4xl md:text-8xl font-bold leading-tight ${isShattering ? 'loader' : ''}`}>
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
          px-4 md:px-8
          mt-4
          transition-all 
          duration-300
          font-bold
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}
          w-[90%] md:w-auto
        `}
      >
        <nav className="flex items-center justify-between">
          {/* Logo/Nom - visible seulement sur mobile */}
          <div className="text-[#1a472a] font-bold text-lg md:hidden">
            [LEVI]
          </div>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="text-[#1a472a] p-2"
            >
              {!mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center">
            {/* Navigation principale */}
            <ul className="flex space-x-8 text-lg">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-[#40c057] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById('home');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
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
                    const section = document.getElementById('about');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
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
                    const section = document.getElementById('projects');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Projets
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-[#40c057] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById('contact');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
            
            {/* Sélecteur de langue */}
            <div className="ml-8 flex items-center">
              <Link 
                href="/en" 
                className="flex items-center px-3 py-1 bg-[#40c057]/10 rounded-full hover:bg-[#40c057]/20 transition-colors"
              >
                <span className="mr-1">🇬🇧</span>
                <span>EN</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu mobile overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a472a]/95 z-40 pt-24 pb-8 px-6 flex flex-col md:hidden">
          <nav className="flex flex-col items-center justify-center flex-grow">
            <ul className="flex flex-col space-y-6 text-xl text-center">
              <li>
                <a 
                  href="#home" 
                  className="text-white hover:text-[#40c057] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const section = document.getElementById('home');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-[#40c057] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const section = document.getElementById('about');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-white hover:text-[#40c057] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const section = document.getElementById('projects');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Projets
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white hover:text-[#40c057] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const section = document.getElementById('contact');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Sélecteur de langue */}
          <div className="mt-8 flex justify-center">
            <Link 
              href="/en" 
              className="flex items-center px-4 py-2 bg-[#40c057]/10 rounded-full hover:bg-[#40c057]/20 transition-colors text-white"
            >
              <span className="mr-2">🇬🇧</span>
              <span>English</span>
            </Link>
          </div>
        </div>
      )}

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
          <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-28">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                  <span className="text-[#40c057] block mb-2 md:mb-4 relative animate-float">
                    Bonjour!, Je suis
                  </span>
                  <span className="text-[#1a472a] min-h-[1.2em] block relative">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h2>
                <p className="text-#1f4b2e mb-8 md:mb-10 text-lg md:text-xl leading-relaxed font-normal">
                  Développeur web passionné par la création d'expériences digitales innovantes. Fort d'une formation en infographie et en développement web, je combine créativité visuelle et expertise technique pour donner vie à des projets web uniques.<br/> <br/>Mon parcours polyvalent me permet d'apporter une vision globale, de la conception graphique à l'implémentation technique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group bg-[#40c057] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#2b8a3e] transition-all hover:shadow-lg relative overflow-hidden w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10">Me contacter</span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#69db7c] to-[#40c057] transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <a 
                    href="/LeviLosekeCVFR.pdf" 
                    download
                    className="group border-2 border-[#40c057] text-[#1a472a] px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#40c057] hover:text-white transition-all hover:shadow-lg relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto"
                  >
                    <span className="relative z-10">Télécharger mon CV</span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#40c057] to-[#69db7c] transition-all duration-300 group-hover:w-full -z-10"></div>
                  </a>
                </div>
              </div>

              <div className="relative mx-auto md:mx-0 mt-8 md:mt-0">
                <Image
                  src="/hero-image1.png"
                  alt="Developer illustration"
                  width={384}
                  height={384}
                  priority
                  className="w-64 sm:w-80 md:w-96 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)] transition-all duration-300"
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
            py-12 md:py-20
            transition-all 
            duration-1000 
            ease-in-out
            ${sectionsVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#40c057] to-[#69db7c] text-transparent bg-clip-text animate-gradient">
              Mon parcours professionnel
            </h2>

            <p className="text-gray-300 text-center text-base md:text-xl max-w-3xl mx-auto mb-4">
              Mon expérience professionnelle diversifiée m'a permis de développer des compétences variées, de l'infographie à la gestion de projet, en passant par le service client et la production.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative flex justify-center order-2 md:order-1 mt-8 md:mt-0">
                <div className="relative group">
                  <Image
                    src="/laptop-experience.png"
                    alt="Laptop illustration"
                    width={500}
                    height={400}
                    className="animate-float rounded-[30px] md:rounded-[50px] transition-all duration-500
                             group-hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)]
                             group-hover:scale-105 w-full max-w-xs md:max-w-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#40c057]/20 to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500
                               rounded-[30px] md:rounded-[50px]"></div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8 relative order-1 md:order-2">
                {/* Ligne de temps verticale */}
                <div className="absolute left-4 md:left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#40c057] to-[#69db7c] rounded-full"></div>

                {[
  {
    title: "Stagiaire Analyste Web",
    company: "Le Magasin des Commerçants S&P Ltée",
    period: "Mars 2025 - Mai 2025",
    description: "Audit SEO technique et recommandations pour l'amélioration du site e-commerce",
    skills: ["SEO", "UX/UI", "Accessibilité web", "Analyse technique", "Documentation"]
  },
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
    className="group relative pl-12 md:pl-16 transition-all duration-500 hover:pl-14 md:hover:pl-20"
  >
    {/* Point sur la ligne de temps */}
    <div className="absolute left-3 md:left-5 w-3 h-3 bg-[#40c057] rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:bg-[#69db7c]"></div>

    <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl 
                transition-all duration-300 transform hover:-translate-y-2 
                hover:shadow-xl hover:shadow-[#40c057]/20 
                hover:bg-[#2a2a4f] border border-[#40c057]/20">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-[#40c057] group-hover:text-[#69db7c] transition-colors">
            {exp.title}
          </h3>
          <span className="text-sm px-3 py-1 bg-[#40c057]/20 rounded-full text-[#40c057] w-fit mt-1 md:mt-0">
            {exp.period}
          </span>
        </div>
        <p className="text-[#40c057]/90 text-base md:text-lg mb-2">{exp.company}</p>
        <p className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
          {exp.description}
        </p>
        
        {/* Tags de compétences */}
        <div className="flex flex-wrap gap-2 mt-3">
          {exp.skills.map((skill, idx) => (
            <span 
              key={idx}
              className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#40c057]/10 rounded-full
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
      <section className="min-h-screen bg-gradient-to-b from-[#1b1b55] to-[#2a2a6a] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#9bb4f9] to-[#6a7fb8] text-transparent bg-clip-text animate-gradient">
            Mon parcours académique
          </h2>
          <p className="text-gray-300 text-center text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
            Ma formation combine créativité et technique, avec une spécialisation en développement web qui complète parfaitement mes compétences en design graphique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 relative order-1">
              {/* Ligne de temps verticale */}
              <div className="absolute left-4 md:left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#9bb4f9] to-[#9bb4f9] rounded-full"></div>

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
                  className="group relative pl-12 md:pl-16 transition-all duration-500 hover:pl-14 md:hover:pl-20"
                >
                  {/* Point sur la ligne de temps */}
                  <div className="absolute left-3 md:left-5 w-3 h-3 bg-[#9bb4f9] rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:bg-[#9bb4f9]"></div>

                  <div className="bg-[#1a1b83]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl 
                                transition-all duration-300 transform hover:-translate-y-2 
                                hover:shadow-xl hover:shadow-[#40c057]/20 
                                hover:bg-[#2a2a8a] border border-[#40c057]/20">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-[#9bb4f9] group-hover:text-[#b7c9fa] transition-colors">
                          {edu.title}
                        </h3>
                        <span className="text-sm px-3 py-1 bg-[#40c057]/20 rounded-full text-[#9bb4f9] w-fit mt-1 md:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-[#9bb4f9]/90 text-base md:text-lg mb-2">{edu.school}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                        {edu.description}
                      </p>
                      
                      {/* Tags de compétences */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#40c057]/10 rounded-full
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

            <div className="relative flex justify-center order-2 mt-8 md:mt-0">
              <div className="relative group">
                <Image
                  src="/education-image.png"
                  alt="Education illustration"
                  width={500}
                  height={400}
                  className="animate-float rounded-[30px] md:rounded-[50px] transition-all duration-500
                             group-hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)]
                             group-hover:scale-105 w-full max-w-xs md:max-w-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#40c057]/20 to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500
                               rounded-[30px] md:rounded-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="min-h-screen bg-gradient-to-b from-[#2a2a6a] to-[#1a1a4f] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#6a7fb8] to-[#9370db] text-transparent bg-clip-text animate-gradient">
            Mes compétences
          </h2>
          
          <p className="text-gray-300 text-center text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-16">
            Au fil de mes expériences et formations, j'ai développé une expertise technique approfondie, combinant programmation, design et outils digitaux pour créer des solutions web complètes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* PROGRAMMATION */}
            <div className="group">
              <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl 
                          border border-[#6a7fb8]/20 transition-all duration-300
                          hover:transform hover:-translate-y-2 hover:shadow-xl
                          hover:shadow-[#6a7fb8]/20 hover:bg-[#2a2a4f]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                  Programmation
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {/* Afficher seulement les compétences les plus importantes sur mobile */}
                  {[
                    { name: "HTML", level: 90 },
                    { name: "CSS", level: 85 },
                    { name: "JavaScript", level: 80 },
                    { name: "React", level: 70 },
                    { name: "Node.js", level: 70 },
                    { name: "Next.js", level: 75 },
                    ...(showAllSkills || isDesktop ? [
                      { name: "TypeScript", level: 65 },
                      { name: "MySQL", level: 80 },
                      { name: "MongoDB", level: 60 },
                      { name: "PHP", level: 50 },
                      { name: "Laravel", level: 65 },
                      { name: "Docker", level: 40 }
                    ] : [])
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
                  {/* Bouton pour voir plus sur mobile */}
                  <button 
                    className="text-[#6a7fb8] hover:text-[#9370db] mt-4 text-sm underline md:hidden"
                    onClick={() => setShowAllSkills(!showAllSkills)}
                  >
                    {showAllSkills ? "Voir moins" : "Voir toutes les compétences"}
                  </button>
                </div>
              </div>
            </div>

            {/* DESIGN */}
            <div className="group">
              <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl 
                          border border-[#6a7fb8]/20 transition-all duration-300
                          hover:transform hover:-translate-y-2 hover:shadow-xl
                          hover:shadow-[#6a7fb8]/20 hover:bg-[#2a2a4f]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                  Design
                </h3>
                <div className="space-y-3 md:space-y-4">
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
              <div className="bg-[#1a1a3f]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl 
                          border border-[#6a7fb8]/20 transition-all duration-300
                          hover:transform hover:-translate-y-2 hover:shadow-xl
                          hover:shadow-[#6a7fb8]/20 hover:bg-[#2a2a4f]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#6a7fb8] group-hover:text-[#9370db] transition-colors">
                  Autres
                </h3>
                <div className="space-y-3 md:space-y-4">
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
          </div>

          {/* Image sous compétences */}
          <div className="mt-10 md:mt-16">
            <div className="relative group">
              <Image
                src="/skills-image.svg"
                alt="Skills illustration"
                width={600}
                height={0}
                className="rounded-[30px] md:rounded-[50px] transition-all duration-500
                         group-hover:shadow-[0_20px_50px_rgba(106,127,184,0.3)]
                         group-hover:scale-105 mx-auto md:ml-20 w-full max-w-sm md:max-w-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#6a7fb8]/20 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500
                           rounded-[30px] md:rounded-[50px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="min-h-screen bg-[#E6FFE6] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-[#1a472a] to-[#40c057] text-transparent bg-clip-text animate-gradient">
            Mes projets
          </h2>
          <p className="text-[#1a472a] text-center text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-16">
            Découvrez une sélection de mes réalisations qui illustrent mon expertise en développement web et en design. Chaque projet représente un défi unique relevé avec créativité et rigueur technique.
          </p>

          {/* Filtres */}
          <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 font-bold">
            {['Programmation', 'Design graphique / UI-UX'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.filter((project) => project.category === activeFilter)
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
                    <p className="text-gray-600 mb-4 flex-grow text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Bouton Détails sur les projets */}
          <div className="mt-10 md:mt-16 flex justify-center">
            <Link href="/projects" legacyBehavior>
              <a className="group bg-[#40c057] text-white px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-[#2b8a3e] transition-all hover:shadow-lg relative overflow-hidden inline-flex items-center gap-2 text-sm md:text-base">
                <span className="relative z-10 font-bold">Détails sur les projets</span>
                <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#69db7c] to-[#40c057] transition-all duration-300 group-hover:w-full"></div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="min-h-screen bg-gradient-to-b from-[#E6FFE6] to-[#c8e6c9] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#1a472a] to-[#40c057] text-transparent bg-clip-text animate-gradient">
            Me contacter
          </h2>
          
          <p className="text-[#1a472a] text-center text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-16">
            Vous avez un projet en tête ou vous souhaitez simplement échanger ? N'hésitez pas à me contacter, je serais ravi de discuter avec vous !
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Formulaire de contact */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a472a] mb-4 md:mb-6">Envoyez-moi un message</h3>
              
              <form ref={formRef} className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#1a472a] font-medium mb-2 text-sm md:text-base">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#1a472a] font-medium mb-2 text-sm md:text-base">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#1a472a] font-medium mb-2 text-sm md:text-base">Sujet</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#1a472a] font-medium mb-2 text-sm md:text-base">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40c057] focus:border-transparent transition-all resize-none text-sm md:text-base"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="group bg-[#40c057] text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-[#2b8a3e] transition-all duration-300 hover:shadow-lg relative overflow-hidden w-full sm:w-auto text-sm md:text-base"
                >
                  <span className="relative z-10">Envoyer le message</span>
                  <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#69db7c] to-[#40c057] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </form>
            </div>
            
            {/* Informations de contact et réseaux sociaux */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a472a] mb-4 md:mb-6">Mes coordonnées</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#40c057]/10 p-2 md:p-3 rounded-full">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#40c057]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Email</p>
                      <a href="mailto:Levilo97@outlook.com" className="text-[#1a472a] hover:text-[#40c057] transition-colors text-sm md:text-base">Levilo97@outlook.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#40c057]/10 p-2 md:p-3 rounded-full">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#40c057]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Téléphone</p>
                        <a href="tel:+14382333595" className="text-[#1a472a] hover:text-[#40c057] transition-colors text-sm md:text-base">(438)-233-3595</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#40c057]/10 p-2 md:p-3 rounded-full">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#40c057]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm md:text-base">Localisation</p>
                        <p className="text-[#1a472a] text-sm md:text-base">Laval, Québec, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Réseaux sociaux */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a472a] mb-4 md:mb-6">Suivez-moi</h3>
                  
                  <div className="flex space-x-4">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/levi-loseke-183694238/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#40c057]/10 p-2 md:p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                    
                    {/* GitHub */}
                    <a 
                      href="https://github.com/CaptnLevi96" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#40c057]/10 p-2 md:p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    
                    {/* Behance */}
                    <a 
                      href="https://www.behance.net/leviloseke2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#40c057]/10 p-2 md:p-3 rounded-full hover:bg-[#40c057] hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <svg 
                        className="w-5 h-5 md:w-6 md:h-6" 
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
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a472a] text-white py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold">[LEVI LOSEKE]</h3>
                <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base">Infographe, Développeur web & Designer</p>
              </div>
              
              <div className="flex flex-wrap justify-center md:flex-row md:items-center gap-3 md:gap-8">
                <a href="#home" className="text-sm md:text-base hover:text-[#40c057] transition-colors">Accueil</a>
                <a href="#about" className="text-sm md:text-base hover:text-[#40c057] transition-colors">À propos</a>
                <a href="#projects" className="text-sm md:text-base hover:text-[#40c057] transition-colors">Projets</a>
                <a href="#contact" className="text-sm md:text-base hover:text-[#40c057] transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-4 md:mt-6 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
                © {new Date().getFullYear()} Levi Loseke. Tous droits réservés.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/levi-loseke-183694238/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/CaptnLevi96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    className="w-4 h-4 md:w-5 md:h-5" 
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