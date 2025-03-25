let studentsName = ["Acer", "Apple", "ASUS", "Dell", "HP"];
let list = document.querySelector(".list");
function displayStudents() {
  studentsName.forEach(function (i) {
    list.innerHTML += `<li>${i} </li>`;
  });
}
displayStudents();

function addStudent() {
  let newStudent = document.querySelector(".action input").value;
  if (newStudent) {
    studentsName.push(newStudent);
    list.innerHTML = "";
    displayStudents();
    document.querySelector(".action input").value = "";
  } else {
    alert("Please enter a student name");
  }
}
