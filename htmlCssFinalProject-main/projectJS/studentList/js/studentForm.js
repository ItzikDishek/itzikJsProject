
let local_ar = localStorage["students"] ? JSON.parse(localStorage["students"]) : [];

const init = () => {
  declareViewEvents();
}


const declareViewEvents = () => {
  let form = document.querySelector("#id_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let studentObj = {
      name: document.querySelector("#name").value,
      score: document.querySelector("#score").value,
      subject: document.querySelector("#subject").value,
    }
    console.log(studentObj);
    if (studentObj.name.length < 2) {
      return alert("Name too short, min 2 chars");
    }
    else if (studentObj.score < 1 || studentObj.score > 100) {
      return alert("Score need to be between 1 to 100");
    }
    local_ar.push(studentObj);
    console.log(local_ar);
    localStorage.setItem("students", JSON.stringify(local_ar))

  })
}



init();