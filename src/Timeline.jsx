import MotionHoc from "./MotionHOC";

import Image from "next/image";

const Timeline = () => {
  return (
    <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie"></div>

        <div className="cd-timeline-content">
          <div className="jobs">
            <h2>Maandag</h2>
            <Image src="/maandag.png" alt="Astek logo" width={100} height={25} />
          </div>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
             Senior Frontend developer
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Jul 2022 - Jun 2024
            </span>
          </div>
          <p>
          Creating, implementing, and refactoring code for the software.
            Assessing the complexity and impact of changes on the current or
            planned system. Creating or selecting the most appropriate methods,
            techniques, standards, tips, or tools for software development.
            Testing alternative solutions and verifying their feasibility. In
            addition to these responsibilities, I also played a key role in
            maintaining the design system, ensuring consistency and efficiency
            in the user interface across the application.
          </p>
          <ul className="content-skills">
            <li>TypeScript</li>
            <li>React </li>
            <li>Next.js </li>
            <li>REST</li>
            <li>Contenfull</li>
          </ul>
          <span className="cd-date">JUl 22</span>
        </div>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie"></div>

        <div className="cd-timeline-content">
          <div className="jobs">
            <h2>Help me to code project</h2>
          </div>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              Teacher/Developer/Manager
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Jun 2021 - present
            </span>
          </div>
          <p>
            Running a school, teaching programming, substantive support for
            students, software implementation, product management,creating or
            selecting themost appropriate methods, techniques, standards.
          </p>
          <ul className="content-skills">
            <li>JavaScript</li>
            <li>React </li>
            <li>HTML5 / CSS</li>
            <li>Node </li>
            <li>Next.js </li>
            <li>Amazons S3 </li>
            <li>MongoDb</li>
          </ul>
          <span className="cd-date">JUN 21</span>
        </div>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie"></div>

        <div className="cd-timeline-content">
          <div className="jobs">
            <h2>Vazco</h2>
            <Image src="/vazco.jpeg" alt="Vazco logo" width={35} height={25} />
          </div>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Full Stack Developer
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Mar 2019 - Jun 2021
            </span>
          </div>
          <p>
            Creating code, implementation of software,refactoring; assessment of
            complexity and impact onthe current or planned system; creating or
            selecting themost appropriate methods, techniques, standards. tipsor
            tools for software development; testing ofalternative solutions and
            verification of their feasibility
          </p>
          <ul className="content-skills">
            <li>JavaScript</li>
            <li>React </li>
            <li>HTML5 / CSS</li>
            <li>Node </li>
            <li>Meteor </li>
            <li>GraphQl </li>
            <li>MongoDb</li>
          </ul>
          <span className="cd-date">MAR 19</span>
        </div>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture"></div>

        <div className="cd-timeline-content">
          <div className="jobs">
            <h2>Astek</h2>
            <Image src="/ASTEK.jpeg" alt="Astek logo" width={35} height={25} />
          </div>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Front End Developer
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Jan 2018 - Mar 2019
            </span>
          </div>
          <p>
            Creating quality code, code review, implementing new technologies
            and software.
          </p>
          <ul className="content-skills">
            <li>JavaScript</li>
            <li>React / Redux</li>
            <li>SQLlite</li>
            <li>HTML5 / CSS</li>
          </ul>
          <span className="cd-date">JAN 18</span>
        </div>
      </div>

      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture"></div>

        <div className="cd-timeline-content">
          <h2>Owner of berry plantation</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Farmer / Entrepreneur
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Sep 2015 - present
            </span>
          </div>
          <p>
            I have set up and run a berry plantation with an area of 1ha (about
            3 thousand trees).
          </p>
          <span className="cd-date">SEP 15</span>
        </div>
      </div>

      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-location"></div>

        <div className="cd-timeline-content">
          <h2>Owner of adversating agency</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Entrepreneur
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Feb 2015 - Aug 2017
            </span>
          </div>
          <p>
            Managing the work of a company operating in the areas of product
            publishing and distribution (newspapers advertising), selling
            advertising in direct contract with the customer, developing
            advertising campaign strategies.
          </p>
          <span className="cd-date">FEB 15</span>
        </div>
      </div>

      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-location"></div>

        <div className="cd-timeline-content">
          <h2>Poker Pro</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Sport career
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Apr 2009 - Jan 2015
            </span>
          </div>
          <p>
            During my career years I won many poker tournaments in Poland and
            abroad. I used to be an inofficial Poker Heads Up Champion of Poland
            and a poker trainer. I used to write articles for the bigger poker
            website in Poland.
          </p>
          <span className="cd-date">APR 09</span>
        </div>
      </div>
    </section>
  );
};

export default MotionHoc(Timeline, "time");
