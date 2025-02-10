'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
 const titles = ["Infographe", "Développeur web", "Designer web"];
 const [titleIndex, setTitleIndex] = useState(0);
 const [displayText, setDisplayText] = useState('');
 const [isDeleting, setIsDeleting] = useState(false);

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
   <div className="min-h-screen bg-[#E6FFE6] text-gray-900 font-sans">
     <Head>
       <title>Mon Portfolio</title>
       <meta name="description" content="Portfolio professionnel de Levi" />
     </Head>
     
     <header className="py-4 px-8 flex justify-between items-center fixed w-full bg-[#E6FFE6]/90 backdrop-blur-md z-50 shadow-sm">
       <h1 className="text-3xl font-bold text-[#1a472a] tracking-tight">LEVI LOSEKE</h1>
       <nav>
         <ul className="flex space-x-10 text-lg">
           <li><Link href="/" className="hover:text-[#40c057] transition-colors">Accueil</Link></li>
           <li><Link href="/a-propos" className="hover:text-[#40c057] transition-colors">À propos</Link></li>
           <li><Link href="/projets" className="hover:text-[#40c057] transition-colors">Projets</Link></li>
           <li><Link href="/contact" className="hover:text-[#40c057] transition-colors">Contact</Link></li>
         </ul>
       </nav>
     </header>

     <main className="max-w-7xl mx-auto px-8 pt-28">
       <div className="flex justify-between items-center gap-12">
         <div className="max-w-2xl">
           <h2 className="text-7xl font-bold mb-8 leading-tight">
             <span className="text-[#40c057] block mb-4">Bonjour!, Je suis un</span>
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
             src="/hero-image.png"
             alt="Developer illustration"
             width={384}
             height={384}
             priority
             className="w-96 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(64,192,87,0.3)] transition-all duration-300"
           />
         </div>
       </div>
     </main>
   </div>
 );
}