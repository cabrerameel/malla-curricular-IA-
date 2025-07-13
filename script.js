// Datos de la malla curricular
const cursos = [
  // Primer año
  {
    semestre: "Primer año - I Semestre",
    cursos: [
      { id: "quimGen1", nombre: "Química general 1", abre: ["quimGen2", "labQuimGen"] },
      { id: "tecLabQuim", nombre: "Técnicas de laboratorio químico", abre: ["labQuimGen"] },
      { id: "mecanica", nombre: "Mecánica", abre: ["electromagnetismo"] },
      { id: "calcIntro", nombre: "Introducción al cálculo", abre: ["calcDifInt", "electromagnetismo"] },
      { id: "ingles1", nombre: "Inglés 1", abre: ["ingles2"] },
      { id: "iaIntro1", nombre: "Introducción a la IA", abre: ["iaIntro2"] },
    ],
  },
  {
    semestre: "Primer año - II Semestre",
    cursos: [
      { id: "quimGen2", nombre: "Química general 2", abre: ["quimOrg1", "quimAnal1", "labQuimOrg1"] },
      { id: "electromagnetismo", nombre: "Electromagnetismo", abre: ["fisicoquimAlim"] },
      { id: "calcDifInt", nombre: "Cálculo diferencial e integral", abre: ["calcAvanzMult", "estadistica"] },
      { id: "ingles2", nombre: "Inglés 2", abre: ["ingles3"] },
      { id: "iaIntro2", nombre: "Introducción a la IA 2", abre: ["comOralEscrita"] },
      { id: "labQuimGen", nombre: "Laboratorio de química general", abre: ["labQuimOrg1", "quimAnal1"] },
    ],
  },

  // Segundo año
  {
    semestre: "Segundo año - III Semestre",
    cursos: [
      { id: "quimOrg1", nombre: "Química orgánica 1", abre: ["quimOrg2", "fisicoquim1"] },
      { id: "labQuimOrg", nombre: "Laboratorio de química orgánica", abre: [] },
      { id: "quimAnal1", nombre: "Química analítica", abre: ["quimAnal2", "labAnalQuim"] },
      { id: "estadistica", nombre: "Estadística y análisis de datos", abre: ["labAnalQuim", "modGestion1", "computacion"] },
      { id: "calcAvanzMult", nombre: "Cálculo avanzado multivariado", abre: ["algebraLineal", "analisisNumerico", "dibujoIngenieria"] },
      { id: "ingles3", nombre: "Inglés 3", abre: ["ingles4"] },
      { id: "comOralEscrita", nombre: "Comunicación oral y escrita para el ingeniero en alimentos", abre: ["computacion"] },
    ],
  },
  {
    semestre: "Segundo año - IV Semestre",
    cursos: [
      { id: "quimOrg2", nombre: "Química orgánica 2", abre: ["matPrimasVegetalesAnimales"] },
      { id: "quimAnal2", nombre: "Química analítica 2", abre: ["labAnalInstrumental"] },
      { id: "fisicoquim1", nombre: "Fisicoquímica 1", abre: ["fisicoquimAlim"] },
      { id: "labAnalQuim", nombre: "Laboratorio de análisis químico", abre: ["labAnalInstrumental"] },
      { id: "modGestion1", nombre: "Módulo de gestión 1", abre: ["modGestion2"] },
      { id: "computacion", nombre: "Computación", abre: ["disenoExperimentos"] },
      { id: "algebraLineal", nombre: "Álgebra lineal y análisis numérico", abre: ["ecuacionesDiferenciales"] },
      { id: "ingles4", nombre: "Inglés 4", abre: ["comCienciaTecnAlim"] },
    ],
  },

  // Tercer año
  {
    semestre: "Tercer año - V Semestre",
    cursos: [
      { id: "matPrimasVegetalesAnimales", nombre: "Materias primas y vegetales", abre: ["bioquimGen"] },
      { id: "labAnalInstrumental", nombre: "Laboratorio de análisis instrumental", abre: ["quimAnalAlim", "operUnitarias"] },
      { id: "modGestion2", nombre: "Módulo de gestión 2", abre: ["gestionFinanciera"] },
      { id: "fisicoquimAlim", nombre: "Fisicoquímica orientada en alimentos", abre: ["operUnitarias1", "envasesEmbalajes"] },
      { id: "ecuacionesDiferenciales", nombre: "Ecuaciones diferenciales", abre: ["operUnitarias"] },
      { id: "dibujoIngenieria", nombre: "Dibujo en ingeniería", abre: ["disenoPlantas"] },
      { id: "comCienciaTecnAlim", nombre: "Comunicación en ciencia y tecnología de los alimentos", abre: ["practica1UnidadInv"] },
    ],
  },
  {
    semestre: "Tercer año - VI Semestre",
    cursos: [
      { id: "bioquimGen", nombre: "Bioquímica general", abre: ["bioquimAlim"] },
      { id: "quimAnalAlim", nombre: "Química y análisis de los alimentos", abre: ["nutricion", "legislacionAlimentaria"] },
      { id: "operUnitarias1", nombre: "Operaciones unitarias 1", abre: ["seguridadIndustrial", "operUnitarias2"] },
      { id: "propFisAlim", nombre: "Propiedades físicas de los alimentos", abre: ["envasesEmbalajes"] },
      { id: "practica1UnidadInv", nombre: "Práctica 1 unidad de investigación", abre: ["practica2"] },
    ],
  },

  // Cuarto año
  {
    semestre: "Cuarto año - VII Semestre",
    cursos: [
      { id: "bioquimAlim", nombre: "Bioquímica de los alimentos", abre: ["microInocuidadAlim", "higieneSanidadInd"] },
      { id: "legislacionAlimentaria", nombre: "Legislación alimentaria", abre: ["practicaProfesional"] },
      { id: "nutricion", nombre: "Nutrición", abre: [] },
      { id: "operUnitarias2", nombre: "Operaciones unitarias 2", abre: ["disenoExperimentos", "procConservBajasTemp", "procConservAltasTemp", "disenoPlantas"] },
      { id: "seguridadIndustrial", nombre: "Seguridad industrial", abre: ["practica2"] },
      { id: "envasesEmbalajes", nombre: "Envases y embalajes", abre: [] },
    ],
  },
  {
    semestre: "Cuarto año - VIII Semestre",
    cursos: [
      { id: "higieneSanidadInd", nombre: "Higiene y sanidad industrial", abre: ["ingProcesFermentaciones"] },
      { id: "microInocuidadAlim", nombre: "Microbiología e inocuidad de los alimentos", abre: ["ingProcesFermentaciones", "ingProcesConservAlim"] },
      { id: "disenoExperimentos", nombre: "Diseño de experimentos", abre: [] },
      { id: "procConservBajasTemp", nombre: "Procesos de conservación por bajas temperaturas", abre: ["ingProcesLacteos", "ingProcesProdMar", "ingProcesCereales", "ingProcesProdCarnicos", "ingProcesConservAlim", "ingProcesGrasasAceites", "evaluacionSensorial"] },
      { id: "procConservAltasTemp", nombre: "Procesos de conservación a altas temperaturas", abre: ["ingProcesConservAlim", "ingProcesCarnicos", "ingProcesProdMar", "ingProcesLacteos", "ingProcesCereales", "ingProcesGrasasAceites", "evaluacionSensorial"] },
      { id: "disenoPlantas", nombre: "Diseño de plantas", abre: ["evaluacionProyectos"] },
      { id: "practica2", nombre: "Práctica 2", abre: [] },
    ],
  },

  // Quinto año
  {
    semestre: "Quinto año - IX Semestre",
    cursos: [
      { id: "ingProcesConservAlim", nombre: "Ingeniería de procesos de conservación de alimentos", abre: [] },
      { id: "ingProcesProdCarnicos", nombre: "Ingeniería de procesos en productos cárnicos", abre: [] },
      { id: "evaluacionSensorial", nombre: "Evaluación sensorial", abre: ["gestionCalidad"] },
      { id: "evaluacionProyectos", nombre: "Evaluación de proyectos", abre: [] },
      { id: "ingProcesGrasasAceites", nombre: "Ingeniería de procesos en grasas y aceites", abre: [] },
      { id: "ingProcesCereales", nombre: "Ingeniería de procesos en cereales", abre: [] },
    ],
  },
  {
    semestre: "Quinto año - X Semestre",
    cursos: [
      { id: "ingProcesLacteos", nombre: "Ingeniería de procesos en lácteos", abre: ["practicaProfIA", "actividadFinalTit"] },
      { id: "ingProcesProdMar", nombre: "Ingeniería de procesos en productos del mar", abre: ["practicaProfIA", "actividadFinalTit"] },
      { id: "ingProcesFermentaciones", nombre: "Ingeniería de procesos en fermentaciones", abre: ["gestionCalidad", "practicaProfIA"] },
      { id: "gestionCalidad", nombre: "Gestión de calidad", abre: ["practicaProfIA", "actividadFinalTit"] },
    ],
  },

  // Sexto año
  {
    semestre: "Sexto año - XI Semestre",
    cursos: [
      { id: "practicaProfesional", nombre: "Práctica profesional", abre: [] },
      { id: "actividadFinalTit", nombre: "Actividad final de titulación", abre: [] },
    ],
  },
];

