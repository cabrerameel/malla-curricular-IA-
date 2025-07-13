// Definición de cursos y prerrequisitos (usamos id para referencia interna)
const cursos = [
  // Primer año - I Semestre
  { id: "quimGen1", nombre: "Química general 1", prereqs: [], abre: ["quimGen2", "labQuimGen"] },
  { id: "tecLabQuim", nombre: "Técnicas de laboratorio químico", prereqs: [], abre: ["labQuimGen"] },
  { id: "mecanica", nombre: "Mecánica", prereqs: [], abre: ["electromagnetismo"] },
  { id: "introCalculo", nombre: "Introducción al cálculo", prereqs: [], abre: ["calculoDifInt", "electromagnetismo"] },
  { id: "ingles1", nombre: "Inglés 1", prereqs: [], abre: ["ingles2"] },
  { id: "introIA1", nombre: "Introducción a la IA", prereqs: [], abre: ["introIA2"] },

  // Primer año - II Semestre
  { id: "quimGen2", nombre: "Química general 2", prereqs: ["quimGen1"], abre: ["quimOrg1", "quimAnalit1", "labQuimOrg1"] },
  { id: "electromagnetismo", nombre: "Electromagnetismo", prereqs: ["mecanica", "introCalculo"], abre: ["fisicoquimAlimentos"] },
  { id: "calculoDifInt", nombre: "Cálculo diferencial e integral", prereqs: ["introCalculo"], abre: ["calculoMultivar", "estadistica"] },
  { id: "ingles2", nombre: "Inglés 2", prereqs: ["ingles1"], abre: ["ingles3"] },
  { id: "introIA2", nombre: "Introducción a la IA 2", prereqs: ["introIA1"], abre: ["comOralEscrita"] },
  { id: "labQuimGen", nombre: "Laboratorio de química general", prereqs: ["quimGen1", "tecLabQuim"], abre: ["labQuimOrg1", "quimAnalit1"] },

  // Segundo año - III Semestre
  { id: "quimOrg1", nombre: "Química orgánica 1", prereqs: ["quimGen2"], abre: ["quimOrg2", "fisicoquim1"] },
  { id: "labQuimOrg", nombre: "Laboratorio de química orgánica", prereqs: [], abre: [] },
  { id: "quimAnalit1", nombre: "Química analítica 1", prereqs: ["quimGen2"], abre: ["quimAnalit2", "labAnalitico"] },
  { id: "estadistica", nombre: "Estadística y análisis de datos", prereqs: ["calculoDifInt"], abre: ["labAnalitico", "modGestion1", "computacion"] },
  { id: "calculoMultivar", nombre: "Cálculo avanzado multivariado", prereqs: ["calculoDifInt"], abre: ["algebraLineal", "analisisNumerico", "dibujoIng"] },
  { id: "ingles3", nombre: "Inglés 3", prereqs: ["ingles2"], abre: ["ingles4"] },
  { id: "comOralEscrita", nombre: "Comunicación oral y escrita", prereqs: ["introIA2"], abre: ["computacion"] },

  // Segundo año - IV Semestre
  { id: "quimOrg2", nombre: "Química orgánica 2", prereqs: ["quimOrg1"], abre: ["matPrimVeg", "matPrimAnim"] },
  { id: "quimAnalit2", nombre: "Química analítica 2", prereqs: ["quimAnalit1"], abre: ["labAnalitInstrumental"] },
  { id: "fisicoquim1", nombre: "Fisicoquímica 1", prereqs: ["quimOrg1"], abre: ["fisicoquimAlimentos"] },
  { id: "labAnalitico", nombre: "Laboratorio de análisis químico", prereqs: ["quimAnalit1", "estadistica"], abre: ["labAnalitInstrumental"] },
  { id: "modGestion1", nombre: "Módulo de gestión 1", prereqs: ["estadistica"], abre: ["modGestion2"] },
  { id: "computacion", nombre: "Computación", prereqs: ["estadistica", "comOralEscrita"], abre: ["disenoExperimentos"] },
  { id: "algebraLineal", nombre: "Álgebra lineal y análisis numérico", prereqs: ["calculoMultivar"], abre: ["ecuacionesDiferenciales"] },
  { id: "ingles4", nombre: "Inglés 4", prereqs: ["ingles3"], abre: ["comCienciaAlimentos"] },

  // Tercer año - V Semestre
  { id: "matPrimVeg", nombre: "Materias primas y vegetales", prereqs: ["quimOrg2"], abre: ["bioquimGen"] },
  { id: "labAnalitInstrumental", nombre: "Laboratorio de análisis instrumental", prereqs: ["quimAnalit2", "labAnalitico"], abre: ["quimAlim", "operUnitarias"] },
  { id: "modGestion2", nombre: "Módulo de gestión 2", prereqs: ["modGestion1"], abre: ["gestionFinanciera"] },
  { id: "fisicoquimAlimentos", nombre: "Fisicoquímica orientada en alimentos", prereqs: ["fisicoquim1", "electromagnetismo"], abre: ["operUnit1", "envasesEmbalajes"] },
  { id: "ecuacionesDiferenciales", nombre: "Ecuaciones diferenciales", prereqs: ["algebraLineal"], abre: ["operUnitarias"] },
  { id: "dibujoIng", nombre: "Dibujo en ingeniería", prereqs: ["calculoMultivar"], abre: ["disenoPlantas"] },
  { id: "comCienciaAlimentos", nombre: "Comunicación en ciencia y tecnología de los alimentos", prereqs: ["ingles4"], abre: ["practica1"] },

  // Tercer año - VI Semestre
  { id: "bioquimGen", nombre: "Bioquímica general", prereqs: ["matPrimVeg"], abre: ["bioquimAlim"] },
  { id: "quimAlim", nombre: "Química y análisis de los alimentos", prereqs: ["labAnalitInstrumental"], abre: ["nutricion", "legislacionAlimentaria"] },
  { id: "operUnit1", nombre: "Operaciones unitarias 1", prereqs: ["fisicoquimAlimentos"], abre: ["seguridadInd", "operUnit2"] },
  { id: "propFisAlim", nombre: "Propiedades físicas de los alimentos", prereqs: [], abre: ["envasesEmbalajes"] },
  { id: "practica1", nombre: "Práctica 1 unidad de investigación", prereqs: ["comCienciaAlimentos"], abre: ["practica2"] },

  // Cuarto año - VII Semestre
  { id: "bioquimAlim", nombre: "Bioquímica de los alimentos", prereqs: ["bioquimGen"], abre: ["microbiologia", "higieneSanidad"] },
  { id: "legislacionAlimentaria", nombre: "Legislación alimentaria", prereqs: ["quimAlim"], abre: ["practicaProf"] },
  { id: "nutricion", nombre: "Nutrición", prereqs: ["quimAlim"], abre: [] },
  { id: "operUnit2", nombre: "Operaciones unitarias 2", prereqs: ["operUnit1"], abre: ["disenoExperimentos", "procConservBajasTemp", "procConservAltasTemp", "disenoPlantas"] },
  { id: "seguridadInd", nombre: "Seguridad industrial", prereqs: ["operUnit1"], abre: ["practica2"] },
  { id: "envasesEmbalajes", nombre: "Envases y embalajes", prereqs: ["fisicoquimAlimentos", "propFisAlim"], abre: [] },

  // Cuarto año - VIII Semestre
  { id: "higieneSanidad", nombre: "Higiene y sanidad industrial", prereqs: ["bioquimAlim"], abre: ["ingenieriaFermentaciones"] },
  { id: "microbiologia", nombre: "Microbiología e inocuidad de los alimentos", prereqs: ["bioquimAlim"], abre: ["ingenieriaFermentaciones", "ingenieriaConservacion"] },
  { id: "disenoExperimentos", nombre: "Diseño de experimentos", prereqs: ["computacion", "operUnit2"], abre: [] },
  { id: "procConservBajasTemp", nombre: "Procesos de conservación por bajas temperaturas", prereqs: ["operUnit2"], abre: ["ingenieriaLacteos", "ingenieriaProdMar", "ingenieriaCereales", "ingenieriaProdCarnicos", "ingenieriaConservacion", "ingenieriaGrasasAceites", "evaluacionSensorial"] },
  { id: "procConservAltasTemp", nombre: "Procesos de conservación a altas temperaturas", prereqs: ["operUnit2"], abre: ["ingenieriaConservacion", "ingenieriaProdCarnicos", "ingenieriaProdMar", "ingenieriaLacteos", "ingenieriaCereales", "ingenieriaGrasasAceites", "evaluacionSensorial"] },
  { id: "disenoPlantas", nombre: "Diseño de plantas", prereqs: ["dibujoIng", "operUnit2"], abre: ["evaluacionProyectos"] },
  { id: "practica2", nombre: "Práctica 2", prereqs: ["practica1", "seguridadInd"], abre: [] },

  // Quinto año - VIIII Semestre
  { id: "ingenieriaConservacion", nombre: "Ingeniería de procesos de conservación de alimentos", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: [] },
  { id: "ingenieriaProdCarnicos", nombre: "Ingeniería de procesos en productos cárnicos", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: [] },
  { id: "evaluacionSensorial", nombre: "Evaluación sensorial", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: ["gestionCalidad"] },
  { id: "evaluacionProyectos", nombre: "Evaluación de proyectos", prereqs: ["disenoPlantas"], abre: [] },
  { id: "ingenieriaGrasasAceites", nombre: "Ingeniería de procesos en grasas y aceites", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: [] },
  { id: "ingenieriaCereales", nombre: "Ingeniería de procesos en cereales", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: [] },

  // Quinto año - X Semestre
  { id: "ingenieriaLacteos", nombre: "Ingeniería de procesos en lácteos", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: ["practicaProfIA", "actividadFinal"] },
  { id: "ingenieriaProdMar", nombre: "Ingeniería de procesos en productos del mar", prereqs: ["procConservBajasTemp", "procConservAltasTemp"], abre: ["practicaProfIA", "actividadFinal"] },
  { id: "ingenieriaFermentaciones", nombre: "Ingeniería de procesos en fermentaciones", prereqs: ["higieneSanidad", "microbiologia"], abre: ["gestionCalidad", "practicaProfIA"] },
  { id: "gestionCalidad", nombre: "Gestión de calidad", prereqs: ["evaluacionSensorial", "ingenieriaFermentaciones"], abre: ["practicaProfIA", "actividadFinal"] },

  // Sexto año - XI Semestre
  { id: "practicaProfIA", nombre: "Práctica profesional IA", prereqs: ["ingenieriaLacteos", "ingenieriaProdMar", "ingenieriaFermentaciones", "gestionCalidad"], abre: [] },
  { id: "actividadFinal", nombre: "Actividad final de titulación", prereqs: ["ingenieriaLacteos", "ingenieriaProdMar", "gestionCalidad"], abre: [] },
  { id: "practicaProf", nombre: "Práctica profesional", prereqs: ["legislacionAlimentaria"], abre: [] }
];

