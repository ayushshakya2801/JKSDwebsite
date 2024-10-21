import React, { useState } from "react";
import digital from "../../assets/images/digitall.png";
import download from "../../assets/images/download.png";
import cartificate from "../../assets/images/Certificate.jpeg";
import telephone from "../../assets/images/telephone.png";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const CouldComputer = () => {
  const aws = "./brochures/AWS.pdf";
  const [openWeek, setOpenWeek] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleWeek = (index) => {
    setOpenWeek(openWeek === index ? null : index);
  };
  const openModal = () => setIsModalOpen(true); // Open modal function
  const closeModal = () => setIsModalOpen(false); // Close modal function

  const weeks = [
    {
      week: "CLOUD COMPUTING",
      details: [
        "What is Cloud Computing?",
        "What is Infrastructure?",
        "What is On-premise Infrastructure?",
        "What is Virtualization Infrastructure?",
        "What is Cloud Infrastructure?",
        "What is DevOps Infrastructure?",
        "What is Hyper-V?",
        "Deploy VM using Hyper-V",
        "Types of Cloud Services",
        "What is AWS Cloud?",
        "How to Create AWS Account",
        "What is Regions?",
        "What is Zone?",
        "What is Security Group?",
        "How to Create Security Group",
        "What is Key Pair?",
        "How to Create Key Pair",
        "What is AMI & Custom AMI?",
        "How to Create Custom AMI",
        "What is Instance Type in AWS?",
        "What is EBS Volume?",
        "How to Create EBS Volume",
        "How to Attach EBS Volume with Instance",
        "What is Instance Storage?",
        "What is TAG?",
        "What is Elastic IP Address?",
        "Deploy Instance in AWS Cloud",
        "Project 1",
      ],
    },
    {
      week: "MODULE-2 INTRODUCTION OF LINUX",
      details: [
        "Introduction of Linux",
        "Introduction of Linux Directories",
        "Introduction of Linux User Interfaces",
        "Create Linux User & Login",
        "How to Create File in Linux",
        "How to Create Directory in Linux?",
        "How to Edit Files using Vim Command",
        "How to Install Packages in Linux?",
        "How to Deploy Linux Instance in AWS",
        "How to Login Linux Server in On-premise",
        "What is Putty?",
        "How to Access Linux Server Via Putty",
        "How to Move File from One Directory to Another",
        "How to Copy Data from One Directory to Another",
        "How to Upload Data from Windows to Linux Instance",
        "How to Install Webserver Service in Linux",
        "How to Restart Linux Services",
        "How to Deploy Website in Linux Instance",
        "Project 2",
      ],
    },
    {
      week: "MODULE-3 INTRODUCTION OF WINDOWS",
      details: [
        "What is Operating System?",
        "Type of Operating System",
        "How to Create Windows Instance in AWS",
        "How to Access Windows Instance in On-premise",
        "How to Install IIS Webserver Service",
        "How to Deploy Website in Windows Instance",
        "Project 3",
      ],
    },
    {
      week: "AWS NETWORK",
      details: [
        "What is Network?",
        "What is VPC in AWS?",
        "How to Create VPC",
        "What is Subnet?",
        "How to Create Subnet",
        "What is Route Table?",
        "How to Create Route Table",
        "What is Gateway?",
        "How to Create Internet Gateway",
        "What is NAT Gateway?",
        "How to Create NAT Gateway",
        "What is VPN Gateway?",
        "How to Create VPN Gateway",
        "What is Peering Connection?",
        "How to Create Peering Connection",
        "What is IP Address?",
        "What is IPV4?",
        "What is Subnetting?",
        "PROJECT 4",
      ],
    },
    {
      week: "MODULE-5 AWS CLOUD SERVICES",
      details: [
        "What is Load Balancer?",
        "Type of Load Balancer",
        "What is Public Load Balancer?",
        "What is Private Load Balancer?",
        "How to Create Public Load Balancer?",
        "How to Create Private Load Balancer?",
        "How to Attach Instance with Load Balancer?",
        "How to Remove Instance with Load Balancer?",
        "What is Auto Scaling?",
        "How to Create Auto Scaling in AWS Cloud?",
        "What is Launch Configuration in Auto Scaling?",
        "How to Create Launch Configuration?",
        "What is Target Group?",
        "How to Create Target Group?",
        "How to Use Custom AMI with Auto Scaling?",
        "How to Use Load Balancer with Auto Scaling?",
        "How to Use VPC with Auto Scaling?",
        "What is Route 53?",
        "What is Hosted Zone in Route 53?",
        "How to Create Route 53 Hosted Zone?",
        "What is Route 53 Records?",
        "How to Create Route 53 Records?",
        "What is SNS?",
        "How to Create SNS?",
        "Project 5",
      ],
    },
    {
      week: "MODULE-6 INTRODUCTION STORAGE & DATABASE",
      details: [
        "What is Cloud Storage?",
        "Type of Cloud Storage",
        "What is S3 Storage?",
        "How to Create S3 Storage?",
        "What is Versioning?",
        "How to Enable Versioning?",
        "What is Replication?",
        "How to Enable Replication?",
        "How to Deploy Static Website?",
        "How to Connect S3 Storage with On-Premise?",
        "What is EFS?",
        "How to Create EFS?",
        "How to Attach EFS with Linux Instance?",
        "What is RDS?",
        "How to Create RDS?",
        "How to Attach RDS with Linux Instance?",
        "How to Attach RDS with Windows Instance?",
        "How to Create Table in RDS?",
        "How to Create Database in RDS?",
        "What is DynamoDB?",
        "How to Create DynamoDB?",
        "How to Create Table in DynamoDB?",
        "How to Add Item in DynamoDB?",
        "Project 6",
      ],
    },
    {
      week: "MODULE-7 INTRODUCTION OF CLOUD SECURITY",
      details: [
        "AWS Security - IAM: An Introduction",
        "AWS Security - IAM Users",
        "How to Create IAM User",
        "AWS Security - IAM Groups",
        "How to Create Group",
        "How to Add User in Group",
        "How to Login IAM User",
        "AWS Security - IAM Policy",
        "How to Create IAM Policy",
        "How to Attach IAM Policy with User",
        "How to Attach IAM Policy with Group",
        "AWS Security - IAM Roles",
        "How to Create IAM Role",
        "How to Attach IAM Role",
        "AWS Security - MFA",
        "How to Attach MFA with User",
        "What is Cloud Watch?",
        "What is Cloud Formation?",
        "What is Cloud Trail?",
        "Project 7",
      ],
    },
  ];

  return (
    <div className="">
      {/* digital section start here  */}

      <div className="h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row">
        <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
          <h1 className="text-3xl lg:text-4xl font-bold">CLOUD COMPUTING </h1>
          <p className="pt-2 text-sm lg:text-base mr-10">
          This course on Cloud Computing provides a comprehensive overview of cloud technologies, including infrastructure, deployment models, and key services like AWS and Azure. Participants will explore essential concepts such as virtualization, security, and storage solutions, while gaining practical skills in creating and managing cloud environments. By the end of the course, learners will be equipped to leverage cloud computing for business solutions and optimize resource management in the digital age.
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
            src='./Images/cloudcomputing.jpg'
            alt=""
          />
        </div>
      </div>
      {/* digital section close here  */}

      {/* Digital Marketing: Thrive and Grow section start here  */}

      <div className="">
        <div className="h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32">
          <h1 className="text-center text-2xl lg:text-3xl font-bold pt-4">
            Data Science: From Basics to Insights
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
                  Total Duration : 2 months
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
                A basic understanding of cloud concepts, along with the ability to download large files (around 500 MB) from the Internet. Participants should have access to a computer with a 64-bit processor running Windows, Mac, or Linux.

                </p>
              </div>

              {/* Skills */}
              <div>
                <h1 className="font-medium text-xl lg:text-2xl pt-4">
                  What Skills/Competencies Do You Develop?
                </h1>
                <p className="pt-4">
                In a Cloud Computing course, you can expect to develop the following skills and competencies:


                </p>
                <ul className="list-disc pl-6 pt-2">
                  <li>
                    DUnderstanding Cloud Models: Gain knowledge of different cloud service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid).
                  </li>
                  <li>
                  Cloud Infrastructure Management: Learn to create, manage, and optimize cloud resources using platforms like AWS, Azure, or Google Cloud.
                  </li>
                  <li>
                  Security Best Practices: Understand cloud security fundamentals, including identity and access management (IAM), encryption, and compliance.
                  </li>
                  <li>
                  Data Storage Solutions: Explore various cloud storage options, including object storage (e.g., Amazon S3), block storage (e.g., EBS), and databases (e.g., RDS, DynamoDB).
                  </li>
                  <li>
                  Networking in the Cloud: Learn to design and implement virtual networks, subnets, and gateways.
                  </li>
                  <li>
                  Monitoring and Management: Gain skills in using monitoring tools and services for resource management, performance tracking, and cost optimization.
                  </li>
                  <li>
                  Deployment and Automation: Understand automation tools and practices for deploying applications and managing infrastructure as code (IaC).
                  </li>
                  <li>
                  Troubleshooting and Support: Develop problem-solving skills for diagnosing and resolving issues in cloud environments.
                  </li>
                  
                  <p>
                  These competencies will prepare you for a career in cloud computing, equipping you with the essential knowledge and skills needed in the field.
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
        <Form pdfUrl={aws} label="AWS  pdf" />
      </Modal>
    </div>
  );
};

export default CouldComputer;
