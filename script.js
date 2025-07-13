const cursos = [
  // Primer Año
  {
    semestre: "Primer Año - I Semestre",
    cursos: [
      { id: "quimGen1", nombre: "Química general 1", prereqs: [] },
      { id: "tecLab", nombre: "Técnicas de laboratorio químico", prereqs: [] },
      { id: "mecanica", nombre: "Mecánica", prereqs: [] },
      { id: "introCalc", nombre: "Introducción al cálculo", prereqs: [] },
      { id: "ingles1", nombre: "Inglés 1", prereqs: [] },
      { id: "iai1", nombre: "Introducción a la IA 1", prereqs: [] }
    ]
  },
  {
    semestre: "Primer Año - II Semestre",
    cursos: [
      { id: "quimGen2", nombre: "Química general 2", prereqs: ["quimGen1"] },
      { id: "electro", nombre: "Electromagnetismo", prereqs: ["mecanica", "introCalc"] },
      { id: "calcDif", nombre: "Cálculo diferencial integral", prereqs: ["introCalc"] },
      { id: "ingles2", nombre: "Inglés 2", prereqs: ["ingles1"] },
      { id: "iai2", nombre: "Introducción a la IA 2", prereqs: ["iai1"] },
      { id: "labQuimGen", nombre: "Laboratorio de química general", prereqs: ["quimGen1", "tecLab"] }
    ]
  },
  // Segundo Año - III y IV Semestre
  {
    semestre: "Segundo Año - III Semestre",
    cursos: [
      { id: "quimOrg1", nombre: "Química orgánica 1", prereqs: ["quimGen2"] },
      { id: "labOrg", nombre: "Laboratorio de química orgánica", prereqs: ["quimGen2", "quimOrg1", "labQuimGen"] },
      { id: "quimAnal1", nombre: "Química analítica 1", prereqs: ["quimGen2", "labQuimGen"] },
      { id: "estadistica", nombre: "Estadística y análisis de datos", prereqs: ["calcDif"] },
      { id: "calcMult", nombre: "Cálculo avanzado multivariado", prereqs: ["calcDif"] },
      { id: "ingles3", nombre: "Inglés 3", prereqs: ["ingles2"] },
      { id: "comunicacion1", nombre: "Comunicación oral y escrita", prereqs: ["iai1", "iai2"] }
    ]
  },
  {
    semestre: "Segundo Año - IV Semestre",
    cursos: [
      { id: "quimOrg2", nombre: "Química orgánica 2", prereqs: ["quimOrg1"] },
      { id: "quimAnal2", nombre: "Química analítica 2", prereqs: ["quimAnal1"] },
      { id: "fisicoq1", nombre: "Fisicoquímica 1", prereqs: ["quimOrg1"] },
      { id: "labAnalQuim", nombre: "Laboratorio de análisis químico", prereqs: ["quimAnal1", "estadistica"] },
      { id: "modGest1", nombre: "Módulo de gestión 1", prereqs: ["estadistica"] },
      { id: "computacion", nombre: "Computación", prereqs: ["estadistica", "comunicacion1"] },
      { id: "algebra", nombre: "Álgebra lineal y análisis numérico", prereqs: ["calcMult"] },
      { id: "ingles4", nombre: "Inglés 4", prereqs: ["ingles3"] }
    ]
  },
  // Resto de la malla: puedes seguir agregando tus semestres como ya lo hacías...
];

// Estado de los cursos (se guarda en localStorage para mantener el progreso)
let estado = JSON.parse(localStorage.getItem("estadoCursos")) || {};

// Función que evalúa si se puede desbloquear un curso
function puedeDesbloquear(curso) {
  return curso.prereqs.every(pr => estado[pr] === "completado");
}

// Actualiza los estados de todos los cursos (bloqueado, desbloqueado, completado)
function actualizarEstado() {
  cursos.forEach(bloque => {
    bloque.cursos.forEach(curso => {
      if (!estado[curso.id]) {
        estado[curso.id] = puedeDesbloquear(curso) ? "desbloqueado" : "bloqueado";
      }
    });
  });
  localStorage.setItem("estadoCursos", JSON.stringify(estado));
}

// Alterna el estado de un curso cuando se hace clic (de desbloqueado a completado y viceversa)
function toggleCurso(id) {
  if (estado[id] === "desbloqueado") {
    estado[id] = "completado";
  } else if (estado[id] === "completado") {
    estado[id] = "desbloqueado";
  }
  localStorage.setItem("estadoCursos", JSON.stringify(estado));
  renderizar();
}

// Renderiza la malla curricular en pantalla
function renderizar() {
  actualizarEstado();
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  cursos.forEach(bloque => {
    const bloqueDiv = document.createElement("div");
    bloqueDiv.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = bloque.semestre;
    bloqueDiv.appendChild(titulo);

    bloque.cursos.forEach(curso => {
      const cursoDiv = document.createElement("div");
      cursoDiv.className = "course " + estado[curso.id];
      cursoDiv.textContent = curso.nombre;

      if (estado[curso.id] === "desbloqueado" || estado[curso.id] === "completado") {
        cursoDiv.onclick = () => toggleCurso(curso.id);
      }

      bloqueDiv.appendChild(cursoDiv);
    });

    contenedor.appendChild(bloqueDiv);
  });
}

// Inicia la app
renderizar();
