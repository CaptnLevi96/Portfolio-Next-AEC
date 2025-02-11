'use client';
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

 useEffect(() => {
   // Simulation du chargement
   setTimeout(() => {
     setIsLoaded(true);
     setTimeout(() => setShowContent(true), 500);
   }, 2000);
 }, []);

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
 }, [titleIndex, displayText, isDeleting]);

 return (
   <div className="relative">
     {/* Loader Screen */}
     {!isLoaded && (
       <div className="fixed inset-0 flex items-center justify-center bg-[#1a472a] text-white z-50 transition-all duration-1000">
         <div className="flex flex-col items-center justify-center text-8xl font-bold animate-pulse leading-tight">
           <span className="mb-2">[LEVI LOSEKE]</span>
         </div>
       </div>
     )}

     {/* Main Content */}
     <div className={`transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
       {/* Header */}
       <header className="py-6 px-20 flex justify-between items-center fixed w-full bg-[#E6FFE6]/90 backdrop-blur-md z-50 shadow-sm">
         <h1 className="text-3xl font-bold text-[#1a472a] tracking-tight">LEVI LOSEKE</h1>
         <nav>
           <ul className="flex space-x-10 text-lg">
             <li><a href="#home" className="hover:text-[#40c057] transition-colors">Accueil</a></li>
             <li>
  <a 
    href="#about" 
    className="hover:text-[#40c057] transition-colors" 
    onClick={(e) => {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ 
          behavior: 'smooth' // Ajoute l'animation de défilement fluide
        });
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

       {/* Hero Section */}
       <section id="home" className="min-h-screen flex items-center bg-[#E6FFE6]">
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
       <section id="about" className="min-h-screen bg-[#0a0a1f] text-white py-20">
         <div className="max-w-7xl mx-auto px-8">
           <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#40c057] to-[#69db7c] text-transparent bg-clip-text">
             Mon parcours professionnel
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative flex justify-center">
               <Image
                 src="/laptop-experience.png"
                 alt="Laptop illustration"
                 width={500}
                 height={400}
                 className="animate-float"
                 priority
               />
             </div>

             <div className="space-y-6">
               {[
                 {
                   title: "Infographe",
                   company: "Flash Grafix",
                   period: "Juin 2022 - Janvier 2024",
                   description: "Création et conception graphique pour divers projets d'impression et de communication visuelle"
                 },
                 {
                   title: "Aide pressier",
                   company: "SupremeX Inc.",
                   period: "Mai 2022 - Juin 2022",
                   description: "Support aux opérations d'impression et contrôle qualité"
                 },
                 {
                   title: "Préparateur de commandes",
                   company: "Hose Power Canada",
                   period: "Mai 2021 - Janvier 2022",
                   description: "Gestion logistique et préparation précise des commandes clients"
                 },
                 {
                   title: "Imprimeur sur presse numérique",
                   company: "Bureau en gros",
                   period: "Mai 2019 - Août 2019",
                   description: "Production d'impressions numériques et service client personnalisé"
                 }
               ].map((exp, index) => (
                 <div
                   key={index}
                   className="bg-[#1a1a3f]/80 backdrop-blur-sm p-6 rounded-xl hover:bg-[#2a2a4f] 
                            transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                            hover:shadow-[#40c057]/20 group"
                 >
                   <div className="flex items-center gap-4 mb-2">
                     <div className="w-12 h-12 bg-[#40c057]/20 rounded-full flex items-center justify-center
                                   group-hover:bg-[#40c057]/30 transition-all duration-300">
                       <span className="text-2xl">💼</span>
                     </div>
                     <div className="flex-1">
                       <h3 className="text-xl font-bold text-[#40c057]">{exp.title}</h3>
                       <p className="text-[#40c057]/80">{exp.company}</p>
                     </div>
                     <span className="text-sm text-[#40c057]/70">{exp.period}</span>
                   </div>
                   <p className="text-gray-300 ml-16 transition-all duration-300 group-hover:text-white">
                     {exp.description}
                   </p>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>
     </div>
   </div>
 );
}