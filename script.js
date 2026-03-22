const contenedor = document.getElementById("flores");

const posiciones = [
  { left: 50, bottom: 460, rot: 0 },
  { left: 40, bottom: 420, rot: -25 },
  { left: 60, bottom: 420, rot: 25 },
  { left: 35, bottom: 380, rot: -35 },
  { left: 65, bottom: 380, rot: 35 },
  { left: 50, bottom: 350, rot: 10 }
];

posiciones.forEach((pos) => {

  let flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = pos.left + "%";
  flor.style.bottom = pos.bottom + "px";

  /* 🌿 TALLO (primero = detrás) */
  let t = document.createElement("div");
  t.className = "tallo";

  let h1 = document.createElement("div");
  h1.className = "hoja izq";
  h1.style.top = "240px";

  let h2 = document.createElement("div");
  h2.className = "hoja der";
  h2.style.top = "290px";

  t.appendChild(h1);
  t.appendChild(h2);
  flor.appendChild(t);

  /* 🌻 CABEZA */
  let cabeza = document.createElement("div");
  cabeza.className = "cabeza";
  cabeza.style.setProperty('--rot', pos.rot + 'deg');

  for (let i = 0; i < 12; i++) {
    let p = document.createElement("div");
    p.className = "petalo";
    p.style.transform = "rotate(" + (i * 30) + "deg)";
    cabeza.appendChild(p);
  }

  let c = document.createElement("div");
  c.className = "centro";
  cabeza.appendChild(c);

  flor.appendChild(cabeza);

  contenedor.appendChild(flor);
});

/* DESTELLOS */
setInterval(() => {
  let d = document.createElement("div");
  d.className = "destello";
  d.style.left = Math.random() * window.innerWidth + "px";
  d.style.top = window.innerHeight + "px";
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 6000);
}, 120);

/* CORAZONES */
setInterval(() => {
  let h = document.createElement("div");
  h.className = "corazon";
  h.style.left = Math.random() * window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 300);