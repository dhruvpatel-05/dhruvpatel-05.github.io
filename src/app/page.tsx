'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-500 animate-pulse-slow">DKP</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium animate-fade-in delay-100">About</Link>
              <Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium animate-fade-in delay-200">Skills</Link>
              <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium animate-fade-in delay-300">Projects</Link>
              <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium animate-fade-in delay-400">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 animate-float"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-scale-in">
            Dhruv K. Patel
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-up delay-200">
            Mathematics of Computation Student at UCLA | Data Science & Analytics
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Mathematics of Computation student at UCLA with a strong foundation in machine learning,
                data analysis, and software development. My goal is to leverage data-driven approaches
                to solve real-world problems and create meaningful impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my B.S. in Mathematics of Computation with a 3.80 GPA,
                I'm actively involved in data science projects and clubs while maintaining
                academic excellence as a UCLA Dean's Honors List recipient.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="font-bold mb-4 text-blue-600 dark:text-blue-400 text-lg">Education</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">B.S. Mathematics of Computation</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">UCLA (2023-2027)</p>
                <p className="text-gray-600 dark:text-gray-300">GPA: 3.80/4.00</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="font-bold mb-4 text-purple-600 dark:text-purple-400 text-lg">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">UCLA Tennis Consulting Scout</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Data Journalist</p>
                <p className="text-gray-600 dark:text-gray-300">Junior Software Quality Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Python', level: 'Proficient' },
              { name: 'C++', level: 'Proficient' },
              { name: 'Java', level: 'Proficient' },
              { name: 'C', level: 'Proficient' },
              { name: 'Git', level: 'Proficient' },
              { name: 'SQL', level: 'Novice' },
              { name: 'JavaScript', level: 'Novice' },
              { name: 'Excel', level: 'Novice' },
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold mb-3 text-blue-600 dark:text-blue-400 text-lg">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Boardify',
                description: 'Full-stack web app that generates custom airplane-themed boarding passes using users\' Spotify listening data.',
                tech: ['MongoDB', 'Express', 'React.js', 'Node.js'],
              },
              {
                title: 'Git Repository Organizer',
                description: 'Constructed a directed acyclic graph (DAG) of commits by parsing Git objects and references.',
                tech: ['Python', 'Git'],
              },
              {
                title: 'NBA Sophomore Statistics Predictor',
                description: 'Predicted NBA statistics for rising sophomore players using multivariate linear regression.',
                tech: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Sklearn'],
              },
            ].map((project, index) => (
              <div 
                key={project.title} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (techIndex * 100)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="https://github.com/dhruvpatel-05"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in flex flex-col items-center justify-center min-w-[280px]"
                style={{ animationDelay: '100ms' }}
              >
                <div className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400 text-center w-full">GitHub</div>
                <p className="text-gray-600 dark:text-gray-300 text-center">@dhruvpatel-05</p>
              </a>
              <a
                href="https://linkedin.com/in/dhruvpatel2005"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in flex flex-col items-center justify-center min-w-[280px]"
                style={{ animationDelay: '200ms' }}
              >
                <div className="text-2xl font-bold mb-3 text-purple-600 dark:text-purple-400 text-center w-full">LinkedIn</div>
                <p className="text-gray-600 dark:text-gray-300 text-center">@dhruvpatel2005</p>
              </a>
              <a
                href="mailto:dhruvpatel97@g.ucla.edu"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in flex flex-col items-center justify-center min-w-[280px]"
                style={{ animationDelay: '300ms' }}
              >
                <div className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400 text-center w-full">Email</div>
                <p className="text-gray-600 dark:text-gray-300 text-center">dhruvpatel97@g.ucla.edu</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 border-t border-gray-200/50 dark:border-gray-700/50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 Dhruv K. Patel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
} 