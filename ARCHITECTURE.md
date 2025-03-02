
2.3)
C4Context
    title C4 Architectural Diagram


    Person(applicant, "Applicant", "A person looking for jobs and applying.")
    Person(hrPersonnel, "HR Personnel", "An HR personnel reviewing resumes and applications.")
    
    
    System(jobAppSystem, "Job Application System", "Allows applicants to browse job listings, submit resumes, and prepare for interviews.")

    
    System_Ext(jobDatabase, "Job Database", "Stores all job listings.")
    System_Ext(applicantDatabase, "Applicant Database", "Stores applicant resumes and personal information.")

    
    Rel(applicant, jobAppSystem, "Uses")
    Rel(hrPersonnel, jobAppSystem, "Accesses resumes and applications")
    Rel(jobAppSystem, jobDatabase, "Fetches job listings")
    Rel(jobAppSystem, applicantDatabase, "Stores and retrieves applicant resumes")

    
    UpdateElementStyle(applicant, $fontColor="blue", $bgColor="lightgrey", $borderColor="blue")
    UpdateElementStyle(hrPersonnel, $fontColor="green", $bgColor="lightyellow", $borderColor="green")
    UpdateElementStyle(jobAppSystem, $fontColor="black", $bgColor="lightblue", $borderColor="black")
    UpdateElementStyle(jobDatabase, $fontColor="black", $bgColor="lightgreen", $borderColor="black")
    UpdateElementStyle(applicantDatabase, $fontColor="black", $bgColor="lightgreen", $borderColor="black")

    UpdateRelStyle(applicant, jobAppSystem, $textColor="red", $lineColor="red", $offsetX="10")
    UpdateRelStyle(jobAppSystem, jobDatabase, $textColor="blue", $lineColor="blue", $offsetY="-10")
    UpdateRelStyle(jobAppSystem, applicantDatabase, $textColor="blue", $lineColor="blue", $offsetY="-20")
    UpdateRelStyle(hrPersonnel, jobAppSystem, $textColor="green", $lineColor="green", $offsetX="20")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")

End to End Components for the proposed System:

C4Component Diagrams
    title Job Application System Component Diagram

    Container(webApp, "Web Application", "Allows users to interact with the platform", "ReactJS, Node.js")
    Container(database, "Database", "Stores all job listings and applicant data.", "MySQL")

   
    Component(jobListingPage, "Job Listing Page", "Displays job listings and job details", "ReactJS")
    Component(resumeSubmissionPage, "Resume Submission Page", "Allows applicants to upload resumes", "ReactJS")
    Component(interviewPreparationPage, "Interview Preparation Page", "Provides interview preparation tips", "ReactJS")
    
    Component(jobListingsDb, "Job Listings Database", "Stores job listing details", "MySQL")
    Component(applicantResumesDb, "Applicant Resumes Database", "Stores submitted resumes and applicant information")

    
    jobListingPage --> jobListingsDb : "Fetches job listings"
    resumeSubmissionPage --> applicantResumesDb : "Stores applicant resumes"
    interviewPreparationPage --> jobListingsDb : "Fetches job details for prep"
    webApp --> jobListingsDb : "Queries job listings"
    
    style jobListingPage fill:#f1f8e9,stroke:#8bc34a,stroke-width:2px;
    style resumeSubmissionPage fill:#f1f8e9,stroke:#8bc34a,stroke-width:2px;
    style interviewPreparationPage fill:#f1f8e9,stroke:#8bc34a,stroke-width:2px;
    style jobListingsDb fill:#fff9c4,stroke:#ffeb3b,stroke-width:2px;
    style applicantResumesDb fill:#fff9c4,stroke:#ffeb3b,stroke-width:2px;
