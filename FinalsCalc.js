"use strict"


//getting the buttons
const calculateButton = document.getElementById("calculate")
const clearButton = document.getElementById("clear")
const lengthSelect = document.getElementById("duration")
const gradeNeeded = document.getElementById("grade")

//getting the divs
const oneSemesterInfo = document.getElementById("oneSemester")
const twoSemesterInfo = document.getElementById("twoSemester")

//----functions----//

function finalsCalculator() {
    let finalExam = null
    if (lengthSelect.value == "oneSemester") {
        const q1grade = document.getElementById("q1grade1s").value
        const q2grade = document.getElementById("q2grade1s").value
        const desiredGrade = document.getElementById("desiredGrade1s").value
        if (isNaN(q1grade) || isNaN(q2grade) || isNaN(desiredGrade)) {
            alert("Fill out all entry fields with valid numbers")
        } else {
            finalExam = ((desiredGrade - .4*q1grade - .4*q2grade)/.2)
            gradeNeeded.innerText = "You need a " + finalExam + " to end with a " + desiredGrade + " overall"
        }
    } else if (lengthSelect.value == "twoSemesters") {
        const q1grade = document.getElementById("q1grade2s").value
        const q2grade = document.getElementById("q2grade2s").value
        const q3grade = document.getElementById("q3grade2s").value
        const q4grade = document.getElementById("q4grade2s").value
        const midterm = document.getElementById("midtermGrade2").value
        const desiredGrade = document.getElementById("desiredGrade2s").value
        if (isNaN(q1grade) || isNaN(q2grade) || isNaN(desiredGrade) || isNaN(q3grade) || isNaN(q4grade) || isNaN(midterm)) {
            alert("Fill out all entry fields with valid numbers")
        } else {
            finalExam = ((desiredGrade - .2*q1grade - .2*q2grade - .2*q3grade - .2*q4grade - .1*midterm)/.1)
            gradeNeeded.innerText = "You need at least a " + finalExam + " to end with a " + desiredGrade + " overall"
        }
    } else {
        alert('Select a Class Length')
    }
}

function displayChanger() {
    if (lengthSelect.value == "oneSemester") {
        if (twoSemesterInfo.classList != "close" && oneSemesterInfo.classList == "close") {
            twoSemesterInfo.classList.add("close")
            oneSemesterInfo.classList.remove("close")
        } else {
            oneSemesterInfo.classList.remove("close")
        }
    } else if (lengthSelect.value == "twoSemesters") {
        if (oneSemesterInfo.classList != "close" && twoSemesterInfo.classList == "close") {
            oneSemesterInfo.classList.add("close")
            twoSemesterInfo.classList.remove("close")
        } else {
            twoSemesterInfo.classList.remove("close")
        }
    } else {
        oneSemesterInfo.classList.add("close")
        twoSemesterInfo.classList.add("close")
    }
}

function clearAll() {
    if (oneSemesterInfo.classList != "close")
        oneSemesterInfo.classList.add("close")
    if (twoSemesterInfo.classList != "close")
        twoSemesterInfo.classList.add("close")
    lengthSelect.value = "selectClassLength"
    gradeNeeded.innerText = "Grade will appear here after calculating"
    document.getElementById("q1grade2s").value = ""
    document.getElementById("q2grade2s").value = ""
    document.getElementById("q3grade2s").value = ""
    document.getElementById("q4grade2s").value = ""
    document.getElementById("midtermGrade2").value = ""
    document.getElementById("desiredGrade2s").value = ""
    document.getElementById("q1grade1s").value = ""
    document.getElementById("q2grade1s").value = ""
    document.getElementById("desiredGrade1s").value = ""
}

//Event Listeners

calculateButton.addEventListener("click", finalsCalculator)
clearButton.addEventListener("click", clearAll)
lengthSelect.addEventListener("change", displayChanger)