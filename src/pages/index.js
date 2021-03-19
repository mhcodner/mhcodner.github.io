import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic1 from '../assets/images/pic01.jpg';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'experience', name: 'Experience', icon: 'fa-user-tie' },
  { id: 'education', name: 'Education', icon: 'fa-university' },
  { id: 'leadership', name: 'Leadership', icon: 'fa-book-reader' },
  { id: 'teamwork', name: 'Teamwork', icon: 'fa-users' },
  { id: 'resume', name: 'Resume', icon: 'fa-file' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Michael</strong>
            </h2>
            <h2 className="alt">
              I'm a Software & Cloud Services Engineer
            </h2>
            <p>Find out more below</p>
          </header>
        </div>
      </section>

      <section id="about" className="two">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <p>
            As an engineering professional I consistently aim to further develop myself both
            professionally and personally. In my spare time I enjoy playing with video games,
            tinkering with electronics, or taking photos.
          </p>
          <p>
            Throughout the past few years I have grown to enjoy the infrastructure side of the
            cloud. Day-to-day you'll find me working on the physical hardware of servers, switches,
            routers, and firewalls, all the way up to dealing with the applications running on
            a virtual machine. Having control over the whole tech-stack is my passion.
          </p>
        </div>
      </section>

      <section id="experience" className="three">
        <div className="container">
          <header>
            <h2>Experience</h2>
          </header>
          <div className="image featured">
            <img src={pic1} alt="" />
          </div>

          <p>
            As a HMC Engineer at Macquarie Cloud Services, I’m part of a team of cloud specialists
            delivering hybrid cloud solutions for business customers.
          </p>
        </div>
      </section>

      <section id="education" className="four">
        <div className="container">
          <header>
            <h2>Education</h2>
          </header>

          <p>
            I'm currently studying a bachelor of ICT engineering with a submajor in Software,
            and a Diploma in Professional Engineering Practice.
          </p>
        </div>
      </section>

      <section id="leadership" className="five">
        <div className="container">
          <header>
            <h2>Leadership</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>
        </div>
      </section>

      <section id="teamwork" className="six">
        <div className="container">
          <header>
            <h2>Teamwork</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>
        </div>
      </section>

      <section id="resume" className="seven">
        <div className="container">
          <header>
            <h2>Resume</h2>
          </header>

          <p>
            If you are interested in downloading a copy of my resume then you can go
            to the following <a href="https://www.dropbox.com/s/1qwbgvqzdoirisv/Michael%20Codner%20Resume.pdf?dl=0"
            target="_blank">Dropbox link</a>
          </p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
