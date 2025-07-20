const ramos = [
  {
    id: "anatomia_aplicada_al_movimiento_humano",
    nombre: "Anatomía aplicada al movimiento humano",
    requisitos: []
  },
  {
    id: "anatomia_funcional_basica",
    nombre: "Anatomía funcional básica",
    requisitos: []
  },
  {
    id: "biologia_celular",
    nombre: "Biología celular",
    requisitos: []
  },
  {
    id: "biomecanica_clinica",
    nombre: "Biomecánica clínica",
    requisitos: []
  },
  {
    id: "bioquimica_general",
    nombre: "Bioquímica general",
    requisitos: ["biologia_celular", "quimica_general"]
  },
  {
    id: "bioetica_y_profesion",
    nombre: "Bioética y profesión",
    requisitos: []
  },
  {
    id: "comunicacion_en_lengua_inglesa_nivel_basico",
    nombre: "Comunicación en lengua inglesa nivel básico",
    requisitos: []
  },
  {
    id: "comunicacion_en_lengua_inglesa_nivel_intermedio",
    nombre: "Comunicación en lengua inglesa nivel intermedio",
    requisitos: ["comunicacion_en_lengua_inglesa_nivel_basico"]
  },
  {
    id: "educacion_fisica_y_salud",
    nombre: "Educación física y salud",
    requisitos: []
  },
  {
    id: "examen_kinesico",
    nombre: "Examen kinésico",
    requisitos: ["exploracion_kinesica"]
  },
  {
    id: "exploracion_kinesica",
    nombre: "Exploración kinésica",
    requisitos: ["anatomia_funcional_basica"]
  },
  {
    id: "fisica_aplicada_para_el_movimiento_humano",
    nombre: "Física aplicada para el movimiento humano",
    requisitos: []
  },
  {
    id: "introduccion_a_la_kinesiologia",
    nombre: "Introducción a la kinesiología",
    requisitos: []
  },
  {
    id: "matematica_basica",
    nombre: "Matemática básica",
    requisitos: []
  },
  {
    id: "neuroanatomia_funcional",
    nombre: "Neuroanatomía funcional",
    requisitos: ["anatomia_aplicada_al_movimiento_humano"]
  },
  {
    id: "quimica_general",
    nombre: "Química general",
    requisitos: []
  },
  {
    id: "salud_publica",
    nombre: "Salud pública",
    requisitos: ["socioantropologia_de_la_salud"]
  },
  {
    id: "socioantropologia_de_la_salud",
    nombre: "Socioantropología de la salud",
    requisitos: []
  }
];


