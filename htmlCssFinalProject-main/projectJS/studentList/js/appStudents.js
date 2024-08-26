import Student from "./stutentClass.js";

let local_ar = localStorage["students"] ? JSON.parse(localStorage["students"]) : [];

const init = () => {
    createAllStudents(local_ar);
}

const createAllStudents = (_ar) => {
    document.querySelector("#id_tbody").innerHTML = "";
    _ar.forEach((item, i) => {
        let student = new Student("#id_tbody", item, i, delStudent);
        student.render()
    })
}


const delStudent = (_index) => {
    local_ar.splice(_index, 1);
    localStorage.setItem("students", JSON.stringify(local_ar));
    createAllStudents(local_ar)
}

init();