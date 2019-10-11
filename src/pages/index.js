import React from 'react';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';
import Footer from 'components/Footer';

import projects from 'content/projects';
import statements from 'content/about-me';
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";



export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />
        <div id="education"></div>
        <Education statements={statements} />
        <div id="work-experience"/>
        <WorkExperience statements={statements}/>
          <div id="projects"/>
          <Projects projects={projects} />

        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}
