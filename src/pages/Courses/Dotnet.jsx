import React, { useState } from "react";
import digital from "../../assets/images/digitall.png";
import download from "../../assets/images/download.png";
import cartificate from "../../assets/images/Certificate.jpeg";
import telephone from "../../assets/images/telephone.png";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Dotnet = () => {
  const DotNet = "./brochures/Dotnet.pdf";
  const [openWeek, setOpenWeek] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleWeek = (index) => {
    setOpenWeek(openWeek === index ? null : index);
  };
  const openModal = () => setIsModalOpen(true); // Open modal function
  const closeModal = () => setIsModalOpen(false); // Close modal function

  const weeks = [
    {
      week: "INTRODUCTION TO .NET",
      details: [
       "DATA TYPE, TYPE CASTING, BOXING-UNBOXING",
"CONDITIONAL STATEMENTS (IF-ELSE, MULTIPLE IF, NESTED IF)",
"SWITCH STATEMENT",
"LOGICAL OPERATORS / IF-ELSE QUESTIONS",
"LOOPS (FOR, WHILE, DO-WHILE)",
"CONTINUE / BREAK",
"METHODS (DECLARATION, DEFINITION, CALLING, TYPES OF METHOD)",
"ARRAYS (SINGLE, MULTI, JAGGED)",
"OBJECT CREATION (CALLING NON-STATIC METHOD)",
"MODIFIERS (ACCESS/NON-ACCESS)",
"SPECIAL PROGRAMS ON ARRAYS",
"BASICS OF OOPS THEORY",
"CLASSES AND OBJECTS",
"ENCAPSULATION / DATA HIDING",
"PROPERTIES (READ/WRITE/READ & WRITE/AUTO-IMPLEMENTED)",
"CONSTRUCTOR (PROPERTIES / TYPES DEFAULT/PARAMETERIZED)",
"STATIC VAR/NON-STATIC VARIABLE / STATIC CONSTRUCTOR",
"METHOD OVERLOADING",
      ],
    },
    {
      week: "INHERITENCE (RELATIONSHIPS/ PROPERTIES/ NEED/WHY)",
      details: [
       "TYPES OF INHERITANCE (SINGLE, MULTI-LEVEL, HIERARCHICAL)",
"METHODS OVERRIDING (SINGLE / MULTI-LEVEL)",
"METHOD HIDING (NEW KEYWORD, BASE KEYWORD)",
"CONSTRUCTOR CHAINING",
"USER DEFINED DATA TYPES (USING TOSTRING / USING CONSTRUCTOR)",
"ANONYMOUS OBJECT / BINDING",
"POLYMORPHISM (TYPES OF POLYMORPHISM / UPCASTING)",
"UPCASTING (DOUBTS OF PREVIOUS CLASS --> DIFF B/W HIDING / OVERRIDING)",
"TYPES OF VARIABLES/CLASS/PARAMETERS/METHODS",
"COPY CONSTRUCTOR / PRIVATE CONSTRUCTOR / FACTORY DESIGN PATTERN",
      ],
    },
    {
      week: "ABSTRACTION / ABSTRACT CLASS/ ABSTRACT METHOD",
      details: [
"INTERFACE / EXTENSION METHODS / PARTIAL METHOD / CLASS",
"EXCEPTION HANDLING",
"NAMESPACE / DLL / ASSEMBLIES / ENUMS / INDEXERS / DELEGATES / STRUCTURE",
"COLLECTION",
"DBMS / RDBMS (SQL), COMMANDS (DDL, DML, DQL, TCL, DCL)",
"SELECTION / PROJECTION (IN, OR, LIKE) / INTERCHANGE COLUMNS",
"AGGREGATE FUNC., GROUP BY, ORDER BY, CONSTRAINTS",
"SET OPERATORS / JOINS / SUBQUERIES",
"STORED PROCEDURE / UDF / SYNONYMS / VIEWS",
      ],
    },
    {
      week: "INTRODUCTION OF WEB APPLICATION AND START .NET MVC",
      details: [
        "EXPLAIN ARCHITECTURE OF ASP.NET MVC.",
        "CREATE DB AND TABLE AND SHOW DATA ON MVC PAGE VIEW.",
        "FORM VALIDATION.",
        "FORM VALIDATION.",
        
      ],
    },
    {
      week: "ADD, EDIT, UPDATE AND DELETE",
      details: ["ADD , EDIT, UPDATE AND DELETE",
         "ADD , EDIT, UPDATE AND DELETE",
          "HOW TO INTEGRATE BOOTSTRAP TEMPLATE INTO MVC APPLICATION.",
          "HOW TO INTEGRATE BOOTSTRAP TEMPLATE INTO MVC APPLICATION",
        ],
    },
    {
      week: "LOGIN AND REGISTRATIONS",
      details: [
        " LOGIN AND REGISTRATION",
        "EXPLAIN ALL THE VIEWRESULT AND FILTER.",
        "WEB API CALL.",
        "WEB API ADD, EDIT, UPDATE AND DELETE. WEB API JWT TOKEN",
      ],
    },
    {
      week: "INTRODUCTION OF CORE APPLICATION AND START.NET CORE",
      details: [
        "EXPLAIN ARCHITECTURE OF ASP.NET CORE.",
        "FROM VALIDATION IN CORE",
        "CREATE DB AND TABLE AND SHOW IN CORE PAGE",
        "HOW TO INTEGRATE ASP.NET CORE IDENTITY INTO MVC APPLICATION",
      ],
    },
    {
      week: "HOW TO CONNECT CORE APPLICATION WITH DATABASE.",
      details: [
        "LOGIN AND REGISTRATION",
        "DEPENDENCY INJECTION REPOSITORY PATTERN",
        "WEB API CORE.",
        "DIFFERENT SOURCE CONTROL AND LIKE TFS,GITHUB.",
       
      ],
    },
    
  ];

  return (
    <div className="">
      {/* digital section start here  */}

      <div className="h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row">
        <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
          <h1 className="text-3xl lg:text-4xl font-bold">
            DOT NET & DOT NET CORE
          </h1>
          <p className="pt-2 text-sm lg:text-base mr-10">
            Dive into the world of .NET and .NET Core with our comprehensive
            course! Learn to build robust, scalable applications using C# and
            the powerful .NET framework. Explore essential concepts like MVC
            architecture, web APIs, and cloud integration. Gain hands-on
            experience through real-world projects and master best practices for
            software development. Perfect for beginners and seasoned developers
            looking to enhance their skills in modern application development
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
            src="./Images/dotnet.jpg"
            alt=""
          />
        </div>
      </div>
      {/* digital section close here  */}

      {/* Digital Marketing: Thrive and Grow section start here  */}

      <div className="">
        <div className="h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32">
          <h1 className="text-center text-2xl lg:text-3xl font-bold pt-4">
          Building Modern Applications: A .NET and .NET Core Course
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
                  Total Duration : 3 months
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
                  A basic understanding of the DOT NET & DOT NET CORE . The ability to
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
                In our .NET and .NET Core course, you will develop the following skills and competencies:
                </p>
                <ul className="list-disc pl-6 pt-2">
                  <li>
                  C# Programming: Master the fundamentals and advanced features of C# for effective software development.
                  </li>
                  <li>
                  Framework Proficiency: Understand the differences between .NET Framework and .NET Core and their appropriate use cases.
                  </li>
                  <li>
                  Web Development: Learn to build dynamic web applications using ASP.NET Core MVC and Razor Pages.
                  </li>
                  <li>
                  API Development: Gain skills in creating and consuming RESTful APIs with .NET Core.
                  </li>
                  <li>
                  Database Integration: Work with Entity Framework Core for seamless database operations and data management.
                  </li>
                  <li>
                  Cloud Deployment: Learn how to deploy applications to cloud platforms like Azure for scalability and reliability.
                  </li>
                  <li>
                  Testing and Debugging: Develop techniques for writing unit tests and debugging applications effectively.
                  </li>
                  <li>
                  Version Control: Use Git for version control and collaboration in software development projects.
                  </li>
                  <li>
                  Software Development Best Practices: Understand design patterns, architecture, and coding standards for maintainable code.
                  </li>
                  <li>
                  Project Management: Experience managing a software development lifecycle from planning to deployment.
                  </li>
                  <p>
                  These competencies will prepare you for a successful career in software development and enhance your ability to create high-quality applications.
                  </p>
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
        <Form pdfUrl={DotNet} label="Dot Net Stack pdf" />
      </Modal>
    </div>
  );
};

export default Dotnet;
