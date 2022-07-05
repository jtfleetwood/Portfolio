import React from 'react';
import './App.css';
import {useState} from 'react';

let frontend_tech = ["Auth0","CSS", "HTML", "NextJS", "React"];
let backend_tech = ["Auth0", "ExpressJS", "Linux", "NodeJS", "Postman", "SQL"]
let languages = ["C", "C++", "C#", "Java", "Javascript", "Python", "Typescript"]

interface Project {
  title:string;
  date:string;
  tech_stack:string;
  description:string;
  link:string;
}

type ProjectProps = {
  project:Project;
}

type DropdownProps = {
  items:string[];
  showDropdown:boolean;
  setShowDropdown: (isActive : boolean) => void;
  title:string;
}

interface Education {
  school:string;
  gpa:number;
  start_date:string;
  end_date:string;
  degree:string;
  notable_courses:string[];
}

interface Job {
  title:string;
  employer:string;
  responsibilities:string[];
  start_date:string;
  end_date:string;
  city:string;
}

type JobProps = {
  job:Job;
}

type JobsProps = {
  jobs:Job[];
}

type EducationProps = {
  edu:Education;
}

type EducationListingsProps = {
  edus:Education[];
}

const finance_degree : Education = {
  school:"Clemson University",
  gpa:3.77,
  start_date:"Aug. 2015",
  end_date:"May 2019",
  degree: "BS, Financial Management - Minor in Accounting",
  notable_courses:
    [`Corporate Valuation`, `Cost Accounting`, `Creative Inquiry: Chartered Financial 
     Analyst Exam Preparation`, `Intermediate Financial Accounting III`, 
     `Portfolio Management & Theory`,`Investment Analysis`,`Portfolio Management & Theory`
    ]
}

const cs_degree : Education = {
  school:"Clemson University",
  gpa:3.83,
  start_date:"Aug. 2020",
  end_date:"Aug. 2022",
  degree: "BA, Computer Science - Management Information Systems",
  notable_courses:
    [`Algorithms & Data Structures`,`Business Analytics Programming`,`Computation Theory`,
      `Computer Organization`, `Database Management Systems`, `Discrete Mathematical Structures`,
      `Network Programming`, `Operating Systems`, `Physics`, `Programming Systems`, 
      `Software Engineering`, `Systems Analysis` 
    ]
}

const TA : Job = {
  title: 'Undergraduate Teaching Assistant',
  employer: 'Clemson University',
  responsibilities: 
    [`Led all necessary operations for the Computer Science II Lab. 
      Including preparing/leading all lectures, demonstrations, grading assignments, 
      and providing additional assistance to students.`,
      `Taught basic features of C/C++ programming languages, best practices for 
      software development processes, basic data structures (arrays, linked lists, 
        vectors), deployment in a Linux environment, object-oriented programming, 
        and version control systems.`,
        `Provided recommendations to Computer Science II professor to optimize 
        lecturing methods and classroom assignments.`
    ],
    start_date:"Aug. 2021",
    end_date:"Dec. 2021",
    city:"Clemson, SC"

};

const account_manager : Job = {
  title:'Account Manager',
  employer: 'Gartner',
  responsibilities:
    [`Manage and grow existing business of approximately $250K yearly contract 
      value across 4 mid-size enterprises within the Financial Services Industry 
      (End Users). `,
      `Ownership of full sales cycle with prospective opportunities, and contract 
      renewals with existing clients.`,
      `Drive and maintain client engagement with Gartner resources, while 
      identifying new opportunities to expand the client partnership.`,
      `Worked in coordination with clients to develop and execute on a product 
      suite usage plan that would effectively support IT initiatives to meet 
      business objectives, and drive growth.`
    ],
    start_date:"Aug. 2019",
    end_date:"Jun. 2020",
    city:"Ft. Myers, FL"
}

const summer_analyst : Job = {
  title: 'Summer Analyst',
  employer: 'Bank of America',
  responsibilities:
    [
      `Daily client engagement to drive increased interaction with new financial 
      center technologies and online platforms/mobile applications.`,
      `Presented final project to consumer-side upper management within a 
      team of 8 summer analysts. Final project consisted of findings/recommendations 
      to optimize the current efforts of digital technology integration within 
      financial centers and online/mobile platforms.`
    ],
  start_date:"Jun. 2018",
  end_date:"Aug. 2018",
  city:"Atlanta, GA"
}

const PZ : Project = {
  title:"Prized Listeners",
  date:"Jun. 2022",
  tech_stack:"Auth0, Bash Shell, ExpressJS, Heroku, NextJS, NodeJS, PostgreSQL",
  description:`Prized Listeners was my first full-stack project. I developed Prized Listeners
              with the aim of bringing my friends, and other avid music listeners together to find
              better music within a competitive environment. My friends and I commonly debated about
              who had the 'best' taste in music, and enjoyed frequently sharing music with each other.
              So, I created a progressive, and responsive web application that allows users to post
              one song, and downvote/upvote another user's song on a weekly basis. Whichever user(s)'s
              post has the most upvotes at the end of the week receives a point for a tie/win. 
              The points system is represented by leaderboards that show performance across ALL users.`,
  link:"https://prized-listeners.herokuapp.com"
}

let experience : Job[] = [TA, account_manager, summer_analyst];
let schooling : Education[] = [cs_degree, finance_degree];


