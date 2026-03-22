const contenedor = document.getElementById("flores");
const mono = document.getElementById("mono");

const posiciones = [
  { left: 50, bottom: 460, rot: 0 },
  { left: 40, bottom: 420, rot: -25 },
  { left: 60, bottom: 420, rot: 25 },
  { left: 35, bottom: 380, rot: -35 },
  { left: 65, bottom: 380, rot: 35 },
  { left: 50, bottom: 350, rot: 10 }
];

// Factor de escala basado en ancho de pantalla
const factor = window.innerWidth / 1920;

posiciones.forEach(pos => {
  let flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = pos.left + "%";
  flor.style.bottom = pos.bottom * factor + "px";

  /* TALLO */
  let t = document.createElement("div");
  t.className = "tallo";
  t.style.height = 420 * factor + "px";
  t.style.width = 6 * factor + "px";

  /* HOJAS */
  let h1 = document.createElement("div");
  h1.className = "hoja izq";
  h1.style.width = 50 * factor + "px";
  h1.style.height = 25 * factor + "px";
  h1.style.top = 240 * factor + "px";
  h1.style.left = -45 * factor + "px";

  let h2 = document.createElement("div");
  h2.className = "hoja der";
  h2.style.width = 50 * factor + "px";
  h2.style.height = 25 * factor + "px";
  h2.style.top = 290 * factor + "px";
  h2.style.left = 25 * factor + "px";

  t.appendChild(h1);
  t.appendChild(h2);
  flor.appendChild(t);

  /* CABEZA */
  let cabeza = document.createElement("div");
  cabeza.className = "cabeza";
  cabeza.style.setProperty('--rot', pos.rot + 'deg');

  for (let i = 0; i < 12; i++) {
    let p = document.createElement("div");
    p.className = "petalo";
    p.style.width = 45 * factor + "px";
    p.style.height = 90 * factor + "px";
    p.style.transform = "rotate(" + (i * 30) + "deg)";
    cabeza.appendChild(p);
  }

  let c = document.createElement("div");
  c.className = "centro";
  c.style.width = 70 * factor + "px";
  c.style.height = 70 * factor + "px";
  c.style.top = 25 * factor + "px";
  c.style.left = -12 * factor + "px";
  cabeza.appendChild(c);

  flor.appendChild(cabeza);
  contenedor.appendChild(flor);
});

/* MOÑO */
mono.style.width = 60 * factor + "px";
mono.style.height = 40 * factor + "px";
mono.style.left = "50%";
mono.style.bottom = 120 * factor + "px";
mono.style.borderRadius = 20 * factor + "px";

/* DESTELLOS */
setInterval(() => {
  let d = document.createElement("div");
  d.className = "destello";
  let size = 6 * factor;
  d.style.width = size + "px";
  d.style.height = size + "px";
  d.style.left = Math.random() * window.innerWidth + "px";
  d.style.top = window.innerHeight + "px";
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 6000);
}, 120);

/* CORAZONES */
setInterval(() => {
  let h = document.createElement("div");
  h.className = "corazon";
  let size = 20 * factor;
  h.style.width = size + "px";
  h.style.height = size + "px";
  h.style.left = Math.random() * window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 300);
