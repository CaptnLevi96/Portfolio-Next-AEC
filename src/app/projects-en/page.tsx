"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";


export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShattering, setIsShattering] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Initial loading sequence management
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
          <div className={`flex flex-col items-center justify-center text-4xl sm:text-6xl md:text-8xl font-bold leading-tight ${isShattering ? 'loader' : ''}`}>
            <span className="mb-2">[LEVI LOSEKE]</span>
          </div>
        </div>
      )}

      <div className={`min-h-screen flex flex-col bg-[#E6FFE6] transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex-grow py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Back button */}
            <div className="mb-6 sm:mb-8 md:mb-12">
              <Link href="/en" legacyBehavior>
                <a className="bg-[#40c057] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-[#2b8a3e] transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 text-sm sm:text-base font-bold">
                  <FaArrowLeft />
                  <span className="hidden xs:inline">Back to main page</span>
                  <span className="xs:hidden">Back</span>
                </a>
              </Link>
            </div>
            
            {/* Title and introduction */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center bg-gradient-to-r from-[#1a472a] to-[#40c057] text-transparent bg-clip-text">
              Web Project Details
            </h1>
            
            <p className="text-[#1a472a] text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 px-2">
              Welcome to my web development universe! Explore my collection of 
              projects and dive into the details of each creation. Click on a project to 
              discover its complete story: the technologies I've mastered, the challenges I've 
              overcome, and the innovative solutions I've created.
            </p>
            
            {/* List of projects */}
            <div className="space-y-10 sm:space-y-16 md:space-y-20">
              {/* Project 1 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image 
                    src="/pepiniere.png"
                    alt="Plant Nursery Website"
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a472a] mb-2 sm:mb-3 md:mb-4">Plant Nursery Website</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    This project involved creating a complete website for a plant nursery with several essential features: a shopping cart for customers, an efficient search bar, as well as filters and categories to facilitate navigation.
                  </p>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    <strong className="text-[#40c057]">Challenges faced:</strong> Implementing an interactive filtering system that maintains site performance and optimizing images for fast loading times.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">HTML</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image 
                    src="/jeux.png"
                    alt="Game with Scoreboard"
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a472a] mb-2 sm:mb-3 md:mb-4">Game with Scoreboard</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    This interactive game offers an engaging experience where players must collect a key, avoid enemies, and reach a door. The scoreboard adds a competitive element that encourages users to improve their performance.
                  </p>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    <strong className="text-[#40c057]">Challenges faced:</strong> Setting up precise collisions and smooth game logic. Implementing a persistent scoring system also required special attention.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">HTML</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Node.js</span>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image 
                    src="/list.png"
                    alt="To-Do List"
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a472a] mb-2 sm:mb-3 md:mb-4">To-Do List App</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    Task management application developed with IntelliJ IDEA using the React library. This application allows users to create, edit, and delete tasks with an intuitive and responsive interface.
                  </p>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    <strong className="text-[#40c057]">Challenges faced:</strong> Efficient state management with React and implementing a data persistence feature so that tasks are saved between sessions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">React</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">IntelliJ IDEA</span>
                  </div>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image 
                    src="/quiz.png"
                    alt="Geography Quiz"
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a472a] mb-2 sm:mb-3 md:mb-4">Geography Quiz</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    An interactive quiz on world geography with randomly generated questions. Users can test their knowledge about different countries, capitals, and geographical features.
                  </p>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    <strong className="text-[#40c057]">Challenges faced:</strong> Creating a random question system that avoids repetition and setting up a precise scoring mechanism that encourages users to try again.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">HTML</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">CSS</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
                  </div>
                </div>
              </div>
              
              {/* Project 5 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image 
                    src="/laravelle.png"
                    alt="La Ravelle Library"
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a472a] mb-2 sm:mb-3 md:mb-4">La Ravelle Library</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    Transactional website for a library, developed with the Laravel framework. This project offers a complete platform allowing users to browse the catalog, reserve books, and manage their loans.
                  </p>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    <strong className="text-[#40c057]">Challenges faced:</strong> Implementing a secure authentication system and creating an optimized relational database to efficiently manage the catalog and transactions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">MySQL</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">PHP</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Tailwind</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">JavaScript</span>
                  </div>
                </div>
              </div>
              
              {/* Project 6 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div className="w-full md:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <Image 
                    src="/benactor.png"
                    alt="Benactor"
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a472a] mb-2 sm:mb-3 md:mb-4">Benactor</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    Development of a modern web application that facilitates coordination between organizations and volunteers. Benactor provides a platform where organizations can post their needs and volunteers can offer their time and skills.
                  </p>
                  <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                    <strong className="text-[#40c057]">Challenges faced:</strong> Creating an effective matching system between organizations and volunteers, as well as managing calendars and real-time availability. An additional challenge was the lack of participation from one team member, which required task reorganization and rapid adaptation to meet project deadlines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Next.js</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Drizzle</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">Hono</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#40c057]/10 rounded-full text-[#1a472a]">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-[#1a472a] text-white py-6 sm:py-8 w-full mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold">[LEVI LOSEKE]</h3>
                <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Graphic Designer, Web Developer & UI Designer</p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-4 sm:mt-6 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
                © {new Date().getFullYear()} Levi Loseke. All rights reserved.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/levi-loseke-183694238/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/CaptnLevi96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#40c057] transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    className="w-4 h-4 sm:w-5 sm:h-5" 
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