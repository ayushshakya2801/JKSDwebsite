import React, { useState } from 'react';
import digital from '../../assets/images/digitall.png';
import download from '../../assets/images/download.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Mern = () => {
    const mern = './brochures/MERN.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };
    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            "week": "MODULE-1 INTRODUCTION OF JAVASCRIPT ES 5 AND ES6",
            "details": [
                "Basic JavaScript",
                "Object Based JavaScript",
                "Introduction to ES6",
                "JavaScript Helpers (for Each, filter, map, filter, every, some)",
                "String Literals",
                " DE structuring",
                " Rest parameters & spread operator",
                "Arrow function",
                " Default parameter",
                " Class: Inheritance, constructor",
                "Promise"
            ]
        },
        {
            "week": "MODULE-2 INTRODUCTION TO REACTJS",
            "details": [
                "What is React JS?",
                "Why use React JS?",
                "What is a Single Page Application (SPA)?",
                "Why use SPA?",
                "React JS Version",
                "REACT DOM",
                "REACT VIRTUAL DOM",
                "Set up React JS Environment",
                "What is CLI: create-react-app project name",
                "Advantage of using CLI",
                "How to debug a React JS application",
                "Installation of CLI",
                "Install Node JS",
                "Install React JS",
                "Create a 'Hello World' example",
                "Create React JS Project",
                "Understanding of Folder Structure",
                "How to debug a React JS application",
                "Introduction to Babel"
            ]
        },
        {
            "week": "MODULE-3 BASIC FEATURES OF REACTJS AND COMPONENTS",
            "details": [
                "JSX",
                "Render Elements",
                "Types of Components",
                "Class Components",
                "Life Cycle Method of Class components",
                "Functional Components",
                "HOOKS in detail",
                "Use of HOOK",
                "What is state",
                "React Forms",
                "Components and Props",
                "State and Lifecycle",
                "Handling Events",
                "Practice on above topics"

            ]
        },
        {
            "week": "MODULE-4 ROUTING WITH REACT ROUTER",
            "details": [
                "Install/Uninstall React Router",
                "React Router Version 5",
                "React Router Version 6",
                "Setting up React Router",
                "Understand routing in Single Page Applications",
                "Working with Browser Router components",
                "Configuring route with Route component",
                "Making routes dynamic using Route params",
                "Working with nested routes",
                "Navigating to pages using Link and Nav Link component",
                "Redirect routes using Redirect component"

            ]
        },
        {
            "week": "MODULE-5 KEY FEATURES OF REACTJS",
            "details": [
                "Conditional Rendering",
                "Lists and Keys",
                "Forms"
            ]
        },
        {
            "week": "MODULE-6 EVENT HANDLING IN REACT",
            "details": [
                " Understanding React event system",
                "Passing arguments to event handlers",
            ]
        },
        {
            "week": "MODULE-7 WORKING WITH FORMS",
            "details": [
                "Controlled components",
                "Understand the significance of default Value",
                "Prop",
                "Using React ref prop to get access to DOM element"
            ]
        },
        {
            "week": "MODULE-8 INTRODUCTION TO REDUX",
            "details": [
                "What is React Redux?",
                "Why use React Redux?",
                "Redux install and setup",
                "Actions",
                "Reducers",
                "Store",
                "Higher Order Component",
                "Understanding mapStateToProps and mapDispatchToProps usage"
            ]
        },
        {
            "week": "MODULE-9 REDUX ADVANCED",
            "details": [
                "Async Actions",
                "Middleware",
                "What is Redux Saga?",
                "Install and set up Redux Saga",
                "Working with Saga helpers (CRUD Operations)",
                "Sagas vs Promises"
            ]
        },
        {
            "week": "MODULE-10 REACT WITH DESIGN FRAMEWORK",
            "details": [
                " Material UI for design",
                "Formik Validation",
            ]
        },
        {
            "week": "MODULE-11 REACT API’S",
            "details": [
                "Introduction to HTTPS Requests",
                "Introduction to Axios NPM",
                "Introduction to Slider NPM",
                "Integration of any NPM modules",
                "Introduction to Google Map NPM"
            ]
        },


        {

            "week": "MODULE-1 INTRODUCTION TO NODE.JS",
            "details": [
                "Introduction to Node.js",
                "History of Node.js",
                "Introduction to io.js",
                "What is Node.js Foundation",
                "V8 JavaScript Engine",
                "Why Server Side JavaScript?"
            ]
        },
        {
            "week": "MODULE-2 GETTING STARTED WITH NODE.JS",
            "details": [
                "Node.js Architecture",
                "JavaScript Event Loop",
                "Node.js vs. others Server-Side Frameworks",
                "Node.js Application Area",
                "Advantages of Node.js",
                "Limitations of Node.js"
            ]
        },
        {

            "week": "MODULE-3 JAVASCRIPT WITH NODE.JS",
            "details": [
                "Writing Asynchronous Code",

                "Blocking vs. Non-Blocking Code"
            ]
        },
        {
            "week": "MODULE-4 MODULES",
            "details": [
                "Understanding Modules",
                "Built-In Modules",
                "Creating Module",
                "Exporting Module",
                "Importing Modules Node.js CLI and NPM",
                "Node's Package Manager: NPM",
                "Local Packages and Global Packages",
                "Installing, Updating and Removing Module using NPM",
                "Understanding package.json file"
            ]
        },
        {
            "week": "MODULE-5 NODE.JS PACKAGE AND PUBLISHING",
            "details": [
                "Creating a Node Package",
                "Publishing Package",
                "Using published package",
            ]
        },
        {
            "week": "MODULE-6 PACKAGE",
            "details": [
                "ntroduction of NPM Package",
                " Express NPM Package",
                "Multer NPM Package",
                "Node Mail NPM Package",
                "Boot Stripe NPM Package integration",
                "JSONWEBTOKEN NPM Integration",
                "Introduction of crypto-JS"
            ]

        },
        {
            "week": "MODULE-7 CODE DEBUGGING",
            "details": [
                "MODULE-7 CODE DEBUGGING",
                "Node Inspector",
                "IDE Debuggers"

            ]
        },
        {
            "week": "MODULE-8 EXCEPTIONS HANDLING",
            "details": [
                "Try. Catch",
                "Call back",
                "Event Emitters"
            ]
        },
        {
            "week": "MODULE-9 EVENTS",
            "details": [
                "Understanding Events",
                "Event Emitter class",
                "Emitting Event",
                "Listening Event"
            ]
        },
        {
            "week": "MODULE-10 STREAMS",
            "details": [
                "Creating streams",
                "Streams types",
                "Writable Stream",
                "Stream Pipe",
                "Creating Buffer",
                "Buffer decoding"
            ]
        },
        {
            "week": "Week 22: Google AdSense & YouTube",
            "details": [
                "Introduction to Google AdSense",
                "Tips to get AdSense approved",
                "Best practices to monetize videos and blog"
            ]
        },
        {
            "week": "MODULE-11 FILE SYSTEM AND PATH MODULE",
            "details": [
                "Introduction to fs Module",
                "The fs modules operations",
                "Manipulating Files Create, Open, Read, Write",
                "Close, Rename, Delete",
                "Manipulating Directives Create, Read, Remove"
            ]
        },
        {
            "week": "MODULE-12 EXPRESS FRAMEWORK",
            "details": [
                "Understanding Express",
                "Installing Express",
                "Creating and Running Express App",

            ]
        },
        {
            "week": "MODULE-13 ROUTING AND VIEW ENGINES",
            "details": [
                "Router Object",
                "Router Object Methods",
                "View Engine -Handlebars",
                "Response Methods"
            ]
        },
        {
            "week": "MODULE-14 MIDDLEWARE AND REQUEST PROCESSING",
            "details": [
                "Middleware",
                "Express Middleware",
                "Express Request Processing"

            ]
        },
        {
            "week": "MODULE-1 1 INTRODUCTION TO SQL",
            "details": [
                "Understanding NoSQL DB",
                "NoSQL vs. SQL DB",
                "Understanding Mongo DB",
                "Introduction of mongoose Atlas",
                "MongoDB Data types",
                "MongoDB Shell Commands",
                "Understanding db, collection & document",
                "Understanding Embedded documents",
                "Querying database Tools & API",
                "MongoDB Tools",
                "Introduction to Mongo Chef",
                "Mongo Chef for database operations"
            ]
        },
        {
            "week": "MODULE-2 INDEXING AND RELATIONSHIPS",
            "details": [
                "Types of Indexes",
                "Creating an Indexes",
                "Dropping an Indexes",
                "Defining Relationships between Documents"

            ]
        },
        {
            "week": "MODULE-3 MONGO DB ODM -MONGOOSE AND POSTMAN",
            "details": [
                "Introduction to Mongoose",
                "Exploring fundamentals of Mongoose",
                "Mongoose Data Types",
                "Defining Relationships between Documents",
                "Mongoose CRUD operations"

            ]
        },
        {
            "week": "Real-time environmental setup with GitHub",
            "details": [
                "REST API WITH MONGOOSE, MONGODB AND POSTMANCREATING REST API USING EXPRESS AND MONGOOSEIMPLEMENTING THE PROJECT DEPLOYMENT OF MEAN APPLICATION",


            ]
        }
    ];

    return (
        <div className=''>

            {/* digital section start here  */}

            <div className='h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row'>
                <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
                    <h1 className='text-3xl lg:text-4xl font-bold'>MERN Stack</h1>
                    <p className='pt-2 text-sm lg:text-base mr-10'>
                        I am a MERN Stack developer with expertise in building full-stack web applications using MongoDB, Express.js, React, and Node.js. With a strong foundation in both front-end and back-end development, I excel at creating dynamic, responsive, and user-friendly interfaces. I am experienced in API integration, database management, and deploying scalable applications. Passionate about coding, I constantly strive to stay updated with the latest web technologies.
                        {/* Truncated for brevity */}
                    </p>

                    <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
                        <button
                            onClick={openModal}
                            className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
                            Download Brochure
                            <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
                        </button>
                        <Link to='/contact'>
                            <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
                                Contact Now
                                <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
                            </button></Link>
                        <Link to='/enrollnow' >
                            <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-[10px] px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
                                Enroll Now
                                {/* <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" /> */}
                            </button>
                        </Link>
                    </div>

                </div>

                <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
                    <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src='./Images/mernstack.jpg' alt="" />
                </div>
            </div>
            {/* digital section close here  */}


            {/* Digital Marketing: Thrive and Grow section start here  */}

            <div className=''>
                <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>MERN Stack: Thrive and Grow</h1>

                    <div className='flex flex-col lg:flex-row justify-center pt-5 m-3'>
                        {/* Table of Contents */}
                        <div className='lg:w-1/2 '>
                            <h1 className='text-xl lg:text-2xl font-bold text-center'>Table of Contents</h1>
                            {weeks.map((item, index) => (
                                <div key={index} className="border-b  border-orange">
                                    <button
                                        className="w-full flex  justify-between items-center py-4 text-lg font-semibold focus:outline-none"
                                        onClick={() => toggleWeek(index)}
                                    >
                                        <span>{item.week}</span>
                                        <i className={`fas fa-chevron-down  transform transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`}></i>
                                    </button>
                                    <ul
                                        className={`text-lg transition-all duration-500 overflow-hidden ${openWeek === index ? 'max-h-auto opacity-100 p-5 pb-4 pt-1 px-4' : 'max-h-0 opacity-0'}`}
                                    >
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} className="ml-4 list-disc">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Course Details */}
                        <div className='lg:ml-14 lg:pl-5 mt-6 lg:mt-0 lg:w-2/3'>
                            <h1 className='font-medium text-xl lg:text-2xl'>Course Details</h1>
                            <div className='text-[16px] lg:text-[20px] pt-3 font-medium'>
                                <pre className='font-sans text-lg font-semibold'>Level:                   Beginner</pre>
                                <pre className='font-sans text-lg font-semibold'>Total Duration :   4 months</pre>
                                <pre className='font-sans text-lg font-semibold'>Certificate:           Certificate of Completion</pre>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                                <p className='pt-3'>
                                    A basic understanding of the MERN Stack.
                                    The ability to download large files of about 500 MB from the Internet
                                    Access to a computer with a 64-bit processor running either Windows, Mac, or Linux
                                </p>
                            </div>

                            {/* Skills */}
                            <div>
                                <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                                <p className='pt-4'>At the completion of the MERN stack course with us, you would be fully knowledgeable about various web development disciplines that include:</p>
                                <ul className='list-disc pl-6 pt-2'>
                                    
                                        <li>Basic web development concepts and the components of the MERN stack (MongoDB, Express, React, Node.js)</li>
                                        <li>Front-end development using HTML, CSS, and JavaScript</li>
                                        <li>Building dynamic user interfaces with React.js, including component-based architecture, state management, and hooks</li>
                                        <li>Back-end development using Node.js, focusing on server-side JavaScript and handling asynchronous operations</li>
                                        <li>Building APIs and handling HTTP requests and responses using Express.js</li>
                                        <li>Database management and CRUD operations with MongoDB, including schema design for NoSQL databases</li>
                                        <li>Designing and implementing RESTful APIs for client-server communication</li>
                                        <li>Authentication and authorization, including handling user login and security using JWT and OAuth</li>
                                        <li>Managing application state with Redux or React's Context API</li>
                                        <li>Version control using Git, along with collaborating on code using GitHub</li>
                                        <li>Deploying and hosting full-stack applications on platforms like Heroku, Netlify, and AWS</li>
                                        <li>Optimizing and debugging both front-end and back-end applications</li>
                                        <li>Testing and ensuring the quality of your code with unit and integration tests</li>
                                        <li>Responsive design and ensuring your web applications are mobile-friendly</li>
                                        <li>Mastery of modern web development tools and frameworks</li>
                                

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Digital Marketing: Thrive and Grow section close here  */}


            {/* cartificate section start here  */}

            <div className='cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-white gap-4 justify-center items-center'>
                {/* Left Content Section */}
                <div className="text-black lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">

                    {/* Text Content */}
                    <h1 className='text-orange ml-10 lg:ml-5 font-medium text-2xl lg:text-3xl pr-40 pt-0 lg:pt-16 '>
                        Validating Your Success: About Your Certificate
                    </h1>
                    <p className='pt-6 lg:pt-10 font-medium mr-6  ml-10 lg:ml-5'>
                        Once you complete the course videos, assignments, and quizzes, you will be able to generate the certificate.
                    </p>
                    <ul className='list-disc ml-10 lg:ml-5 pl-10 mr-6 pt-4 lg:pt-6'>
                        <li>After watching 60% of videos</li>
                        <li>After scoring 60% in quiz & assignment</li>
                        <li>After completing 1 medium-level project on Experience Portal</li>
                    </ul>

                    {/* Certificate Information */}
                    <div className='pt-6 '>
                        <h1 className='text-xl ml-10 lg:ml-5 lg:text-2xl font-medium'>
                            Certification From JKSD Infotech Pvt. Ltd.
                        </h1>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 mb-5 lg:p-5 flex justify-center shadow-xl">
                    <img className='h-auto w-full' src={cartificate} alt="Certificate" />
                </div>
            </div>
            {/* Modal for Form */}
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <Form pdfUrl={mern} label="MERN Stack pdf" />
            </Modal>
        </div>

    );
};

export default Mern;