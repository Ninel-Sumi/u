// =========================
// CONTENEDOR DE FLORES
// =========================
const contenedor = document.getElementById("flores");

// =========================
// POSICIONES DE CADA FLOR
// =========================
const posiciones = [
  { left: 50, bottom: 460, rot: 0 },
  { left: 40, bottom: 420, rot: -25 },
  { left: 60, bottom: 420, rot: 25 },
  { left: 35, bottom: 380, rot: -35 },
  { left: 65, bottom: 380, rot: 35 },
  { left: 50, bottom: 350, rot: 10 }
];

// =========================
// CREAR FLORES
// =========================
posiciones.forEach((pos) => {

  // 🌸 FLOR PRINCIPAL
  const flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = pos.left + "%";
  flor.style.bottom = pos.bottom + "px";

  // 🌿 TALLO
  const tallo = document.createElement("div");
  tallo.className = "tallo";

  // 🌿 HOJAS
  const hojaIzq = document.createElement("div");
  hojaIzq.className = "hoja izq";
  hojaIzq.style.top = "240px";

  const hojaDer = document.createElement("div");
  hojaDer.className = "hoja der";
  hojaDer.style.top = "290px";

  tallo.appendChild(hojaIzq);
  tallo.appendChild(hojaDer);
  flor.appendChild(tallo);

  // 🌻 CABEZA DE LA FLOR
  const cabeza = document.createElement("div");
  cabeza.className = "cabeza";
  cabeza.style.setProperty('--rot', pos.rot + 'deg');

  // PÉTALOS
  for (let i = 0; i < 12; i++) {
    const petalo = document.createElement("div");
    petalo.className = "petalo";
    petalo.style.transform = `rotate(${i * 30}deg)`;
    cabeza.appendChild(petalo);
  }

  // CENTRO
  const centro = document.createElement("div");
  centro.className = "centro";
  cabeza.appendChild(centro);

  flor.appendChild(cabeza);

  // AGREGAR FLOR AL CONTENEDOR
  contenedor.appendChild(flor);
});

// =========================
// DESTELLOS
// =========================
setInterval(() => {
  const destello = document.createElement("div");
  destello.className = "destello";
  destello.style.left = Math.random() * window.innerWidth + "px";
  destello.style.top = window.innerHeight + "px";

  document.body.appendChild(destello);

  // REMOVER DESTELLO DESPUÉS DE 6s
  setTimeout(() => destello.remove(), 6000);
}, 120);

// =========================
// CORAZONES
// =========================
setInterval(() => {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.style.left = Math.random() * window.innerWidth + "px";
  corazon.style.top = window.innerHeight + "px";

  document.body.appendChild(corazon);

  // REMOVER CORAZÓN DESPUÉS DE 8s
  setTimeout(() => corazon.remove(), 8000);
}, 300);
