const task1Students = [
    {
        name: "Ali",
        rollNumber: "BSCS-001",
        department: "Computer Science",
        semester: 6,
        cgpa: 3.45
    },

    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        department: "Computer Science",
        semester: 5,
        cgpa: 2.80
    },

    {
        name: "Sara",
        rollNumber: "BSCS-003",
        department: "Computer Science",
        semester: 6,
        cgpa: 3.75
    },

    {
        name: "Ayesha",
        rollNumber: "BSCS-004",
        department: "Computer Science",
        semester: 4,
        cgpa: 2.35
    },

    {
        name: "Hassan",
        rollNumber: "BSIT-005",
        department: "Information Technology",
        semester: 3,
        cgpa: 2.95
    },

    {
        name: "Usman",
        rollNumber: "BSE-006",
        department: "Software Engineering",
        semester: 2,
        cgpa: 1.85
    }
];


function task1GetAcademicStatus(cgpa) {

    if (cgpa >= 3.00) {
        return "Excellent";
    }
    else if (cgpa >= 2.50) {
        return "Good";
    }
    else if (cgpa >= 2.00) {
        return "Satisfactory";
    }
    else {
        return "Academic Warning";
    }

}


const task1CheckEligibility = cgpa =>
    cgpa >= 2.00
        ? "Eligible"
        : "Not Eligible";




let task1Output = "";


task1Students.forEach(student => {

    const {
        name,
        rollNumber,
        department,
        semester,
        cgpa
    } = student;


    const status =
        task1GetAcademicStatus(cgpa);


    const eligibility =
        task1CheckEligibility(cgpa);


    task1Output += `
        <div class="col-md-6">
            <div class="lab-student-card">

                <h5>${name}</h5>

                <p>
                    <strong>Roll No:</strong> ${rollNumber}<br>
                    <strong>Department:</strong> ${department}<br>
                    <strong>Semester:</strong> ${semester}<br>
                    <strong>CGPA:</strong> ${cgpa}<br>
                    <strong>Status:</strong> ${status}<br>
                    <strong>Eligibility:</strong> ${eligibility}
                </p>

            </div>
        </div>
    `;

});


document.getElementById("task1Output").innerHTML =
    task1Output;



/* =====================================================
   TASK 2 - ONLINE COURSE REGISTRATION SYSTEM
===================================================== */


let task2Courses = [

    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering",
    "Data Structures"

];


/* Add a new course using push() */

task2Courses.push("Cloud Computing");


/* Remove the last course using pop() */

task2Courses.pop();


/* Check Artificial Intelligence using includes() */

const task2AIAvailable =
    task2Courses.includes("Artificial Intelligence");


/* Function to calculate total courses */

function task2GetTotalCourses(courses) {

    return courses.length;

}


/* Arrow Function + Ternary Operator */

const task2GetStudentStatus = totalCourses =>

    totalCourses >= 4
        ? "Full-Time"
        : "Part-Time";


/* Display courses using for...of */

let task2CourseOutput = "";

let task2CourseNumber = 1;


for (const course of task2Courses) {

    task2CourseOutput += `

        <div class="course-item">

            <strong>${task2CourseNumber}.</strong>
            ${course}

        </div>

    `;

    task2CourseNumber++;

}


document.getElementById("task2Courses").innerHTML =
    task2CourseOutput;


/* forEach() */

let task2CourseNames = [];


task2Courses.forEach(course => {

    task2CourseNames.push(course);

});


/* Total Courses */

const task2TotalCourses =
    task2GetTotalCourses(task2Courses);


/* Student Status */

const task2StudentStatus =
    task2GetStudentStatus(task2TotalCourses);


/* Display Result */

document.getElementById("task2Output").innerHTML =

    "<strong>Total Registered Courses:</strong> " +
    task2TotalCourses +

    "<br><br>" +

    "<strong>Artificial Intelligence Available:</strong> " +
    (task2AIAvailable ? "Yes" : "No") +

    "<br><br>" +

    "<strong>Student Status:</strong> " +
    task2StudentStatus;



/* =====================================================
   TASK 3 - STUDENT EXAMINATION AND RESULT PROCESSING
===================================================== */