// Estado de desbloqueo
// Inicial: desbloquear solo los cursos sin prerequisitos (o sea los primeros del primer semestre)
const desbloqueados = new Set();

// Para simplificar, desbloqueamos al principio los cursos sin prerequisitos: los que no están en ningun "abre" de otro curso
// Primero guardamos todos ids que abren otros
const cursosQueAbren = new Set();
for (const semestre of cursos) {
  for (const curso of semestre.cursos) {
    for (const abierto of curso.abre) {
      cursosQueAbren.add(abierto);
    }
  }
}
// Los cursos que no están en cursosQueAbren son "iniciales"
for (const semestre of cursos) {
  for (const curso of semestre.cursos) {
    if (!cursosQueAbren.has(curso.id)) {
      desbloqueados.add(curso.id);
    }
  }
}

// Pero ojo, en tu malla, por ejemplo "Química general 1" abre otros, por eso no es inicial,  
// Los cursos que no aparecen como "abre" son finales, no iniciales.  
// Entonces vamos a invertir la lógica:
// Los cursos sin prerequisito son los que NUNCA aparecen en "abre" de ningún otro.  
// Pero en tu malla no están los prerequisitos explícitos, sino las aperturas.
// Así que el primer semestre es inicial, o los cursos del primer semestre.

// Por lo tanto, para simplicidad: desbloqueamos solo los cursos del primer semestre I del primer año inicialmente.
desbloqueados.clear();
cursos[0].cursos.forEach(c => desbloqueados.add(c.id));