function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  return (
    
      
      <div className = "page-container">
        <span className = "heading"><em>Hi &#128075; I'm JT!</em></span>
        <img src = "me.jpg" className = "self-image"></img>
        <p className = "title">Incoming <em>Software Developer</em> at <a href = "https://www.boozallen.com/" target = "_blank">Booz Allen</a></p>
        <div className = "personal-links">
          <a href = "https://github.com/jtfleetwood" target = "_blank"> <img src = "github-svgrepo-com.svg"></img></a>
          <a href = "https://www.linkedin.com/in/jtfleetwood/" target = "_blank"><img src = "linkedin-svgrepo-com.svg"></img></a>
          <a href = "JT FLEETWOOD OFFICIAL RESUME - SUMMER 2022.pdf" download target = "_blank"><img src = "resume-svgrepo-com.svg"></img></a>
        </div>
        <hr className = "hr"/>
        <span className = "heading"><em>Education</em></span>
        <EducationListings edus = {schooling}></EducationListings>
        <hr className = "hr" />
        <span className = "heading"><em>Skills</em></span>
        <Dropdown title = {"Frontend Technologies"}showDropdown = {showDropdown} setShowDropdown = {setShowDropdown} items = {frontend_tech}></Dropdown>
        <Dropdown title = {"Backend Technologies"} showDropdown = {showDropdown1} setShowDropdown = {setShowDropdown1} items = {backend_tech}></Dropdown>
        <Dropdown title = {"Programming Languages"} showDropdown = {showDropdown2} setShowDropdown = {setShowDropdown2} items = {languages}></Dropdown>
        <hr className = "hr" />
        <span className = "heading"><em>Work Experience</em></span>
        <JobListings jobs = {experience}></JobListings>
        <hr className = "hr" />
        <span className = "heading"><em>Projects</em></span>
        <ProjectListing project = {PZ}></ProjectListing>
        <Footer/>
      </div>
    
  );
}

const EducationListings = (props : EducationListingsProps) => {
  return (
    <>
      {props.edus.map((degree : Education) => <EducationListing edu = {degree} />)}
    </>
  )
}

const EducationListing = (props : EducationProps) => {
  return (
    <>
      <div className = "job-container">
        <span>
          <em>{props.edu.degree}</em>
          <span className = "job-duration">{props.edu.start_date} - {props.edu.end_date}</span>
          <p className = "job-city"><em><b>{props.edu.school}</b></em> - <b>GPA: {props.edu.gpa}</b></p>
          <p className = "courses-heading">Notable Courses: </p>
            <div className = "course-container">
              {props.edu.notable_courses.map((course : string, index : number) => {
                if (index === props.edu.notable_courses.length - 1) {
                  return <span className = "courses">{course} </span>
                } 
                return <span className = "courses">{course}, </span>
              })}
            </div>
          
        </span>

      </div>
    
    </>
  )
}

const JobListing = (props : JobProps) => {
  return (
    <>
      <div className = "job-container">
        <span><em>{props.job.title}</em><span className = "job-duration">
          {props.job.start_date} - {props.job.end_date}</span>
        </span>
        <p className = "job-city"><em><b>{props.job.employer}</b></em> - {props.job.city}</p>
        <p className = "courses-heading">Responsibilities</p>
        <ul>
          {props.job.responsibilities.map((res : string) => <li className = "content-listings">{res}</li>)}
        </ul>


      </div>
    
    </>
  )
}

const JobListings = (props : JobsProps) => {

  return (
    <>
      {props.jobs.map((val : Job) => <JobListing job = {val}></JobListing>)}
    </>
  )
}

const Dropdown = (props : DropdownProps) => {
  
  return (
      <>
      <button onClick={() => props.setShowDropdown(!props.showDropdown)} className="trigger-button">
        <span>{props.title}</span>
        <img className = {props.showDropdown ? "dropdown-image active" : "dropdown-image"} src = "drop-down-list-svgrepo-com.svg"></img>
      </button>
      
      <ul className={props.showDropdown ? "dropdown-content active" : "dropdown-content"}>
        {props.items.map(item => 
          <li>{item}</li>
        )}
      </ul>
      </>
  
  );

}

const ProjectListing = (props : ProjectProps) => {
  
  return (
    <div className = "job-container">
      <span>
        <em>{props.project.title}</em>
      </span>
        <span className = "job-duration">{props.project.date}</span>
        <p className = "job-city"><b>Tech Stack: </b> 
          {props.project.tech_stack}
        </p>
        <p className = "courses-heading">Description</p>
        <p className = "project-description">{props.project.description}</p>
        <span className = "project-link">Click <a href = {props.project.link} target = "_blank">here</a> to check it out!</span>
    </div>
  )
}

const Footer = () => {
  return (
    <div className = "footer-container">
      <span>Interested in connecting?</span>
      <div className = "contact-container">
        <a href ="tel:864-404-1838"><img src = "phone-call-svgrepo-com.svg"></img></a>
        <a href ="mailto: jtfleetwood14@gmail.com"><img src = "email-svgrepo-com.svg"></img></a>
        <a href = "https://discord.com/users/flossboss#2483/" target = "_blank"><img src = "discord-v2.svg"></img></a>
      </div>
    </div>
  )
}
export default App; 
