"use strict"

const addButton = document.getElementById("add_score")
const clearButton = document.getElementById("clear_scores")
const calcButton = document.getElementById("calculate")


//grades lists
let AP_and_College_grades = []
let honors_grades = []
let college_prep_grades = []
let oneSemester_AP_and_College_grades = []
let oneSemester_honors_grades = []
let oneSemester_college_prep_grades = []

let oneSemesterCount = 0


function addInfo() {
    const classType = document.getElementById("classType")
    const className = document.getElementById("className")
    const grade = document.getElementById("grade")
    const classLength = document.getElementById("duration")
    const textBox = document.getElementById("classInfo")

    //add if and else statement to make sure there is stuff in the boxes of there is not, alert user
    if (isNaN(grade.value) || className.value == "" || grade.value == "") {
        alert("enter valid information. Make sure you enter a class and only numbers in grade box.")
    } else {

    let info = classLength.value + " of " + classType.value + " " + className.value + ": " + grade.value
    textBox.innerText += info + "\n"
    
    //make it add score to specific list
    if (classLength.value == "One Semester") {
        oneSemesterCount += 1
        if (classType.value == "AP" || classType.value == "UConn" || classType.value == "PLTW") {
            oneSemester_AP_and_College_grades.push(grade.value)
        } else if (classType.value == "Honors"){
            oneSemester_honors_grades.push(grade.value)
        } else if (classType.value == "CollegePrep") {
            oneSemester_college_prep_grades.push(grade.value)
        }
    } else {
    if (classType.value == "AP" || classType.value == "UConn" || classType.value == "PLTW") {
        AP_and_College_grades.push(grade.value)
    } else if (classType.value == "Honors"){
        honors_grades.push(grade.value)
    } else if (classType.value == "CollegePrep") {
        college_prep_grades.push(grade.value)
    }
}
}
    className.value = ""
    grade.value = "" 
}

function twoSemesterCalculator() {
    let GPAlist = []
    let GPA = null
    for (let score of AP_and_College_grades) {
        if (score >= 93) 
            GPA = 4.5 
        else if (93 > score && score >= 90) 
            GPA = 4.2 
        else if  (90 > score && score >= 87)
            GPA = 3.8
        else if (87 > score && score >= 83)
            GPA = 3.5
        else if (83 > score && score >= 80)
            GPA = 3.2
        else if (80 > score && score >= 77)
            GPA = 2.8
        else if (77 > score && score >= 73)
            GPA = 2.5
        else if (73 > score && score >= 70)
            GPA = 2.2
        else if (70 > score && score >= 67)
            GPA = 1.8
        else if (67 > score && score >= 63)
            GPA = 1.5
        else if (63 > score && score >= 60)
            GPA = 1.2
        else if (score < 60)
            GPA = 0
        GPAlist.push(GPA)
    }

    for (let score of honors_grades) {
        if (score >= 93)
            GPA = 4.3 
        else if (93 > score && score >= 90)
            GPA = 4.0
        else if  (90 > score && score >= 87)
            GPA = 3.6
        else if (87 > score && score >= 83)
            GPA = 3.3
        else if (83 > score && score >= 80)
            GPA = 3.0
        else if (80 > score && score >= 77)
            GPA = 2.6
        else if (77 > score && score >= 73)
            GPA = 2.3
        else if (73 > score && score >= 70)
            GPA = 2.0
        else if (70 > score && score >= 67)
            GPA = 1.6
        else if (67 > score && score >= 63)
            GPA = 1.3
        else if (63 > score && score >= 60)
            GPA = 1.0
        else if (score < 60)
            GPA = 0
        GPAlist.push(GPA)
    }

    for (let score of college_prep_grades) {
        if (score >= 93)
            GPA = 4.0
        else if (93 > score && score >= 90)
            GPA = 3.7
        else if  (90 > score && score >= 87)
            GPA = 3.3
        else if (87 > score && score >= 83)
            GPA = 3.0
        else if (83 > score && score >= 80)
            GPA = 2.7
        else if (80 > score && score >= 77)
            GPA = 2.3
        else if (77 > score && score >= 73)
            GPA = 2.0
        else if (73 > score && score >= 70)
            GPA = 1.7
        else if (70 > score && score >= 67)
            GPA = 1.3
        else if (67 > score && score >= 63)
            GPA = 1.0
        else if (63 > score && score >= 60)
            GPA = .7
        else if (score < 60)
            GPA = 0
        GPAlist.push(GPA)
    }
    return GPAlist
}