// Función para saber si un curso está desbloqueado
function estaDesbloqueado(id) {
  return desbloqueados.has(id);
}

// Función para desbloquear cursos que se abren con uno dado
function desbloquearCursos(ids) {
  let cambios = false;
  for (const id of ids) {
    if (!desbloqueados.has(id)) {
      desbloqueados.add(id);
      cambios = true;
    }
  }
  return cambios;
}

// Renderizado de la malla
function renderizarMalla() {
  const mallaDiv = document.getElementById("malla");
  mallaDiv.innerHTML = "";

  for (const semestre of cursos) {
    const semDiv = document.createElement("div");
    semDiv.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre.semestre;
    semDiv.appendChild(titulo);

    for (const curso of semestre.cursos) {
      const cursoDiv = document.createElement("div");
      cursoDiv.textContent = curso.nombre;
      cursoDiv.classList.add("curso");

      if (estaDesbloqueado(curso.id)) {
        cursoDiv.classList.add("unlocked");
        cursoDiv.title = "Haz clic para desbloquear cursos relacionados";

        cursoDiv.addEventListener("click", () => {
          // Al hacer click, desbloqueamos los cursos que abre este curso
          const cambio = desbloquearCursos(curso.abre);
          if (cambio) {
            renderizarMalla();
          }
        });
      } else {
        cursoDiv.classList.add("locked");
        cursoDiv.title = "Curso bloqueado, desbloquea prerrequisitos primero";
      }

      semDiv.appendChild(cursoDiv);
    }
    mallaDiv.appendChild(semDiv);
  }
}

// Inicial render
renderizarMalla();
