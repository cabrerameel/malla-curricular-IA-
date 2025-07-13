const courses = [
  { id: 'ingles1', name: 'Inglés 1', prereqs: [] },
  { id: 'introCalculo', name: 'Introducción al cálculo', prereqs: [] },
  { id: 'calcDifInt', name: 'Cálculo diferencial integral', prereqs: ['introCalculo'] },
  { id: 'quimGen1', name: 'Química general 1', prereqs: [] },
  { id: 'quimGen2', name: 'Química general 2', prereqs: ['quimGen1'] },
  { id: 'mecanica', name: 'Mecánica', prereqs: [] },
  { id: 'electromagnetismo', name: 'Electromagnetismo', prereqs: ['mecanica', 'introCalculo'] },
  { id: 'biologia', name: 'Biología general', prereqs: [] },
  { id: 'iai1', name: 'IAI 1', prereqs: [] },
  { id: 'iai2', name: 'IAI 2', prereqs: ['iai1'] },

  { id: 'ingles2', name: 'Inglés 2', prereqs: ['ingles1'] },
  { id: 'ingles3', name: 'Inglés 3', prereqs: ['ingles1', 'ingles2'] },
  { id: 'calcMult', name: 'Cálculo multivariado', prereqs: ['calcDifInt', 'introCalculo'] },
  { id: 'estadistica', name: 'Estadística y análisis de datos', prereqs: ['calcDifInt'] },
  { id: 'quimOrgan1', name: 'Química orgánica 1', prereqs: ['quimGen2'] },
  { id: 'quimAnal1', name: 'Química analítica 1', prereqs: ['quimGen2'] },
  { id: 'labOrganica', name: 'Laboratorio de orgánica', prereqs: ['quimGen2', 'quimOrgan1'] },
  { id: 'comOralEscrita', name: 'Comunicación oral y escrita', prereqs: ['iai1', 'iai2'] },
];

let state = {};

function initState() {
  courses.forEach(c => {
    state[c.id] = 'locked';
  });
  updateUnlocks();
}

function canUnlock(course) {
  return course.prereqs.every(pr => state[pr] === 'completed');
}

function updateUnlocks() {
  courses.forEach(c => {
    if (state[c.id] !== 'completed' && canUnlock(c)) {
      state[c.id] = 'unlocked';
    }
  });
  renderCourses();
}

function toggleComplete(id) {
  if (state[id] === 'unlocked') {
    state[id] = 'completed';
  } else if (state[id] === 'completed') {
    state[id] = 'unlocked';
  }
  updateUnlocks();
}

function renderCourses() {
  const container = document.getElementById('courses');
  container.innerHTML = '';
  courses.forEach(c => {
    const div = document.createElement('div');
    div.className = 'course ' + state[c.id];
    div.textContent = c.name;
    if (state[c.id] === 'unlocked' || state[c.id] === 'completed') {
      div.onclick = () => toggleComplete(c.id);
    }
    container.appendChild(div);
  });
}

initState();