const task3Students = [

    {
        name: "Sara",
        rollNumber: "BSCS-023",
        assignment: 18,
        midterm: 22,
        finalExam: 42
    },

    {
        name: "Ali",
        rollNumber: "BSCS-024",
        assignment: 17,
        midterm: 20,
        finalExam: 38
    },

    {
        name: "Ahmed",
        rollNumber: "BSCS-025",
        assignment: 15,
        midterm: 18,
        finalExam: 30
    },

    {
        name: "Ayesha",
        rollNumber: "BSCS-026",
        assignment: 12,
        midterm: 17,
        finalExam: 25
    },

    {
        name: "Hassan",
        rollNumber: "BSCS-027",
        assignment: 8,
        midterm: 12,
        finalExam: 20
    }

];


/* Function to Calculate Total */

function task3CalculateTotal(
    assignment,
    midterm,
    finalExam
) {

    return assignment + midterm + finalExam;

}


/* Arrow Function to Calculate Average */

const task3CalculateAverage =
    (assignment, midterm, finalExam) => {

        return (
            assignment +
            midterm +
            finalExam
        ) / 3;

    };


/* Function to Calculate Grade */

function task3CalculateGrade(total) {

    if (total >= 80) {
        return "A";
    }
    else if (total >= 70) {
        return "B";
    }
    else if (total >= 60) {
        return "C";
    }
    else if (total >= 50) {
        return "D";
    }
    else {
        return "F";
    }

}


/* Display Results */

let task3Output = "";


/* Count Passed Students */

let task3PassedStudents = 0;


/* forEach() + Object Destructuring */

task3Students.forEach(student => {

    const {
        name,
        rollNumber,
        assignment,
        midterm,
        finalExam
    } = student;


    /* Calculate Total */

    const total =
        task3CalculateTotal(
            assignment,
            midterm,
            finalExam
        );


    /* Calculate Average */

    const average =
        task3CalculateAverage(
            assignment,
            midterm,
            finalExam
        );


    /* Calculate Grade */

    const grade =
        task3CalculateGrade(total);


    /* Ternary Operator */

    const status =
        total >= 50
            ? "Passed"
            : "Failed";


    if (status === "Passed") {

        task3PassedStudents++;

    }


    task3Output += `

        <div class="lab-result-card">

            <h5>Student: ${name}</h5>

            <p>

                <strong>Roll No:</strong>
                ${rollNumber}

                <br><br>

                <strong>Assignment:</strong>
                ${assignment}

                <br>

                <strong>Midterm:</strong>
                ${midterm}

                <br>

                <strong>Final Exam:</strong>
                ${finalExam}

                <br><br>

                <strong>Total:</strong>
                ${total}

                <br>

                <strong>Average:</strong>
                ${average.toFixed(2)}

                <br>

                <strong>Grade:</strong>
                ${grade}

                <br>

                <strong>Status:</strong>
                ${status}

            </p>

        </div>

    `;

});


document.getElementById("task3Output").innerHTML =
    task3Output;


/* Additional Challenge - for loop */

let task3FailedStudents = 0;


for (
    let i = 0;
    i < task3Students.length;
    i++
) {

    const {
        assignment,
        midterm,
        finalExam
    } = task3Students[i];


    const total =
        task3CalculateTotal(
            assignment,
            midterm,
            finalExam
        );


    if (total < 50) {

        task3FailedStudents++;

    }

}


/* Display Statistics */

document.getElementById("task3Statistics").innerHTML =

    "<strong>Total Students:</strong> " +
    task3Students.length +

    "<br>" +

    "<strong>Passed Students:</strong> " +
    task3PassedStudents +

    "<br>" +

    "<strong>Failed Students:</strong> " +
    task3FailedStudents;



/* =====================================================
   TASK 4 - UNIVERSITY STUDENT PERFORMANCE DASHBOARD
===================================================== */


/* ES6 CLASS */

class Student {

    constructor(
        name,
        rollNumber,
        department,
        semester,
        cgpa,
        marks
    ) {

        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.semester = semester;
        this.cgpa = cgpa;
        this.marks = marks;

    }

}


/* Create 6 Student Objects */

const task4Students = [

    new Student(
        "Ali",
        "BSCS-001",
        "Computer Science",
        6,
        3.45,
        82
    ),

    new Student(
        "Ahmed",
        "BSCS-002",
        "Computer Science",
        5,
        2.80,
        67
    ),

    new Student(
        "Sara",
        "BSCS-003",
        "Computer Science",
        6,
        3.75,
        91
    ),

    new Student(
        "Ayesha",
        "BSCS-004",
        "Computer Science",
        4,
        2.35,
        74
    ),

    new Student(
        "Hassan",
        "BSIT-005",
        "Information Technology",
        3,
        2.95,
        58
    ),

    new Student(
        "Usman",
        "BSE-006",
        "Software Engineering",
        2,
        1.85,
        45
    )

];


