// data/skills.js
export const initialNodes = [
  { id: 'root', data: { label: 'Ingénieur Systèmes' }, position: { x: 250, y: 0 }, type: 'input' },
  // Branche Embarqué
  { id: 'embedded', data: { label: 'Systèmes Embarqués' }, position: { x: 100, y: 100 } },
  { id: 'c-cpp', data: { label: 'C / C++ / Rust' }, position: { x: 0, y: 200 } },
  { id: 'arduino', data: { label: 'Arduino & ESP32' }, position: { x: 150, y: 200 } },
  // Branche Web/Software
  { id: 'software', data: { label: 'Génie Logiciel' }, position: { x: 400, y: 100 } },
  { id: 'backend', data: { label: 'Backend (Go/Java/Python)' }, position: { x: 350, y: 200 } },
  { id: 'frontend', data: { label: 'Frontend (React/JS)' }, position: { x: 500, y: 200 } },
];

export const initialEdges = [
  { id: 'e1-2', source: 'root', target: 'embedded', animated: true },
  { id: 'e1-3', source: 'root', target: 'software', animated: true },
  { id: 'e2-4', source: 'embedded', target: 'c-cpp' },
  { id: 'e2-5', source: 'embedded', target: 'arduino' },
  { id: 'e3-6', source: 'software', target: 'backend' },
  { id: 'e3-7', source: 'software', target: 'frontend' },
];