function oneSemesterCalculator() {
    let GPAlist = []
    let GPA = null
    for (let score of oneSemester_AP_and_College_grades) {
        if (score >= 93) 
            GPA = 4.5 
        else if (93 > score && score >= 90) 
            GPA = 4.2 
        else if  (90 > score && score >= 87)
            GPA = 3.8
        else if (87 > score && score >= 83)
            GPA = 3.5
        else if (83 > score && score >= 80)
            GPA = 3.2
        else if (80 > score && score >= 77)
            GPA = 2.8
        else if (77 > score && score >= 73)
            GPA = 2.5
        else if (73 > score && score >= 70)
            GPA = 2.2
        else if (70 > score && score >= 67)
            GPA = 1.8
        else if (67 > score && score >= 63)
            GPA = 1.5
        else if (63 > score && score >= 60)
            GPA = 1.2
        else if (score < 60)
            GPA = 0
        GPAlist.push(GPA)
    }

    for (let score of oneSemester_honors_grades) {
        if (score >= 93)
            GPA = 4.3 
        else if (93 > score && score >= 90)
            GPA = 4.0
        else if  (90 > score && score >= 87)
            GPA = 3.6
        else if (87 > score && score >= 83)
            GPA = 3.3
        else if (83 > score && score >= 80)
            GPA = 3.0
        else if (80 > score && score >= 77)
            GPA = 2.6
        else if (77 > score && score >= 73)
            GPA = 2.3
        else if (73 > score && score >= 70)
            GPA = 2.0
        else if (70 > score && score >= 67)
            GPA = 1.6
        else if (67 > score && score >= 63)
            GPA = 1.3
        else if (63 > score && score >= 60)
            GPA = 1.0
        else if (score < 60)
            GPA = 0
        GPAlist.push(GPA)
    }

    for (let score of oneSemester_college_prep_grades) {
        if (score >= 93)
            GPA = 4.0
        else if (93 > score && score >= 90)
            GPA = 3.7
        else if  (90 > score && score >= 87)
            GPA = 3.3
        else if (87 > score && score >= 83)
            GPA = 3.0
        else if (83 > score && score >= 80)
            GPA = 2.7
        else if (80 > score && score >= 77)
            GPA = 2.3
        else if (77 > score && score >= 73)
            GPA = 2.0
        else if (73 > score && score >= 70)
            GPA = 1.7
        else if (70 > score && score >= 67)
            GPA = 1.3
        else if (67 > score && score >= 63)
            GPA = 1.0
        else if (63 > score && score >= 60)
            GPA = .7
        else if (score < 60)
            GPA = 0
        GPAlist.push(GPA)
    }
    return GPAlist
}


function calculateGPA() {
    const textBox = document.getElementById("classInfo")
    if (textBox.innerText == "") {
        alert("Enter Information")
    } else {
    let GPAs = []
    let oneSemesterGPAs = oneSemesterCalculator()
    let twoSemesterGPAs = twoSemesterCalculator()
    console.log(oneSemesterGPAs)
    console.log(twoSemesterGPAs)

    const finalGPA = document.getElementById("GPA") //get paragraph where GPA is put
    let sum = 0
    for (let num of oneSemesterGPAs) {
        GPAs.push(num/2)
    }
    for (let num of twoSemesterGPAs) {
        GPAs.push(num)
    }
    for (let GPA of GPAs) {
        sum += GPA
        }
    console.log(GPAs)
    console.log(sum)
    console.log(oneSemesterCount)
    finalGPA.innerText = sum/(GPAs.length-(oneSemesterCount/2))
    GPAs = []
    }
}


function clearInfo() {
    const finalGPA = document.getElementById("GPA")
    const className = document.getElementById("className")
    const grade = document.getElementById("grade")
    const textBox = document.getElementById("classInfo")

    className.value = ""
    grade.value = ""
    textBox.innerText = ""
    finalGPA.innerText = "GPA will appear here after calculating"

    AP_and_College_grades = []
    honors_grades = []
    college_prep_grades = []
    oneSemester_AP_and_College_grades = []
    oneSemester_honors_grades = []
    oneSemester_college_prep_grades = []
    oneSemesterCount = 0
}

addButton.addEventListener("click", addInfo)
clearButton.addEventListener("click", clearInfo)
calcButton.addEventListener("click", calculateGPA)