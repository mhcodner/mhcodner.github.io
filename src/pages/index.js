import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic1 from '../assets/images/pic01.jpg';
import idspic from '../assets/images/ids.jpg';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'experience', name: 'Professional Experience', icon: 'fa-user-tie' },
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
            <h2>Professional Experience</h2>
          </header>
          <div className="image featured">
            <img src={pic1} alt="Cloud" />
          </div>

          <p>
            At Macquarie Cloud Services I have spent my first 2 years as a tier 1 HMC Engineer.
            I have now spent the last year and a half as a Tier 2 HMC Engineer.
            <br />
            As a HMC Engineer, I am part of a team of cloud specialists delivering hybrid cloud
            solutions for business customers. My role currently consists of being one of the engineers
            in direct contact with technical experts from our customers to provide the first and second
            level of support across a wide variety of compute and network issues.
            <br />
            I also spend a significant amount of time dealing with Australian government agencies through
            supporting the operations of our Secure Internet Gateway (SIG). This usually involves
            diagnosing complex routing and firewall issues, and dealing with complex business logic
            surrounding emails.
          </p>
          <p>
            As part of my job I regularly gain industry certifications. So far under my belt I have:
            <ul>
              <li>Cisco Certified Network Associate <strong>(CCNA)</strong></li>
              <li><strong>ITIL v3</strong> Foundations</li>
              <li>RedHat Certified Systems Administrator <strong>(RHCSA)</strong></li>
              <li>Microsoft Azure Administrator <strong>(AZ-103)</strong></li>
              <li>Fortinet Network Security Architect <strong>(NSE 7)</strong></li>
            </ul>
          </p>
        </div>
      </section>

      <section id="education" className="four">
        <div className="container">
          <header>
            <h2>Education</h2>
          </header>

          <p>
            I'm currently studying a <strong>Bachelor of ICT Engineering</strong> with a Submajor in Software,
            and a Diploma in Professional Engineering Practice at <strong>The University of Technology, Sydney (UTS)</strong>.
          </p>
          <p>
            Throughout my studies some of my favourite subjects have been the more practical subjects
            such as:
            <ul>
              <li>Introductory Digital Systems</li>
              <li>Software Engineering Practice</li>
              <li>Internet Of Things</li>
            </ul>
          </p>
          <p>
            While UTS has taught me a lot of soft skills, the practical subjects are where I do best as I am
            passionate about getting the work done and learning about how to apply my skills to the real world.
            This is evident in the above mentioned practical subjects being some of my highest academic grades.
          </p>
          <p>
            The following image is from one of the best practical assignments in Introductory Digital Systems,
            where we programmed a logic board after soldering it together:
          </p>
          <div className="image featured">
            <img src={idspic} alt="Logic board" />
          </div>
        </div>
      </section>

      <section id="leadership" className="five">
        <div className="container">
          <header>
            <h2>Leadership</h2>
          </header>

          <p>
            Having spent the past year and a half as a tier 2 engineer I have been providing mentorship to
            the junior engineers. I am now <strong>the most senior non-manager engineer</strong> in my team and this brings
            the responsibility of being a leader.
          </p>
        </div>
      </section>

      <section id="teamwork" className="six">
        <div className="container">
          <header>
            <h2>Teamwork</h2>
          </header>

          <p>
            My job cannot be done by any individual, it requires teamwork.
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
            to the following
            <br />
            <a href="https://www.dropbox.com/s/1qwbgvqzdoirisv/Michael%20Codner%20Resume.pdf?dl=0"
            target="_blank" rel="noopener noreferrer"><i className="fab fa-dropbox"></i> Dropbox link</a>
          </p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