/* Grade Calculation Function */

function task4CalculateGrade(marks) {

    if (marks >= 80) {

        return "A";

    }
    else if (marks >= 70) {

        return "B";

    }
    else if (marks >= 60) {

        return "C";

    }
    else if (marks >= 50) {

        return "D";

    }
    else {

        return "F";

    }

}


/* Arrow Function + Ternary Operator */

const task4GetStatus = cgpa =>

    cgpa >= 2.0
        ? "Eligible"
        : "Academic Warning";


/* Array Method - push() */

let task4Departments = [

    "Computer Science",
    "Information Technology"

];


task4Departments.push(
    "Software Engineering"
);


/* Array Method - includes() */

const task4HasComputerScience =

    task4Departments.includes(
        "Computer Science"
    );


/* Dashboard Output */

let task4DashboardOutput = "";


/* Passed Students */

let task4PassedStudents = 0;


/* forEach() */

task4Students.forEach(student => {


    /* Object Destructuring */

    const {
        name,
        rollNumber,
        department,
        semester,
        cgpa,
        marks
    } = student;


    /* Grade */

    const grade =
        task4CalculateGrade(marks);


    /* Academic Status */

    const status =
        task4GetStatus(cgpa);


    /* Count Passed Students */

    if (marks >= 50) {

        task4PassedStudents++;

    }


    /* Create Student Card */

    task4DashboardOutput += `

        <div class="col-md-6">

            <div class="dashboard-card">

                <h5>
                    Student: ${name}
                </h5>

                <p>

                    <strong>Roll No:</strong>
                    ${rollNumber}

                    <br>

                    <strong>Department:</strong>
                    ${department}

                    <br>

                    <strong>Semester:</strong>
                    ${semester}

                    <br>

                    <strong>CGPA:</strong>
                    ${cgpa}

                    <br>

                    <strong>Marks:</strong>
                    ${marks}

                    <br>

                    <strong>Grade:</strong>
                    ${grade}

                    <br>

                    <strong>Status:</strong>
                    ${status}

                </p>

            </div>

        </div>

    `;

});


/* Display Dashboard */

document.getElementById("task4Output").innerHTML =
    task4DashboardOutput;



/* =====================================================
   TASK 4 - FOR LOOP
===================================================== */


let task4PassedUsingLoop = 0;


for (
    let i = 0;
    i < task4Students.length;
    i++
) {

    if (task4Students[i].marks >= 50) {

        task4PassedUsingLoop++;

    }

}


const task4FailedStudents =

    task4Students.length -
    task4PassedUsingLoop;


/* Dashboard Statistics */

document.getElementById("task4Statistics").innerHTML =

    "<strong>Total Students:</strong> " +
    task4Students.length +

    "<br>" +

    "<strong>Passed Students:</strong> " +
    task4PassedUsingLoop +

    "<br>" +

    "<strong>Failed Students:</strong> " +
    task4FailedStudents;



/* =====================================================
   TASK 4 - FOR...OF
===================================================== */


let task4ForOfOutput = "";


for (const student of task4Students) {

    task4ForOfOutput +=

        student.name +
        ", ";

}


/* =====================================================
   TASK 4 - FOR...IN
===================================================== */


let task4ObjectOutput = "";


const firstStudent =
    task4Students[0];


for (const property in firstStudent) {

    task4ObjectOutput +=

        "<strong>" +
        property +
        ":</strong> " +
        firstStudent[property] +
        "<br>";

}


document.getElementById("task4ObjectInfo").innerHTML =

    task4ObjectOutput;



/* =====================================================
   TASK 4 - DEPARTMENT INFORMATION
===================================================== */


document.getElementById("task4Departments").innerHTML =

    "<strong>Departments:</strong> " +

    task4Departments.join(", ") +

    "<br><br>" +

    "<strong>Computer Science Available:</strong> " +

    (task4HasComputerScience
        ? "Yes"
        : "No") +

    "<br><br>" +

    "<strong>Students using for...of:</strong><br>" +

    task4ForOfOutput;