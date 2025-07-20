const ramos = [
  { id: "anatomia_funcional_basica", nombre: "Anatomía funcional básica", requisitos: [] },
  { id: "introduccion_kine", nombre: "Introducción a la kinesiología", requisitos: [] },
  { id: "fisica_movimiento", nombre: "Física aplicada para el movimiento humano", requisitos: [] },
  { id: "biologia_celular", nombre: "Biología celular", requisitos: [] },
  { id: "matematica_basica", nombre: "Matemática básica", requisitos: [] },
  { id: "quimica_general", nombre: "Química general", requisitos: [] },
  { id: "anatomia_aplicada", nombre: "Anatomía aplicada al movimiento humano", requisitos: ["anatomia_funcional_basica"] },
  { id: "bioquimica_general", nombre: "Bioquímica general", requisitos: ["quimica_general", "biologia_celular"] },
  { id: "ingles_basico", nombre: "Inglés básico", requisitos: [] },
  { id: "socioantropologia", nombre: "Socioantropología de la salud", requisitos: [] },
  { id: "biomecanica_clinica", nombre: "Biomecánica clínica", requisitos: ["matematica_basica", "fisica_movimiento"] },
  { id: "bioetica", nombre: "Bioética y profesión", requisitos: [] },
  { id: "exploracion_kinesica", nombre: "Exploración kinésica", requisitos: ["anatomia_funcional_basica"] },
  { id: "educacion_fisica", nombre: "Educación física y salud", requisitos: [] },
  { id: "neuroanatomia", nombre: "Neuroanatomía funcional", requisitos: ["anatomia_aplicada"] },
  { id: "ingles_intermedio", nombre: "Inglés intermedio", requisitos: ["ingles_basico"] },
  { id: "analisis_movimiento", nombre: "Análisis del movimiento humano", requisitos: ["biomecanica_clinica"] },
  { id: "examen_kinesico", nombre: "Examen kinésico", requisitos: ["exploracion_kinesica"] },
  { id: "ofg1", nombre: "OFG 1", requisitos: [] },
  { id: "fisiologia_humana", nombre: "Fisiología humana", requisitos: ["anatomia_aplicada", "bioquimica_general"] },
  { id: "psicologia", nombre: "Psicología del desarrollo", requisitos: [] },
  { id: "salud_publica", nombre: "Salud pública", requisitos: ["socioantropologia"] },
  // Puedes seguir agregando todos los ramos de esta forma...
];

const estado = {};

function crearMalla() {
  const contenedor = document.getElementById("grid");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.innerText = ramo.nombre;
    contenedor.appendChild(div);

    estado[ramo.id] = {
      aprobado: false,
      requisitos: ramo.requisitos,
      elemento: div
    };
  });
  actualizarMalla();
}

function actualizarMalla() {
  Object.keys(estado).forEach(id => {
    const ramo = estado[id];
    const requisitosCumplidos = ramo.requisitos.every(req => estado[req]?.aprobado);
    if (!ramo.aprobado && requisitosCumplidos) {
      ramo.elemento.classList.add("desbloqueado");
      ramo.elemento.classList.remove("aprobado");
      ramo.elemento.style.pointerEvents = "auto";
    } else if (!ramo.aprobado) {
      ramo.elemento.classList.remove("desbloqueado");
      ramo.elemento.style.pointerEvents = "none";
    }
  });
}

function manejarClick(id) {
  const ramo = estado[id];
  if (!ramo.aprobado) {
    ramo.aprobado = true;
    ramo.elemento.classList.remove("desbloqueado");
    ramo.elemento.classList.add("aprobado");
    actualizarMalla();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crearMalla();
  Object.keys(estado).forEach(id => {
    estado[id].elemento.addEventListener("click", () => manejarClick(id));
  });
});

