// Datos de la malla: cursos, semestres y prerequisitos (por nombre)
const malla = [
  {
    semestre: "Primer Año - I Semestre",
    cursos: [
      { id: "quimGen1", nombre: "Química general 1", abre: ["quimGen2", "labQuimGen"] },
      { id: "tecLab", nombre: "Técnicas de laboratorio químico", abre: ["labQuimGen"] },
      { id: "mecanica", nombre: "Mecánica", abre: ["electromagnetismo"] },
      { id: "calcIntro", nombre: "Introducción al cálculo", abre: ["calcDifInt", "electromagnetismo"] },
      { id: "ingles1", nombre: "Inglés 1", abre: ["ingles2"] },
      { id: "ia1", nombre: "Introducción a la IA", abre: ["ia2"] }
    ]
  },
  {
    semestre: "Primer Año - II Semestre",
    cursos: [
      { id: "quimGen2", nombre: "Química general 2", abre: ["quimOrg1", "quimAnal1", "labQuimOrg1"] },
      { id: "electromagnetismo", nombre: "Electromagnetismo", abre: ["fisicoquimAlimentos"] },
      { id: "calcDifInt", nombre: "Cálculo diferencial integral", abre: ["calcAdvMult", "estadistica"] },
      { id: "ingles2", nombre: "Inglés 2", abre: ["ingles3"] },
      { id: "ia2", nombre: "Introducción a IA 2", abre: ["comOralEscrita"] },
      { id: "labQuimGen", nombre: "Laboratorio de química general", abre: ["labQuimOrg1", "quimAnal1"] }
    ]
  },
  {
    semestre: "Segundo Año - III Semestre",
    cursos: [
      { id: "quimOrg1", nombre: "Química orgánica 1", abre: ["quimOrg2", "fisicoquim1"] },
      { id: "labQuimOrg", nombre: "Laboratorio de química orgánica", abre: [] },
      { id: "quimAnal1", nombre: "Química analítica", abre: ["quimAnal2", "labAnalQuim"] },
      { id: "estadistica", nombre: "Estadística y análisis de datos", abre: ["labAnalQuim", "modGestion1", "computacion"] },
      { id: "calcAdvMult", nombre: "Cálculo avanzado multivariado", abre: ["algebraLineal", "analisisNumerico", "dibujoIng"] },
      { id: "ingles3", nombre: "Inglés 3", abre: ["ingles4"] },
      { id: "comOralEscrita", nombre: "Comunicación oral y escrita para el ingeniero en alimentos", abre: ["computacion"] }
    ]
  },
  {
    semestre: "Segundo Año - IV Semestre",
    cursos: [
      { id: "quimOrg2", nombre: "Química orgánica 2", abre: ["matPrimasVeg", "matPrimasAnim"] },
      { id: "quimAnal2", nombre: "Química analítica 2", abre: ["labAnalInstrumental"] },
      { id: "fisicoquim1", nombre: "Fisicoquímica 1", abre: ["fisicoquimAlimentos"] },
      { id: "labAnalQuim", nombre: "Laboratorio de análisis químico", abre: ["labAnalInstrumental"] },
      { id: "modGestion1", nombre: "Módulo de gestión 1", abre: ["modGestion2"] },
      { id: "computacion", nombre: "Computación", abre: ["disenoExperimentos"] },
      { id: "algebraLineal", nombre: "Álgebra lineal y análisis numérico", abre: ["ecuacionesDif"] },
      { id: "ingles4", nombre: "Inglés 4", abre: ["comCienciaTecnologia"] }
    ]
  },
  {
    semestre: "Tercer Año - V Semestre",
    cursos: [
      { id: "matPrimasVeg", nombre: "Materias primas y vegetales", abre: ["bioquimGeneral"] },
      { id: "labAnalInstrumental", nombre: "Laboratorio de análisis instrumental", abre: ["quimAnalAlimentos", "operUnitarias"] },
      { id: "modGestion2", nombre: "Módulo de gestión 2", abre: ["gestionFinanciera"] },
      { id: "fisicoquimAlimentos", nombre: "Fisicoquímica orientada en alimentos", abre: ["operUnitarias1", "envasesEmbalajes"] },
      { id: "ecuacionesDif", nombre: "Ecuaciones diferenciales", abre: ["operUnitarias"] },
      { id: "dibujoIng", nombre: "Dibujo en ingeniería", abre: ["disenoPlantas"] },
      { id: "comCienciaTecnologia", nombre: "Comunicación en ciencia y tecnología de los alimentos", abre: ["practica1"] }
    ]
  },
  {
    semestre: "Tercer Año - VI Semestre",
    cursos: [
      { id: "bioquimGeneral", nombre: "Bioquímica general", abre: ["bioquimAlimentos"] },
      { id: "quimAnalAlimentos", nombre: "Química y análisis de los alimentos", abre: ["nutricion", "legislacionAlimentaria"] },
      { id: "operUnitarias1", nombre: "Operaciones unitarias 1", abre: ["seguridadIndustrial", "operUnitarias2"] },
      { id: "propFisAlimentos", nombre: "Propiedades físicas de los alimentos", abre: ["envasesEmbalajes"] },
      { id: "practica1", nombre: "Práctica 1 unidad de investigación", abre: ["practica2"] }
    ]
  },
  {
    semestre: "Cuarto Año - VII Semestre",
    cursos: [
      { id: "bioquimAlimentos", nombre: "Bioquímica de los alimentos", abre: ["microInocuidad", "higieneSanidad"] },
      { id: "legislacionAlimentaria", nombre: "Legislación alimentaria", abre: ["practicaProfesional"] },
      { id: "nutricion", nombre: "Nutrición", abre: [] },
      { id: "operUnitarias2", nombre: "Operaciones unitarias 2", abre: ["disenoExperimentos", "procConservBajas", "procConservAltas", "disenoPlantas"] },
      { id: "seguridadIndustrial", nombre: "Seguridad industrial", abre: ["practica2"] },
      { id: "envasesEmbalajes", nombre: "Envases y embalajes", abre: [] }
    ]
  },
  {
    semestre: "Cuarto Año - VIII Semestre",
    cursos: [
      { id: "higieneSanidad", nombre: "Higiene y sanidad industrial", abre: ["ingProcesosFermentaciones"] },
      { id: "microInocuidad", nombre: "Microbiología e inocuidad de los alimentos", abre: ["ingProcesosFermentaciones", "ingProcesosConservacion"] },
      { id: "disenoExperimentos", nombre: "Diseño de experimentos", abre: [] },
      { id: "procConservBajas", nombre: "Procesos de conservación por bajas temperaturas", abre: [
          "ingProcesosLacteos",
          "ingProcesosMar",
          "ingProcesosCereales",
          "ingProcesosCarnicos",
          "ingProcesosConservacion",
          "ingProcesosGrasasAceites",
          "evaluacionSensorial"
        ]},
      { id: "procConservAltas", nombre: "Procesos de conservación a altas temperaturas", abre: [
          "ingProcesosConservacion",
          "ingProcesosCarnicos",
          "ingProcesosMar",
          "ingProcesosLacteos",
          "ingProcesosCereales",
          "ingProcesosGrasasAceites",
          "evaluacionSensorial"
        ]},
      { id: "disenoPlantas", nombre: "Diseño de plantas", abre: ["evaluacionProyectos"] },
      { id: "practica2", nombre: "Práctica 2", abre: [] }
    ]
  },
  {
    semestre: "Quinto Año - IX Semestre",
    cursos: [
      { id: "ingProcesosConservacion", nombre: "Ingeniería de procesos de conservación de alimentos", abre: [] },
      { id: "ingProcesosCarnicos", nombre: "Ingeniería de procesos en productos cárnicos", abre: [] },
      { id: "evaluacionSensorial", nombre: "Evaluación sensorial", abre: ["gestionCalidad"] },
      { id: "evaluacionProyectos", nombre: "Evaluación de proyectos", abre: [] },
      { id: "ingProcesosGrasasAceites", nombre: "Ingeniería de procesos en grasas y aceites", abre: [] },
      { id: "ingProcesosCereales", nombre: "Ingeniería de procesos en cereales", abre: [] }
    ]
  },
  {
    semestre: "Quinto Año - X Semestre",
    cursos: [
      { id: "ingProcesosLacteos", nombre: "Ingeniería de procesos en lácteos", abre: ["practicaProfesionalIA", "actividadFinalTit"] },
      { id: "ingProcesosMar", nombre: "Ingeniería de procesos en productos del mar", abre: ["practicaProfesionalIA", "actividadFinalTit"] },
      { id: "ingProcesosFermentaciones", nombre: "Ingeniería de procesos en fermentaciones", abre: ["gestionCalidad", "practicaProfesionalIA"] },
      { id: "gestionCalidad", nombre: "Gestión de calidad", abre: ["practicaProfesionalIA", "actividadFinalTit"] }
    ]
  },
  {
    semestre: "Sexto Año - XI Semestre",
    cursos: [
      { id: "practicaProfesionalIA", nombre: "Práctica profesional", abre: [] },
      { id: "actividadFinalTit", nombre: "Actividad final de titulación", abre: [] }
    ]
  }
];

