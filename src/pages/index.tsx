import Head from 'next/head';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import ContactMe from 'components/Contact/ContactMe';
import Certifications from 'components/Certifications/Certifications';
import React from 'react';
import SkillsSection from 'components/SkillsSection/SkillsSection';
import Carousel from 'components/Carousel/Carousel';
import { useState, useEffect } from 'react';
import ProjectsMobile from 'components/ProjectsMobile/ProjectsMobile';

export interface ProjectsDataInt {
  projectDesc: string;
  projectName: string;
  projectDuration: string;
  projectImage: string;
  projectLink: string;
}

export default function Home() {
  const [width, setWidth] = useState(0);

  const projectsData: ProjectsDataInt[] = [
    {
      projectDesc: 'This was an amazing project',
      projectDuration: 'May 2021 - Jun 2023',
      projectImage: '/',
      projectLink: '/',
      projectName: 'Pievu Ieva',
    },
    {
      projectDesc: 'This was an amazing project',
      projectDuration: 'May 2021 - Jun 2023',
      projectImage: '/',
      projectLink: '/',
      projectName: 'Reminimo galerija',
    },
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className="
    bg-black
    
    text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F5C8D1]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full"
    >
      <Head>
        <title>Viktorija</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center snap-mandatory  snap-always">
        <About />
      </section>
      <section
        id="certifications"
        className="snap-start snap-mandatory snap-always"
      >
        <Certifications />
      </section>
      <section id="skills" className="snap-start snap-mandatory  snap-always">
        <SkillsSection />
      </section>
      <section
        id="projects"
        className="snap-start snap-mandatory  snap-always max-h-screen overflow-clip"
      >
        {width > 768 ? (
          <Carousel projectsData={projectsData} />
        ) : (
          <ProjectsMobile projectsData={projectsData} />
        )}
      </section>
      <section id="contact" className="snap-start snap-mandatory  snap-always">
        <ContactMe />
      </section>
    </div>
  );
}
