import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic1 from '../assets/images/pic01.jpg';
import idspic from '../assets/images/ids.jpg';
import MIM from '../assets/images/MIM.png'

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
          <p>
            What I have learnt from my time as an engineer within software and cloud services is
            that the technology is constantly changing. I plan to continue developing myself
            professionally by completing more industry certifications and transfer that knowledge
            to my team. As a professional I have the following skills:
            <ul>
              <li>Strong networking skills</li>
              <li>Advanced Linux experience</li>
              <li>Advanced VMware ESXi and vCenter experience</li>
              <li>Proficient programming in multiple programming languages shown on <a href="https://github.com/mhcodner" target="_blank">my GitHub profile</a></li>
              <li>Strong communication skills - evident in my excellent customer service feedback</li>
              <li>Leadership - strong leadership skills outlined in my <a href="#teamwork">teamwork</a> and <a href="#leadership">leadership</a> sections.</li>
              <li>Self-learning - demonstrated by my certifications which are self-taught</li>
            </ul>
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
            In a professional setting, I create value through my <strong>industry leading knowledge</strong> and
            fast <strong>problem solving skills</strong> which prove critical in my day to day duties. This
            is evidenced by my ever-growing collection of <strong>industry certifications</strong> and the excellent feedback
            provided by both customers and colleagues.
            <br />
            One of my greatest contributions at work is the development of some automation around our Fortinet firewalls
            and the automated patching of our ESXi hosts. My automation has allowed the team to receive daily reports on
            our progress of upgrade tasks and report on any issues identified.
            <br />
            In terms of excellent customer service I have been admitted to the Macquarie Telecom Group Heartbeat club
            several times for going above and beyond. Heartbeat recognises and rewards employees that demonstrate exceptional
            Personal Accountable Service (PAS) to our customers and prospective customers.
            <br />
            In terms of certifications, so far under my belt I have the following:
            <ul>
              <li>Cisco Certified Network Associate <strong>(CCNA)</strong></li>
              <li><strong>ITIL v3</strong> Foundations</li>
              <li>RedHat Certified Systems Administrator <strong>(RHCSA)</strong></li>
              <li>Microsoft Azure Administrator <strong>(AZ-104)</strong></li>
              <li>Fortinet Network Security Architect <strong>(NSE 7)</strong></li>
            </ul>
          </p>
          <p>
            At Macquarie Cloud Services I have spent my first 2 years as a tier 1 HMC Engineer.
            I have now spent the last 2 years as a Tier 2 HMC Engineer, becoming the most senior non-manager
            engineer in the team.
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
        </div>
      </section>

      <section id="education" className="four">
        <div className="container">
          <header>
            <h2>Education</h2>
          </header>

          <p>
            I'm currently studying a <strong>Bachelor of ICT Engineering</strong> with a Submajor in Software,
            and a Diploma in Professional Engineering Practice at <strong>The University of Technology, Sydney
              (UTS)</strong>.
          </p>
          <p>
            As a student I have performed exceptionally well at the more practical subjects
            which is evident in the marks received for these subjects:
            <ul>
              <li>
                Introductory Digital Systems - <strong>Distinction mark of 83</strong>
                <br />
                - This subject allowed me to gain a fundamental understanding of electronics at a low level
              </li>
              <li>
                Software Engineering Practice - <strong>High Distinction mark of 98</strong>
                <br />
                - This subject provided a real world experience of working on software projects in an agile workplace
              </li>
              <li>
                Internet Of Things - <strong>High Distinction mark of 90</strong>
                <br />
                - This subject taught me fundamentals of IoT communication protocols
              </li>
              <li>
                Engineering Computations - <strong>High Distinction mark of 90</strong>
                <br />
                - This subject helped advance my skills in Excel
              </li>
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
            Having spent the past 2 years as a tier 2 engineer I have been providing mentorship to
            the junior engineers in my team. I am now <strong>the most senior non-manager engineer</strong> in
            my team and this brings the responsibility of being a leader. This is demonstrated by my manager
            entrusting me to lead the team when he is on leave.
            <br />
            My leadership skills are highlighted especially well when dealing with major incidents as these
            require co-ordination and teamwork. I always take ownership of issues and delegate tasks to
            appropriate resources.
            <br />
            Following the correct process is important in just about any job but especially important when you are
            leading a team of engineers. If you can't follow the process yourself then you can't expect your team
            to also follow the process.
            <br />
            <strong>Being a leader I always lead by example</strong> and perform as best as I can to have the rest of my team
            follow in my footsteps. While I am senior and can instruct other engineers on what to do, I
            still prefer to be active and perform the same duties as they do.
          </p>
        </div>
      </section>

      <section id="teamwork" className="six">
        <div className="container">
          <header>
            <h2>Teamwork</h2>
          </header>

          <p>
            I am excellent at working in a team environment and <strong>excel at understanding the strengths
            of my team members</strong> so that I can have them work on the most appropriate tasks and tickets for
            their strengths and weaknesses.
            <br />
            Evidence of my teamwork can be seen particularly when we deal with major incidents at work. When
            dealing with a major incident we all work together with different roles focused towards the resolution,
            such as can be seen from the following handover:
          </p>
          <div className="image featured">
            <img src={MIM} alt="teamwork" />
          </div>
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