// Estado de los cursos: "bloqueado", "desbloqueado" o "aprobado"
const estadoCursos = {};

// Inicializar: desbloquear solo los del primer semestre
function inicializarEstado() {
  for (const semestre of malla) {
    for (const curso of semestre.cursos) {
      estadoCursos[curso.id] = "bloqueado";
    }
  }
  // Primer semestre desbloqueado
  for (const curso of malla[0].cursos) {
    estadoCursos[curso.id] = "desbloqueado";
  }
}

// Generar HTML de la malla
function renderizarMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (const semestre of malla) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const h2 = document.createElement("h2");
    h2.textContent = semestre.semestre;
    divSemestre.appendChild(h2);

    for (const curso of semestre.cursos) {
      const btn = document.createElement("button");
      btn.className = "curso-btn";
      btn.id = curso.id;
      btn.textContent = curso.nombre;

      // Estado del curso
      const estado = estadoCursos[curso.id];
      btn.classList.add(estado);

      // Si está desbloqueado, puede clickeable
      if (estado === "desbloqueado") {
        btn.addEventListener("click", () => aprobarCurso(curso.id));
      } else {
        btn.disabled = true;
      }

      divSemestre.appendChild(btn);
    }

    container.appendChild(divSemestre);
  }
}

// Cuando apruebas un curso
function aprobarCurso(id) {
  if (estadoCursos[id] !== "desbloqueado") return; // solo si está desbloqueado

  // Marcar como aprobado
  estadoCursos[id] = "aprobado";

  // Desbloquear los que dependen de este curso
  for (const semestre of malla) {
    for (const curso of semestre.cursos) {
      if (estadoCursos[curso.id] === "bloqueado") {
        // Si el curso tiene como requisito el curso aprobado
        if (cursoPrerequisito(curso, id)) {
          estadoCursos[curso.id] = "desbloqueado";
        }
      }
    }
  }

  renderizarMalla();
}

// Ver si el curso tiene como prerequisito el cursoId aprobado
function cursoPrerequisito(curso, cursoId) {
  // Si el curso abre incluye el id aprobado
  // En la lógica dada, el prerequisito es el que abre
  // Es decir, si cursoId abre este curso, entonces este curso se desbloquea.
  // Por eso invertimos la lógica:

  // Buscamos si cursoId abre este curso
  for (const semestre of malla) {
    for (const c of semestre.cursos) {
      if (c.id === cursoId && c.abre.includes(curso.id)) {
        return true;
      }
    }
  }
  return false;
}

// Inicialización
inicializarEstado();
renderizarMalla();
