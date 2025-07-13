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

  // Segundo Año
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

  // Tercer Año
  {
    semestre: "Tercer Año - V Semestre",
    cursos: [
      { id: "matPrim", nombre: "Materias primas vegetales y animales", prereqs: ["quimOrg2"] },
      { id: "labInst", nombre: "Laboratorio de análisis instrumental", prereqs: ["labAnalQuim", "quimAnal2"] },
      { id: "modGest2", nombre: "Módulo de gestión 2", prereqs: ["modGest1"] },
      { id: "fisicoqAli", nombre: "Fisicoquímica orientada en alimentos", prereqs: ["electro", "fisicoq1"] },
      { id: "ecuaciones", nombre: "Ecuaciones diferenciales", prereqs: ["algebra"] },
      { id: "dibujoIng", nombre: "Dibujo en ingeniería", prereqs: ["calcMult"] },
      { id: "comCiencia", nombre: "Comunicación en ciencia y tecnología de los alimentos", prereqs: ["ingles4"] }
    ]
  },
  {
    semestre: "Tercer Año - VI Semestre",
    cursos: [
      { id: "bioqGral", nombre: "Bioquímica general", prereqs: ["matPrim"] },
      { id: "quimAli", nombre: "Química y análisis de los alimentos", prereqs: ["labInst"] },
      { id: "opUnit1", nombre: "Operaciones unitarias 1", prereqs: ["ecuaciones", "fisicoqAli"] },
      { id: "propFisAli", nombre: "Propiedades físicas de los alimentos", prereqs: [] },
      { id: "practica1", nombre: "Práctica 1 - Unidad de investigación", prereqs: ["comCiencia"] }
    ]
  },

  // Cuarto Año
  {
    semestre: "Cuarto Año - VII Semestre",
    cursos: [
      { id: "bioqAli", nombre: "Bioquímica de los alimentos", prereqs: ["bioqGral"] },
      { id: "legislacion", nombre: "Legislación alimentaria", prereqs: ["quimAli"] },
      { id: "nutricion", nombre: "Nutrición", prereqs: ["quimAli"] },
      { id: "opUnit2", nombre: "Operaciones unitarias 2", prereqs: ["opUnit1"] },
      { id: "seguridad", nombre: "Seguridad industrial", prereqs: ["opUnit1"] },
      { id: "envases", nombre: "Envases y embalajes", prereqs: ["propFisAli", "fisicoqAli"] }
    ]
  },
  {
    semestre: "Cuarto Año - VIII Semestre",
    cursos: [
      { id: "higSan", nombre: "Higiene y sanidad industrial", prereqs: ["bioqAli"] },
      { id: "microbio", nombre: "Microbiología e inocuidad de los alimentos", prereqs: ["bioqAli"] },
      { id: "disenoExp", nombre: "Diseño de experimentos", prereqs: ["computacion"] },
      { id: "procBajaTemp", nombre: "Procesos de conservación por bajas temperaturas", prereqs: ["opUnit2"] },
      { id: "procAltaTemp", nombre: "Procesos de conservación a altas temperaturas", prereqs: ["opUnit2"] },
      { id: "disenoPlantas", nombre: "Diseño de plantas", prereqs: ["dibujoIng", "opUnit2"] },
      { id: "practica2", nombre: "Práctica 2", prereqs: ["practica1", "seguridad"] }
    ]
  },

  // Quinto Año
  {
    semestre: "Quinto Año - IX Semestre",
    cursos: [
      { id: "procCons", nombre: "Ing. de procesos de conservación de alimentos", prereqs: ["procBajaTemp", "procAltaTemp"] },
      { id: "procCarn", nombre: "Ing. de procesos en productos cárnicos", prereqs: ["procAltaTemp"] },
      { id: "evalSensorial", nombre: "Evaluación sensorial", prereqs: ["procAltaTemp", "procBajaTemp"] },
      { id: "evalProy", nombre: "Evaluación de proyectos", prereqs: ["disenoPlantas"] },
      { id: "procGrasas", nombre: "Ing. de procesos en grasas y aceites", prereqs: ["procBajaTemp", "procAltaTemp"] },
      { id: "procCereales", nombre: "Ing. de procesos en cereales", prereqs: ["procBajaTemp"] }
    ]
  },
  {
    semestre: "Quinto Año - X Semestre",
    cursos: [
      { id: "procLacteos", nombre: "Ing. de procesos en lácteos", prereqs: ["procBajaTemp"] },
      { id: "procMar", nombre: "Ing. de procesos en productos del mar", prereqs: ["procBajaTemp", "procAltaTemp"] },
      { id: "procFerment", nombre: "Ing. de procesos en fermentaciones", prereqs: ["higSan", "microbio"] },
      { id: "gestionCal", nombre: "Gestión de calidad", prereqs: ["evalSensorial", "procFerment"] },
      { id: "practicaProf", nombre: "Práctica profesional IA", prereqs: ["procLacteos", "procMar", "gestionCal"] },
      { id: "titulacion", nombre: "Actividad final de titulación", prereqs: ["gestionCal", "procLacteos", "procMar"] }
    ]
  },

  // Sexto Año
  {
    semestre: "Sexto Año - XI Semestre",
    cursos: [
      { id: "ppFinal", nombre: "Práctica profesional", prereqs: ["practicaProf"] },
      { id: "finalTesis", nombre: "Actividad final de titulación", prereqs: ["titulacion"] }
    ]
  }
];

// Guardar estado en localStorage
let estado = JSON.parse(localStorage.getItem("estadoCursos")) || {};

function puedeDesbloquear(curso) {
  return curso.prereqs.every(pr => estado[pr] === "completado");
}

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

function toggleCurso(id) {
  if (estado[id] === "desbloqueado") {
    estado[id] = "completado";
  } else if (estado[id] === "completado") {
    estado[id] = "desbloqueado";
  }
  localStorage.setItem("estadoCursos", JSON.stringify(estado));
  renderizar();
}

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

renderizar();
