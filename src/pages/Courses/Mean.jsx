import React, { useState } from "react";
import digital from "../../assets/images/digitall.png";
import download from "../../assets/images/download.png";
import cartificate from "../../assets/images/Certificate.jpeg";
import telephone from "../../assets/images/telephone.png";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Mean = () => {
  const Mean = "./brochures/Mean-stack.pdf";
  const [openWeek, setOpenWeek] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleWeek = (index) => {
    setOpenWeek(openWeek === index ? null : index);
  };
  const openModal = () => setIsModalOpen(true); // Open modal function
  const closeModal = () => setIsModalOpen(false); // Close modal function

  const weeks = [
    {
      week: "MODULE 1: WEB PROGRAMMING INTRODUCTION",
      details: [
        "Architecture of a website",
        "Different technologies in making the website",
        "Web Development Introduction",
      ],
    },
    {
      week: "MODULE 2: HTML-INTRODUCTION",
      details: [
        "History of HTML",
        "What you need to do to get going and make your first HTML page",
        "What are HTML Tags and Attributes?",
        "HTML Tag vs. Element",
        "HTML Attributes",
      ],
    },
    {
      week: "MODULE 3: HTML-HEADERS",
      details: ["Title", "Base", "Link", "Styles", "Script", "Meta"],
    },
    {
      week: "Module: HTML-Basic formatting tags",
      details: ["HTML Basic Tags", "HTML Formatting Tags", "HTML Color Coding"],
    },
    {
      week: "MODULE 5: HTML-GROUPING USING DIV SPAN",
      details: [" Div Tag", "Span Tags"],
    },
    {
      week: "MODULE 6: HTML SEMANTIC ELEMENTS",
      details: [
        "<article>",
        "<aside>",
        "<details>",
        "<figure>",
        "<header>",
        "<footer>",
        "<main>",
        "<mark>",
        "<nav>",
        "<section>",
        "<summary>",
        "<time>",
      ],
    },
    {
      week: "MODULE 7: HTML-LISTS",
      details: [
        "Unordered Lists",
        "Ordered Lists",
        "Defination list",
      ],
    },
    {
      week: "MODULE 8: HTML-IMAGES",
      details: [
        "Image and Image Mapping",
        "Background Images",
        
      ],
    },
    {
      week: "MODULE 9: HTML-HYPERLINK",
      details: [
        "Anchor Tag",
        "URL - Uniform Resource Locator",
        "Relative and Absolute Address",
      ],
    },
    {
      week: "MODULE 10: HTML-TABLE",
      details: ["<table>",
"<th>",
"<tr>",
"<td>",
"<caption>",
"<thead>",
"<tbody>",
"<tfoot>",
"<colgroup>",
"<col>"],
    },
    {
      week: "MODULE 11: HTML-I FRAME",
      details: [
        "Using I frame as the Target",
      ],
    },

    {
      week: "MODULE 12: HTML-FORM",
      details: [
      "HTML Forms",
"HTML Form Attributes",
"HTML Form Elements",
"HTML Input Types",
"HTML Input Attributes",
"HTML Input Form Attributes",
"<textarea>",
"<button>",
"<select>",
"<label>",
      ],
    },
    {
      week: "MODULE 13: HTML GRAPHICS",
      details: [
        "HTML Canvas Graphics",
        "HTML SVG Graphics",
      ],
    },
    {
      week: "MODULE 14: HTML MEDIA",
      details: ["HTML Media",
"HTML Video & Audio",
"HTML Plug-in",
"HTML YouTube",
],
    },
    {
      week: "MODULE 15: HTML APIS",
      details: [
      "HTML Geolocation",
"HTML Drag/Drop",
"HTML Web Storage & Workers",
"HTML SSE",
      ],
    },
    {
      week: "CSS",
      details: [
        "MODULE 1: CSS INTRODUCTION",
        "MODULE 2: CSS CORE PROPERTIES",
        "MODULE 3: CSS UNITS",
        "MODULE 4: CSS STYLING",
        "MODULE 5: STYLING ELEMENTS",
        "MODULE 6: NAVBAR",
        "MODULE 7: CSS SELECTORS",
        "MODULE 8: CSS POSITIONS",
        "MODULE 9: CSS LAYOUTS",
        "MODULE 11: CSS RESPONSIVE",
      ],
    },
   
    
   
   
    {
      week: "JAVASCRIPT",
      details: [
        "MODULE 1: INTRODUCTION",
        "MODULE 2: LANGUAGE SYNTAX",
        "MODULE 3: OPERATORS",
        "MODULE 4: CONTROL STATEMENT",
        "MODULE 5: LOOP STATEMENT",
        "MODULE 6: JAVASCRIPT HTML DOM",
        "MODULE 7: JAVASCRIPT HTML BOM",
        "MODULE 8: ARRAY",
        "MODULE 9: FUNCTIONS",
        "MODULE 10: OBJECTS",
        "MODULE 11: BUILT-IN OBJECTS",
        "MODULE 12: EVENTS",
        "MODULE 13: INTRODUCTION TO OOP CONCEPT",
        "MODULE 14: JAVASCRIPT WEB API",
        "MODULE 15: JAVASCRIPT AJAX",
        "MODULE 16: JAVASCRIPT JSON",
      ],
    },
    {
      week: "JQUERY",
      details: [
        "Getting started with jQuery",
"Selecting elements",
"Manipulating the page",
"Traversing the DOM and chaining",
"jQuery Utility Methods",
"Handling events and event delegation",
"AJAX, JSON and Deferred",
"Enhancing with Animation effects",
"Grids, Tables with AJAX, Pagination",
"jQuery UI",
"jQuery Best Practices",
      ],
    },
    {
      week: "BOOTSTRAP 5",
      details: [
        "MODULE 1: INTRODUCTION",
        "MODULE 2: LAYOUT WITH BOOTSTRAP",
        "MODULE 3: EVERYDAY BOOTSTRAP",
        "MODULE 4: BOOTSTRAP COMPONENT",
        "MODULE 5: BOOTSTRAP AND JAVASCRIPT",
      ],
    },
    {
      week: "GITHUB",
      details: [
        "Real-Time environmental setup with GitHub",
      ],
    },
    {
      week: "ANGULAR",
      details: [
        "MODULE-1 INTRODUCTION TO ANGULAR",
        "MODULE-2 INTRODUCTION TO TYPESCRIPT",
        "MODULE-3 ENVIRONMENT SETUP",
        "MODULE - 4 MODULES",
        "MODULE-5 COMPONENTS",
        "MODULE-6 TEMPLATES",
        "MODULE-7 CUSTOM DIRECTIVES",
        "MODULE-8 PIPES",
        "MODULE-9 SERVICES",
        "MODULE-10 DEPENDENCY INJECTION",
        "MODULE- 11 LIFECYCLE HOOKS",
        "MODULE-12 ROUTING",
        "MODULE-13 ADVANCED ROUTING",
        "MODULE-14 TEMPLATE-DRIVEN FORMS",
        "MODULE-15 MODEL-DRIVEN FORMS",
        "MODULE-16 ASYNCHRONOUS OPERATIONS",
        "MODULE-17 COMMUNICATION BETWEEN COMPONENTS",
        "MODULE-18 SERVER-SIDE RENDERING",
        "MODULE-19 ANGULAR TESTING",
        "MODULE-20 THIRD-PARTY NPM PACKAGE",
      ],
    },
    {
      week: "NODE-JS AND EXPRESS FRAMEWORK",
      details: [
        "MODULE-1 INTRODUCTION TO NODE.JS",
        "MODULE-2 GETTING STARTED WITH NODE.JS",
        "MODULE-3 JAVASCRIPT WITH NODE.JS",
        "MODULE-4 MODULES",
        "MODULE-5 Node.JS PACKAGE AND PUBLISHING",
        "MODULE-6 PACKAGE",
        "MODULE-7 CODE DEBUGGING",
        "MODULE-8 EXCEPTIONS HANDLING",
        "MODULE-9 EVENTS",
        "MODULE-10 STREAMS",
        "MODULE-11 FILE SYSTEM AND PATH MODULE",
        "MODULE-12 EXPRESS FRAMEWORK",
        "MODULE-13 ROUTING AND VIEW ENGINES",
        "MODULE-14 MIDDLEWARE AND REQUEST PROCESSING",
    
      ],
    },
    {
      week: "MONGODB",
      details: [
        "MODULE-1 INTRODUCTION TO MONGODB",
        "MODULE-2 INDEXING AND RELATIONSHIPS",
        "MODULE-3 MONGO DB ODM -MONGOOSE AND POSTMAN",
        "MODULE-4 REST API WITH MONGOOSE, MONGODB AND POSTMAN",
        "MODULE-5 Node.JS PACKAGE AND PUBLISHING",
        "MODULE-6 PACKAGE",
       
    
      ],
    },
  ];

  return (
    <div className="">
      {/* digital section start here  */}

      <div className="h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row">
        <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
          <h1 className="text-3xl lg:text-4xl font-bold">MEAN Stack</h1>
          <p className="pt-2 text-sm lg:text-base mr-10">
            The MEAN Stack course is designed to teach full-stack web
            development using MongoDB, Express.js, Angular, and Node.js. This
            comprehensive program covers everything from building dynamic,
            data-driven web applications to mastering both front-end and
            back-end technologies. By learning MEAN Stack, students gain skills
            in creating scalable, high-performance applications using JavaScript
            throughout the development process. Ideal for developers looking to
            expand their expertise, this course provides hands-on experience in
            developing modern web applications and deploying them efficiently.
            {/* Truncated for brevity */}
          </p>

          <div className="flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5">
            <button
              onClick={openModal}
              className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2"
              type="button"
            >
              Download Brochure
              <img className="h-4 sm:h-5 w-4 sm:w-5" src={download} alt="" />
            </button>
            <Link to="/contact">
              <button
                className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2"
                type="button"
              >
                Contact Now
                <img className="h-5 sm:h-6 w-5 sm:w-6" src={telephone} alt="" />
              </button>
            </Link>
            <Link to="/enrollnow">
              <button
                className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-[10px] px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2"
                type="button"
              >
                Enroll Now
                {/* <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" /> */}
              </button>
            </Link>
          </div>
        </div>

        <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
          <img
            className="rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]"
            src="./Images/mean.jpg"
            alt=""
          />
        </div>
      </div>
      {/* digital section close here  */}

      {/* Digital Marketing: Thrive and Grow section start here  */}

      <div className="">
        <div className="h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32">
          <h1 className="text-center text-2xl lg:text-3xl font-bold pt-4">
            "Full-Stack Web Development with MEAN Stack"
          </h1>

          <div className="flex flex-col lg:flex-row justify-center pt-5 m-3">
            {/* Table of Contents */}
            <div className="lg:w-1/2 ">
              <h1 className="text-xl lg:text-2xl font-bold text-center">
                Table of Contents
              </h1>
              {weeks.map((item, index) => (
                <div key={index} className="border-b  border-orange">
                  <button
                    className="w-full flex  justify-between items-center py-4 text-lg font-semibold focus:outline-none"
                    onClick={() => toggleWeek(index)}
                  >
                    <span>{item.week}</span>
                    <i
                      className={`fas fa-chevron-down  transform transition-transform duration-300 ${
                        openWeek === index ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <ul
                    className={`text-lg transition-all duration-500 overflow-hidden ${
                      openWeek === index
                        ? "max-h-auto opacity-100 p-5 pb-4 pt-1 px-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="ml-4 list-disc">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Course Details */}
            <div className="lg:ml-14 lg:pl-5 mt-6 lg:mt-0 lg:w-2/3">
              <h1 className="font-medium text-xl lg:text-2xl">
                Course Details
              </h1>
              <div className="text-[16px] lg:text-[20px] pt-3 font-medium">
                <pre className="font-sans text-lg font-semibold">
                  Level: Beginner
                </pre>
                <pre className="font-sans text-lg font-semibold">
                  Total Duration : 4 months
                </pre>
                <pre className="font-sans text-lg font-semibold">
                  Certificate: Certificate of Completion
                </pre>
              </div>

              {/* Requirements */}
              <div>
                <h1 className="text-xl lg:text-2xl pt-4 font-medium">
                  Requirements
                </h1>
                <p className="pt-3">
                  A basic understanding of the MEAN Stack Stack. The ability to
                  download large files of about 500 MB from the Internet Access
                  to a computer with a 64-bit processor running either Windows,
                  Mac, or Linux
                </p>
              </div>

              {/* Skills */}
              <div>
                <h1 className="font-medium text-xl lg:text-2xl pt-4">
                  What Skills/Competencies Do You Develop?
                </h1>
                <p className="pt-4">
                  At the completion of the MEAN stack course with us, you would
                  be fully knowledgeable about various web development
                  disciplines that include:
                </p>
                <ul className="list-disc pl-6 pt-2">
                  <li>
                    Basic web development concepts and the components of the
                    MEAN stack (MongoDB, Express, Angular, Node.js)
                  </li>
                  <li>Front-end development using HTML, CSS, and JavaScript</li>
                  <li>
                    Building dynamic user interfaces with Angular, focusing on
                    component-based architecture, data binding, and dependency
                    injection
                  </li>
                  <li>
                    Back-end development using Node.js, focusing on server-side
                    JavaScript and handling asynchronous operations
                  </li>
                  <li>
                    Building APIs and handling HTTP requests and responses using
                    Express.js
                  </li>
                  <li>
                    Database management and CRUD operations with MongoDB,
                    including schema design for NoSQL databases
                  </li>
                  <li>
                    Designing and implementing RESTful APIs for client-server
                    communication
                  </li>
                  <li>
                    Authentication and authorization, including handling user
                    login and security using JWT and OAuth
                  </li>
                  <li>
                    Version control using Git, along with collaborating on code
                    using GitHub
                  </li>
                  <li>
                    Deploying and hosting full-stack applications on platforms
                    like Heroku, Netlify, and AWS
                  </li>
                  <li>
                    Optimizing and debugging both front-end and back-end
                    applications
                  </li>
                  <li>
                    Testing and ensuring the quality of your code with unit and
                    integration tests
                  </li>
                  <li>
                    Responsive design and ensuring your web applications are
                    mobile-friendly
                  </li>
                  <li>
                    Mastery of modern web development tools and frameworks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Marketing: Thrive and Grow section close here  */}

      {/* cartificate section start here  */}

      <div className="cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-white gap-4 justify-center items-center">
        {/* Left Content Section */}
        <div className="text-black lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
          {/* Text Content */}
          <h1 className="text-orange ml-10 lg:ml-5 font-medium text-2xl lg:text-3xl pr-40 pt-0 lg:pt-16 ">
            Validating Your Success: About Your Certificate
          </h1>
          <p className="pt-6 lg:pt-10 font-medium mr-6  ml-10 lg:ml-5">
            Once you complete the course videos, assignments, and quizzes, you
            will be able to generate the certificate.
          </p>
          <ul className="list-disc ml-10 lg:ml-5 pl-10 mr-6 pt-4 lg:pt-6">
            <li>After watching 60% of videos</li>
            <li>After scoring 60% in quiz & assignment</li>
            <li>
              After completing 1 medium-level project on Experience Portal
            </li>
          </ul>

          {/* Certificate Information */}
          <div className="pt-6 ">
            <h1 className="text-xl ml-10 lg:ml-5 lg:text-2xl font-medium">
              Certification From JKSD Infotech Pvt. Ltd.
            </h1>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 mb-5 lg:p-5 flex justify-center shadow-xl">
          <img className="h-auto w-full" src={cartificate} alt="Certificate" />
        </div>
      </div>
      {/* Modal for Form */}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Form pdfUrl={Mean} label="MEAN Stack pdf" />
      </Modal>
    </div>
  );
};

export default Mean;
