import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic8 from '../assets/images/pic08.jpg';
import pic1 from '../assets/images/pic01.jpg';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'academics', name: 'Academics', icon: 'fa-book' },
  { id: 'professional', name: 'Professional History', icon: 'fa-envelope' },
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
              <br />
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

          <a href="/#" className="image featured">
            <img src={pic1} alt="" />
          </a>

          <p>
          As a HMC Engineer at Macquarie Cloud Services, I’m part of a team of cloud specialists delivering hybrid cloud solutions for business customers.
          </p>
        </div>
      </section>

      <section id="academics" className="three">
        <div className="container">
          <header>
            <h2>Academics</h2>
          </header>

          <p>
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p>
        </div>
      </section>

      <section id="professional" className="four">
        <div className="container">
          <header>
            <h2>Professional History</h2>
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
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