// Estado inicial: los cursos sin prereqs están desbloqueados; el resto bloqueados
let estadoCursos = {};

// Inicializar estado
cursos.forEach(c => {
  estadoCursos[c.id] = {
    aprobado: false,
    desbloqueado: c.prereqs.length === 0
  };
});

const container = document.getElementById("malla-container");

// Función para verificar si se pueden desbloquear nuevos cursos
function actualizarDesbloqueo() {
  let cambios = false;
  cursos.forEach(curso => {
    if (!estadoCursos[curso.id].desbloqueado) {
      // Verificar si todos los prereqs están aprobados
      const todosAprobados = curso.prereqs.every(prereqId => estadoCursos[prereqId]?.aprobado);
      if (todosAprobados) {
        estadoCursos[curso.id].desbloqueado = true;
        cambios = true;
      }
    }
  });
  return cambios;
}

// Función para renderizar la malla
function render() {
  container.innerHTML = "";
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.id = curso.id;
    div.textContent = curso.nombre;

    // Mostrar prerequisitos como tooltip si tiene
    if (curso.prereqs.length > 0) {
      const nombresPre = curso.prereqs
        .map(id => cursos.find(c => c.id === id)?.nombre || id)
        .join(", ");
      div.setAttribute("data-prereq", "Prerrequisitos: " + nombresPre);
    }

    if (estadoCursos[curso.id].aprobado) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado", "desbloqueado");
    } else if (estadoCursos[curso.id].desbloqueado) {
      div.classList.add("desbloqueado");
      div.classList.remove("bloqueado", "aprobado");
      div.style.pointerEvents = "auto";
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("desbloqueado", "aprobado");
      div.style.pointerEvents = "none";
    }

    // Click para aprobar o desaprobar si está desbloqueado
    div.onclick = () => {
      if (!estadoCursos[curso.id].desbloqueado) return; // no hace nada si está bloqueado

      // Alternar aprobado/desaprobado
      estadoCursos[curso.id].aprobado = !estadoCursos[curso.id].aprobado;

      // Actualizar desbloqueos
      while (actualizarDesbloqueo()) {}

      // Re-renderizar
      render();
    };

    container.appendChild(div);
  });
}

render();
