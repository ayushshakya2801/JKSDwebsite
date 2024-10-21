import React, { useState } from 'react';
import digital from '../../assets/images/digitall.png';
import download from '../../assets/images/download.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const DataScience = () => {
    const DataScienc = './brochures/DATASCIENCE.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };
    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            "week": "PYTHON BASICS",
            "details": [
               "What is Python",
"Application of Python",
"Why use Python for AI-ML Installation Anaconda/Other Idle",
"Python Tokens",
"Data Types in Python",
"Conditional Statement",
"Loops in Python",
"Functions in Python",
"Advanced Functions",
"File Handling",
            ]
        },
        {
            "week": "Module-2: Python NumPy & Pandas",
            "details": [
                "What is React JS?",
                "Why use React JS?",
                "Introduction to NumPy",
"Exploring a NumPy Array",
"Indexing & Slicing a NumPy Array",
"Manipulating a NumPy Array",
"Performing Mathematical & Statistical Functions using NumPy",
"Performing Linear Algebra Operations using NumPy",
"Introduction to Pandas",
"Exploring Pandas Series",
"Introduction to Pandas DataFrame",
"Importing & Exporting Data",
"Implementing basic DataFrame functionalities",
"Exploring Descriptive Statistics with Pandas",
            ]
        },
        {
            "week": "Modules -3: EDA",
            "details": [
                "Data Types",
                "Dispersion & Skewness",
                "Data imputation",
"Data Pre-processing",
"Data Cleaning",
"Data Manipulation",
"Advanced Manipulation",

            ]
        },
        {
            "week": "Module 4- SQL for Data Analytics",
            "details": [
                "SQL Basic",
"SQL Joins",
"SQL Aggregations",
"Subqueries and Temp Tables",
"SQL Data Cleaning",
"Window Functions",
            ]
        },
        {
            "week": "Module-5: Data Visualization",
            "details": [
               "Why Data Visualization?",
"Introduction to Data Visualization",
"Libraries & Tools for Data Visualization in Python",
"Static Data Visualization Using Seaborn",
"Interactive Data Visualization Using Plotly Express",
"Interactive Animations & Facet Plots",
"Mini Test",
"Mini Assignment",
            ]
        },
        {
            "week":"Module 6: Tableau",
            "details": [
"Understanding Data",
"Creating Your First Visualization",
"Tableau Calculations",
"Formatting Visualizations",
"Manipulating Data in Tableau",
"Creating Dashboards and Stories",
"Distributing & Publishing Your Visualization",
            ]
        },
        {
            "week": "Module 08 - Visual Storytelling using Power BI",
            "details": [
               "Introduction to Power BI",
"Creating Power BI Reports, Auto Filters",
"Report Visualization and Properties",
"Chart and Map Report Properties",
"Hierarchies and Drilldown Reports",
"Power BI Deployment & Cloud",
"Improving Power BI Reports and More",
            ]
        },
        {
            "week": "Module-1: Mathematics for Machine Learning",
            "details": [
                "Linear Algebra",
                "Introduction to Calculus",
                "Multivariable Calculus",
            
            ]
        },
        {
            "week": "Module-2: Statistical Foundations",
            "details": [
               "Applications of Statistics",
"Introduction to Statistics",
"Categories of Data",
"Basic Terminologies in Statistics",
"Sampling Techniques",
"Descriptive Statistics",
"Measures Used in Descriptive Statistics",
"Z-Scores",
            ]
        },
        {
            "week": "Module-3: Probability",
            "details": [
              "What is Probability?",
"Rules of Probability",
"Types of Probability",
"Random Variables",
"Probability Distribution Functions",

            ]
        },
        {
            "week": "Module-4: Inferential Statistics",
            "details": [
               "Introduction to Inferential Statistics",
"Hypothesis Testing",
"Normal Distribution",
"P-value",
"One-tailed and Two-tailed Tests",
"One Sample Z Test",
"One Sample T Test",
"Independent Sample T Test",
"Chi-square Test",
"ANOVA",
            ]
        },


        {

            "week": "Module-1: Introduction to Machine Learning",
            "details": [
               "What is Machine Learning?",
"Applications of Machine Learning",
"Machine Learning in Your Daily Life",
"Machine Learning in Retail",
"Steps Involved in Machine Learning",
            ]
        },
        {
            "week": "Module-2: Regression",
            "details": [
               "Introduction to Regression",
"Linear Regression",
"Evaluation Metrics in Regression Models",
"Logistic Regression",
            ]
        },
        {

            "week": "Module-3: Supervised Classification",
            "details": [
                "Why Use Classification?",
"Application of Classification Algorithms",
"Introduction to Classification",
"Types of Classification Algorithms",
"Classification: Decision Tree",
"Classification: Random Forest",
"ML in Banking & Finance - Benefits",
"Classification: SVM",
"Classification: KNN",
"Classification: Naïve Bayes",
"Evaluating Classification Models",
"Model Optimization Techniques",
"Model Boosting Techniques",
"Introduction to PyCaret",
"Dealing with Unbalanced Datasets",
            ]
        },
        {
            "week": "Module-4: Association Rules Mining",
            "details": [
                "What are Association Rules?",
               "Application of Unsupervised Learning",
"Introduction to Clustering",
"Types of Clustering",
"Partitioning Methods: K-means, DBSCAN, Spectral",
"Hierarchical Methods: Hierarchical",
            ]
        },
        {
            "week": "Module- 6: Dimension Reduction",
            "details": [
                "PCA",
                "Factor Analysis",
                "LDA",
            ]
        },
        {
            "week": "Module-7: Recommendation System",
            "details": [
               "What is a Recommendation System?",
"Need for a Recommendation System",
"Recommendation System Use Cases",
"Applications of Recommendation System",
"Types of Recommendation Systems",
"Collaborative Filtering",
"Content Based Filtering",
"Matrix Factorization",
"Pros and Cons of Collaborative Filtering",
"Content Based Filtering",
"Hybrid Recommender System",
            ]

        },
        {
            "week": "Module-8: Time-series Forecasting",
            "details": [
               "Introduction to Forecasting Data",
"Properties of Time Series Data",
"Features of Time Series Data",
"Markov Processes - Overview and Terminologies",
"Naive, Average and Moving Average Forecasting",
"Exponential Smoothing",
"ARIMA Approach",

            ]
        },
       
      
    ];

    return (
        <div className=''>

            {/* digital section start here  */}

            <div className='h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row'>
                <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
                    <h1 className='text-3xl lg:text-4xl font-bold'>Data Science</h1>
                    <p className='pt-2 text-sm lg:text-base mr-10'>
                    Unlock the power of data with our Data Science course! Learn essential skills in data analysis, machine learning, and statistical modeling. Gain hands-on experience with tools like Python, R, and SQL to transform raw data into actionable insights. Perfect for beginners and professionals looking to enhance their career in the rapidly growing field of data science.
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
                    <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src='./Images/datascience.jpg' alt="" />
                </div>
            </div>
            {/* digital section close here  */}


            {/* Digital Marketing: Thrive and Grow section start here  */}

            <div className=''>
                <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Data Science: From Basics to Insights</h1>

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
                                <pre className='font-sans text-lg font-semibold'>Total Duration :   6 months</pre>
                                <pre className='font-sans text-lg font-semibold'>Certificate:           Certificate of Completion</pre>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                                <p className='pt-3'>
                                    A basic understanding of the Data Science.
                                    The ability to download large files of about 500 MB from the Internet
                                    Access to a computer with a 64-bit processor running either Windows, Mac, or Linux
                                </p>
                            </div>

                            {/* Skills */}
                            <div>
                                <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                                <p className='pt-4'>In our Data Science course, you will develop the following skills and competencies:</p>
                                <ul className='list-disc pl-6 pt-2'>
                                    
                                        <li>Data Analysis: Gain proficiency in analyzing and interpreting complex datasets.
                                        </li>
                                        <li>Statistical Modeling: Learn to apply statistical techniques to derive insights and make predictions.
                                        </li>
                                        <li>Machine Learning: Understand algorithms and frameworks for building predictive models.</li>
                                        <li>Programming: Acquire skills in Python and R for data manipulation and analysis.</li>
                                        <li>Data Visualization: Create compelling visualizations using tools like Tableau and Matplotlib.</li>
                                        <li>Database Management: Learn SQL for data extraction and manipulation from databases.</li>
                                        <li>Data Wrangling: Master techniques for cleaning and preparing raw data for analysis.</li>
                                        <li>Critical Thinking: Develop the ability to formulate data-driven solutions to real-world problems.</li>
                                        <li>Communication: Improve your skills in presenting data insights effectively to various audiences.</li>
                                        <li>Project Management: Experience working on data science projects from conception to delivery.</li>
                                   <p>These competencies will equip you to tackle data challenges across industries and enhance your career opportunities in the field of data science.</p>
                                

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
                <Form pdfUrl={DataScienc} label="Data science  pdf" />
            </Modal>
        </div>

    );
};

export default DataScience;