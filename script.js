const contenedor = document.getElementById("flores");

const numFlores = 6;
const factor = Math.max(window.innerWidth / 900, 0.9); // ESCALA MÁS GRANDE
const baseBottom = 120;
const baseSpacing = 80;

let posiciones = [];
for (let i = 0; i < numFlores; i++) {
  let left = 20 + i * 12 + Math.random() * 5;
  let bottom = baseBottom + i * baseSpacing * factor;
  let rot = (Math.random() - 0.5) * 70;
  posiciones.push({ left, bottom, rot });
}

posiciones.forEach(pos => {
  let flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = pos.left + "%";
  flor.style.bottom = pos.bottom + "px";

  let t = document.createElement("div");
  t.className = "tallo";
  t.style.height = 620 * factor + "px";
  t.style.width = 16 * factor + "px";
  t.style.top = 180 * factor + "px";
  t.style.left = "50%";

  let h1 = document.createElement("div");
  h1.className = "hoja izq";
  h1.style.width = 110 * factor + "px";
  h1.style.height = 55 * factor + "px";
  h1.style.top = 300 * factor + "px";
  h1.style.left = -95 * factor + "px";

  let h2 = document.createElement("div");
  h2.className = "hoja der";
  h2.style.width = 110 * factor + "px";
  h2.style.height = 55 * factor + "px";
  h2.style.top = 360 * factor + "px";
  h2.style.left = 55 * factor + "px";

  t.appendChild(h1);
  t.appendChild(h2);
  flor.appendChild(t);

  let cabeza = document.createElement("div");
  cabeza.className = "cabeza";
  cabeza.style.setProperty('--rot', pos.rot + 'deg');

  for (let i = 0; i < 12; i++) {
    let p = document.createElement("div");
    p.className = "petalo";
    p.style.width = 95 * factor + "px";
    p.style.height = 170 * factor + "px";
    p.style.transform = "rotate(" + (i * 30) + "deg)";
    cabeza.appendChild(p);
  }

  let c = document.createElement("div");
  c.className = "centro";
  c.style.width = 150 * factor + "px";
  c.style.height = 150 * factor + "px";
  c.style.top = 85 * factor + "px";
  c.style.left = -40 * factor + "px";
  cabeza.appendChild(c);

  flor.appendChild(cabeza);
  contenedor.appendChild(flor);
});

/* DESTELLOS */
setInterval(() => {
  let d = document.createElement("div");
  d.className = "destello";
  let size = 8 * factor;
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
  let size = 24 * factor;
  h.style.width = size + "px";
  h.style.height = size + "px";
  h.style.left = Math.random() * window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 300); 
