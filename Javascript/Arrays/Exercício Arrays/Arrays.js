const cursos = ["Desenvolvimento de sistemas", "Logística", "Mecânica", "Administração", "Eletrotécnica", 
    "Eletrônica"
];
const divCursos = document.getElementById("cursos");

cursos.forEach((curso) => {
    const inputCurso = document.createElement("input");
    inputCurso.setAttribute('type', 'radio');
    inputCurso.setAttribute('name', "curso");
    const label = document.createElement("label");
    label.innerHTML = curso + "<br>";
    divCursos.appendChild(inputCurso);
    divCursos.appendChild(label);
});