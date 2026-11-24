/* =========================================================
   Pasapalabra de la clase · 2º de Primaria
   ---------------------------------------------------------
   Para añadir o cambiar preguntas, edita la lista PREGUNTAS.
   Cada pregunta tiene:
     letra    → letra del rosco
     tipo     → "empieza" o "contiene"
     palabra  → la respuesta (como se escribe bien)
     otras    → (opcional) otras respuestas que también valen
     icono    → un emoji que ayuda a entender la palabra
     def      → definición sencilla
     info     → explicación corta que sale después de responder
   ========================================================= */

const ABECEDARIO = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const PREGUNTAS = [
  // A
  { letra: "A", tipo: "empieza", palabra: "abuela", otras: ["abuelo"], icono: "👵", def: "Es la mamá de tu papá o de tu mamá. Te cuida y te da muchos abrazos.", info: "Las abuelas y los abuelos saben muchas historias. ¡Pregúntales por las suyas!" },
  { letra: "A", tipo: "empieza", palabra: "aceituna", otras: ["aceitunas", "oliva"], icono: "🫒", def: "Fruto pequeño, verde o negro, que crece en el olivo. Con él se hace el aceite.", info: "«Aceituna» es una palabra que llegó al español desde el árabe." },
  { letra: "A", tipo: "empieza", palabra: "alegría", icono: "😄", def: "Emoción que sentimos cuando estamos contentos y nos dan ganas de sonreír.", info: "La alegría se contagia: ¡cuando sonríes, los demás también sonríen!" },
  { letra: "A", tipo: "empieza", palabra: "almohada", icono: "🛏️", def: "Cojín blandito donde apoyas la cabeza para dormir.", info: "«Almohada» viene del árabe, igual que muchas palabras que empiezan por «al»." },
  // B
  { letra: "B", tipo: "empieza", palabra: "bocadillo", otras: ["bocata"], icono: "🥪", def: "Pan partido por la mitad con algo rico dentro. Muchos lo comemos en el recreo.", info: "Un bocadillo puede ser de tortilla, de queso, de atún… ¿Cuál te gusta más?" },
  { letra: "B", tipo: "empieza", palabra: "bandera", icono: "🚩", def: "Tela de colores que representa a un país o a un pueblo.", info: "La bandera del pueblo gitano es azul como el cielo y verde como el campo, con una rueda roja en el centro." },
  { letra: "B", tipo: "empieza", palabra: "baile", otras: ["bailar"], icono: "💃", def: "Lo que hacemos cuando movemos el cuerpo al ritmo de la música.", info: "En todo el mundo se baila: flamenco, sevillanas, dabke, jota… ¡Bailar nos une!" },
  // C
  { letra: "C", tipo: "empieza", palabra: "cajón", icono: "📦", def: "Instrumento de madera con forma de caja. Te sientas encima y lo tocas con las manos.", info: "El cajón flamenco suena como un tambor. ¡Es muy importante en el flamenco y en la rumba!" },
  { letra: "C", tipo: "empieza", palabra: "cuscús", otras: ["alcuzcuz"], icono: "🍲", def: "Comida de granitos pequeños de sémola que se sirve con verduras y se comparte en familia.", info: "El cuscús es un plato muy típico de Marruecos y de otros países del norte de África." },
  { letra: "C", tipo: "empieza", palabra: "chaval", otras: ["chavala", "chavales"], icono: "🧒", def: "Palabra que usamos para decir chico o chica joven.", info: "«Chaval» viene del caló, la lengua del pueblo gitano. ¡La usamos todos!" },
  // D
  { letra: "D", tipo: "empieza", palabra: "dátil", otras: ["datiles"], icono: "🌴", def: "Fruto marrón y muy dulce que crece en las palmeras.", info: "En Ramadán, muchas familias comen un dátil para empezar la cena al ponerse el sol." },
  { letra: "D", tipo: "empieza", palabra: "dientes", otras: ["diente"], icono: "🦷", def: "Los tenemos dentro de la boca y nos sirven para masticar.", info: "Hay que cepillarlos después de comer. ¡Y a tu edad se caen los de leche!" },
  { letra: "D", tipo: "empieza", palabra: "darbuka", otras: ["derbake", "darbuca"], icono: "🥁", def: "Tambor con forma de copa que se toca con las manos en la música árabe.", info: "La darbuka marca el ritmo en las fiestas y en las bodas. ¡Suena «dum» y «tak»!" },
  // E
  { letra: "E", tipo: "empieza", palabra: "estuche", icono: "✏️", def: "Bolsa o caja donde guardas los lápices, la goma y el sacapuntas.", info: "Un estuche ordenado te ayuda a encontrar todo rápido en clase." },
  { letra: "E", tipo: "empieza", palabra: "estrella", otras: ["estrellas"], icono: "⭐", def: "Punto de luz que brilla en el cielo por la noche.", info: "¡El Sol también es una estrella! Es la que está más cerca de nosotros." },
  { letra: "E", tipo: "empieza", palabra: "enfado", otras: ["enfadado", "enfadada"], icono: "😠", def: "Emoción que sentimos cuando algo nos parece injusto o no sale como queremos.", info: "Cuando sientes enfado, respirar despacio y contarlo con palabras te ayuda a calmarte." },
  // F
  { letra: "F", tipo: "empieza", palabra: "flamenco", icono: "🎸", def: "Música y baile con guitarra, palmas y cante, muy famoso en Andalucía.", info: "El pueblo gitano ha cuidado y hecho grande el flamenco. ¡Es patrimonio de toda la humanidad!" },
  { letra: "F", tipo: "empieza", palabra: "familia", icono: "👨‍👩‍👧‍👦", def: "Las personas que te quieren y te cuidan: madres, padres, hermanos, abuelos, tíos…", info: "Hay muchas formas de familia, y todas son especiales." },
  { letra: "F", tipo: "empieza", palabra: "fiesta", icono: "🎉", def: "Día especial para celebrar con música, comida rica y gente querida.", info: "Navidad, el Eid, una boda o un cumpleaños… ¡Cada familia tiene sus fiestas favoritas!" },
  // G
  { letra: "G", tipo: "empieza", palabra: "guitarra", icono: "🎸", def: "Instrumento de madera con seis cuerdas que se toca con los dedos.", info: "La guitarra española es famosa en todo el mundo. ¡En el flamenco es la reina!" },
  { letra: "G", tipo: "empieza", palabra: "gato", otras: ["gata"], icono: "🐱", def: "Animal de compañía con bigotes que dice «miau».", info: "Los gatos duermen muchas horas al día y les encanta que les acaricien." },
  // H
  { letra: "H", tipo: "empieza", palabra: "hermano", otras: ["hermana", "hermanos", "hermanas"], icono: "👧", def: "Hijo o hija de tus mismos padres. ¡Muchas veces juegas con él o con ella!", info: "Los hermanos y las hermanas se ayudan y se cuidan." },
  { letra: "H", tipo: "empieza", palabra: "hierbabuena", otras: ["yerbabuena"], icono: "🌿", def: "Planta verde que huele muy fresco. Se usa para hacer un té muy rico.", info: "El té con hierbabuena es la bebida de la amistad en Marruecos: se ofrece a las visitas." },
  { letra: "H", tipo: "empieza", palabra: "hola", icono: "👋", def: "Palabra que decimos para saludar cuando llegamos o vemos a alguien.", info: "En árabe se saluda con «salam», que significa «paz». ¡Saludar nos hace sentir bienvenidos!" },
  // I
  { letra: "I", tipo: "empieza", palabra: "isla", icono: "🏝️", def: "Trozo de tierra rodeado de agua por todas partes.", info: "Mallorca, Tenerife o Lanzarote son islas de España." },
  { letra: "I", tipo: "empieza", palabra: "iglú", icono: "❄️", def: "Casa redonda hecha con bloques de nieve y hielo.", info: "Los iglús protegen del frío. ¡Dentro se está más calentito que fuera!" },
  // J
  { letra: "J", tipo: "empieza", palabra: "jirafa", icono: "🦒", def: "Animal de África con manchas y el cuello muy, muy largo.", info: "La jirafa es el animal más alto del mundo. Come hojas de los árboles." },
  { letra: "J", tipo: "empieza", palabra: "jabón", icono: "🧼", def: "Lo usamos con agua para lavarnos las manos. ¡Hace espuma!", info: "Lavarse las manos con jabón antes de comer nos ayuda a no ponernos malos." },
  // K
  { letra: "K", tipo: "empieza", palabra: "koala", icono: "🐨", def: "Animal gris y peludo de Australia que vive en los árboles y come hojas.", info: "Los koalas duermen casi todo el día abrazados a los árboles." },
  { letra: "K", tipo: "empieza", palabra: "kiwi", icono: "🥝", def: "Fruta marrón y peluda por fuera, y verde con puntitos negros por dentro.", info: "El kiwi tiene muchas vitaminas. ¡También hay un pájaro que se llama así!" },
  // L
  { letra: "L", tipo: "empieza", palabra: "luna", icono: "🌙", def: "Brilla en el cielo por la noche y parece que cambia de forma.", info: "La luna nueva marca el comienzo de Ramadán y de otras fiestas importantes." },
  { letra: "L", tipo: "empieza", palabra: "laúd", icono: "🪕", def: "Instrumento de cuerda con forma de media pera que se toca con los dedos.", info: "El laúd se toca en la música árabe y también en la música tradicional de España." },
  { letra: "L", tipo: "empieza", palabra: "libro", otras: ["libros"], icono: "📚", def: "Tiene muchas páginas con letras y dibujos para leer y aprender.", info: "Cada libro es un viaje. ¡En la biblioteca hay muchísimos!" },
  // M
  { letra: "M", tipo: "empieza", palabra: "mochila", icono: "🎒", def: "Bolsa que llevas a la espalda para ir al cole con tus cosas.", info: "Una mochila bien colocada, con las dos asas, cuida tu espalda." },
  { letra: "M", tipo: "empieza", palabra: "miedo", icono: "😨", def: "Emoción que sentimos cuando algo nos asusta.", info: "Todos sentimos miedo a veces. Si lo cuentas a alguien, se hace más pequeño." },
  { letra: "M", tipo: "empieza", palabra: "molar", otras: ["mola", "molan"], icono: "😎", def: "Cuando algo te gusta muchísimo, dices que te…", info: "«Molar» viene del caló, la lengua del pueblo gitano. ¡Hay muchas palabras del caló en el español!" },
  // N
  { letra: "N", tipo: "empieza", palabra: "Navidad", icono: "🎄", def: "Fiesta de diciembre con luces, villancicos y comidas en familia.", info: "En Navidad muchas familias decoran la casa y se reúnen para celebrar." },
  { letra: "N", tipo: "empieza", palabra: "nube", otras: ["nubes"], icono: "☁️", def: "Está en el cielo, es blanca o gris, y de ella cae la lluvia.", info: "Las nubes están hechas de gotitas de agua muy pequeñas." },
  // Ñ
  { letra: "Ñ", tipo: "contiene", palabra: "araña", icono: "🕷️", def: "Animal pequeño con ocho patas que teje telas para atrapar insectos.", info: "La araña no es un insecto: ¡los insectos tienen seis patas y ella tiene ocho!" },
  { letra: "Ñ", tipo: "contiene", palabra: "piñata", icono: "🪅", def: "Figura llena de caramelos que se rompe con un palo en los cumpleaños.", info: "La piñata es muy típica de las fiestas de cumpleaños en México y en España." },
  { letra: "Ñ", tipo: "contiene", palabra: "sueño", icono: "😴", def: "Lo que tienes por la noche cuando se te cierran los ojos y quieres dormir.", info: "Dormir bien nos da energía para jugar y aprender." },
  // O
  { letra: "O", tipo: "empieza", palabra: "oso", otras: ["osa"], icono: "🐻", def: "Animal grande y peludo al que le encanta la miel.", info: "Algunos osos duermen todo el invierno en su cueva. ¡Eso se llama hibernar!" },
  { letra: "O", tipo: "empieza", palabra: "ojalá", icono: "🤞", def: "Palabra que decimos cuando deseamos que pase algo bueno: «¡… mañana haga sol!».", info: "«Ojalá» viene del árabe. ¡Hace muchísimos años que la usamos en español!" },
  { letra: "O", tipo: "empieza", palabra: "ojo", otras: ["ojos"], icono: "👁️", def: "Parte de la cara con la que vemos.", info: "Tenemos dos ojos, y cada persona tiene un color de ojos precioso." },
  // P
  { letra: "P", tipo: "empieza", palabra: "palmas", otras: ["palma"], icono: "👏", def: "Golpes que damos con las manos para seguir el ritmo de la música.", info: "En el flamenco y en la rumba, las palmas son tan importantes como un instrumento." },
  { letra: "P", tipo: "empieza", palabra: "pizarra", icono: "🧑‍🏫", def: "Superficie grande de la clase donde se escribe para que todos lo vean.", info: "Algunas pizarras son de tiza y otras son digitales." },
  // Q
  { letra: "Q", tipo: "empieza", palabra: "queso", icono: "🧀", def: "Alimento hecho con leche. ¡Al ratón le encanta!", info: "Hay quesos de vaca, de oveja y de cabra." },
  { letra: "Q", tipo: "empieza", palabra: "quince", icono: "🔢", def: "Número que va después del catorce.", info: "Diez más cinco son quince." },
  // R
  { letra: "R", tipo: "empieza", palabra: "Ramadán", icono: "🌙", def: "Mes especial para las familias musulmanas. Al ponerse el sol, cenan todos juntos.", info: "Al terminar Ramadán se celebra una gran fiesta llamada Eid, con dulces y ropa nueva." },
  { letra: "R", tipo: "empieza", palabra: "rumba", icono: "🎶", def: "Música muy alegre con guitarra y palmas que dan ganas de bailar.", info: "La rumba catalana la crearon familias gitanas de Barcelona." },
  { letra: "R", tipo: "empieza", palabra: "regla", icono: "📏", def: "Sirve para medir y para trazar líneas rectas.", info: "La regla tiene números que marcan los centímetros." },
  // S
  { letra: "S", tipo: "empieza", palabra: "sol", icono: "☀️", def: "Estrella que nos da luz y calor durante el día.", info: "Sin el sol, las plantas no podrían crecer." },
  { letra: "S", tipo: "empieza", palabra: "sorpresa", icono: "🎁", def: "Lo que sientes cuando pasa algo que no esperabas.", info: "Las sorpresas bonitas nos hacen abrir mucho los ojos y sonreír." },
  // T
  { letra: "T", tipo: "empieza", palabra: "tristeza", icono: "😢", def: "Emoción que sentimos cuando echamos de menos a alguien o algo no sale bien.", info: "Estar triste es normal. Un abrazo o hablar con alguien ayuda mucho." },
  { letra: "T", tipo: "empieza", palabra: "tortilla", icono: "🍳", def: "Comida hecha con huevo batido y, muchas veces, con patata.", info: "La tortilla de patatas es uno de los platos más famosos de España." },
  // U
  { letra: "U", tipo: "empieza", palabra: "uva", otras: ["uvas"], icono: "🍇", def: "Fruta pequeña y redonda que crece en racimos.", info: "En Nochevieja, mucha gente come doce uvas con las campanadas." },
  { letra: "U", tipo: "empieza", palabra: "uña", otras: ["uñas"], icono: "💅", def: "Parte dura que tenemos en la punta de los dedos.", info: "Las uñas crecen siempre, por eso hay que cortarlas de vez en cuando." },
  // V
  { letra: "V", tipo: "empieza", palabra: "verano", icono: "🏖️", def: "Estación del año en la que hace mucho calor y hay vacaciones.", info: "Después de la primavera llega el verano, y después, el otoño." },
  { letra: "V", tipo: "empieza", palabra: "vaca", icono: "🐄", def: "Animal grande de la granja que nos da leche.", info: "Con la leche de vaca se hacen el queso y el yogur." },
  // W
  { letra: "W", tipo: "empieza", palabra: "wifi", otras: ["wi-fi"], icono: "📶", def: "Sirve para conectar la tableta o el ordenador a internet sin cables.", info: "«Wifi» es una palabra que viene del inglés." },
  { letra: "W", tipo: "contiene", palabra: "sándwich", otras: ["sandwiches"], icono: "🥪", def: "Dos rebanadas de pan de molde con algo rico en medio.", info: "«Sándwich» viene del inglés. ¡Se parece mucho a un bocadillo!" },
  // X
  { letra: "X", tipo: "contiene", palabra: "taxi", icono: "🚕", def: "Coche que te lleva adonde quieras ir y al que se le paga el viaje.", info: "En muchas ciudades de España los taxis son blancos." },
  { letra: "X", tipo: "empieza", palabra: "xilófono", icono: "🎼", def: "Instrumento con barritas de colores que suenan al golpearlas con palitos.", info: "Cada barrita del xilófono hace una nota diferente." },
  // Y
  { letra: "Y", tipo: "empieza", palabra: "yogur", otras: ["yogurt", "yogures"], icono: "🥛", def: "Alimento cremoso hecho con leche que se come con cuchara.", info: "El yogur es un postre muy sano." },
  { letra: "Y", tipo: "empieza", palabra: "yema", icono: "🥚", def: "Parte amarilla que hay dentro del huevo.", info: "La parte blanca del huevo se llama clara." },
  // Z
  { letra: "Z", tipo: "empieza", palabra: "zanahoria", icono: "🥕", def: "Verdura naranja y alargada. ¡A los conejos les encanta!", info: "«Zanahoria» es otra palabra que viene del árabe." },
  { letra: "Z", tipo: "empieza", palabra: "zapato", otras: ["zapatos", "zapatilla", "zapatillas"], icono: "👟", def: "Lo llevamos en los pies para caminar.", info: "Los zapatos se atan con cordones o con velcro." }
];

/* ---------- Mensajes amables ---------- */
const MSG_OK = ["¡Muy bien! 🎉", "¡Genial! 🌟", "¡Lo has conseguido! 💪", "¡Fenomenal! 🥳", "¡Estupendo! ✨"];
const MSG_KO = ["¡Buen intento! 💛", "¡Casi casi! 🌱", "¡Seguimos aprendiendo! 📚", "¡Ánimo, la próxima te sale! 🙌"];
const NOMBRE_LETRA = { A:"a", B:"be", C:"ce", D:"de", E:"e", F:"efe", G:"ge", H:"hache", I:"i", J:"jota", K:"ka", L:"ele", M:"eme", N:"ene", Ñ:"eñe", O:"o", P:"pe", Q:"cu", R:"erre", S:"ese", T:"te", U:"u", V:"uve", W:"uve doble", X:"equis", Y:"ye", Z:"zeta" };
const LETRAS_RAPIDA = 12;

/* ---------- Utilidades ---------- */
const $ = (id) => document.getElementById(id);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/* Quita tildes, mayúsculas, espacios y signos. Es amable: «arana» vale como «araña». */
function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");
}
function esCorrecta(respuesta, pregunta) {
  const r = normalizar(respuesta);
  if (!r) return false;
  return [pregunta.palabra, ...(pregunta.otras || [])].some((p) => normalizar(p) === r);
}
function textoPista(q) {
  return (q.tipo === "contiene" ? "Contiene la " : "Empieza por ") + q.letra;
}

/* ---------- Voz (Web Speech API) ---------- */
const voz = {
  disponible: "speechSynthesis" in window,
  elegida: null,
  cargar() {
    if (!this.disponible) return;
    const voces = window.speechSynthesis.getVoices();
    this.elegida = voces.find((v) => v.lang === "es-ES") || voces.find((v) => v.lang && v.lang.startsWith("es")) || null;
  },
  hablar(texto) {
    if (!this.disponible) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "es-ES";
    if (this.elegida) u.voice = this.elegida;
    u.rate = 0.85;
    u.pitch = 1.05;
    window.speechSynthesis.speak(u);
  },
  parar() { if (this.disponible) window.speechSynthesis.cancel(); }
};
if (voz.disponible) {
  voz.cargar();
  window.speechSynthesis.onvoiceschanged = () => voz.cargar();
}

/* ---------- Estado del juego ---------- */
const estado = {
  modo: "quick",
  autoLeer: false,
  items: [],   // { letra, q, status: "pending" | "ok" | "ko" | "pass" }
  actual: 0,
  pistaUsada: false,
};

function crearPartida() {
  let letras = ABECEDARIO.slice();
  if (estado.modo === "quick") {
    const elegidas = new Set(shuffle(letras).slice(0, LETRAS_RAPIDA));
    letras = ABECEDARIO.filter((l) => elegidas.has(l));
  }
  estado.items = letras.map((letra) => ({
    letra,
    q: pick(PREGUNTAS.filter((p) => p.letra === letra)),
    status: "pending",
  }));
  estado.actual = 0;
}

/* ---------- Pantallas ---------- */
function mostrar(pantalla) {
  ["screen-start", "screen-game", "screen-end"].forEach((id) => { $(id).hidden = id !== pantalla; });
  window.scrollTo(0, 0);
}

/* ---------- Rosco ---------- */
function dibujarRosco() {
  const rosco = $("rosco");
  rosco.querySelectorAll(".letter").forEach((n) => n.remove());
  const total = estado.items.length;
  const dot = total > 16 ? 10.5 : 14; // tamaño en % del rosco
  rosco.style.setProperty("--dot", "0px");
  const radio = 50 - dot / 2 - 1.5;
  estado.items.forEach((item, i) => {
    const ang = (i / total) * Math.PI * 2;
    const el = document.createElement("span");
    el.className = "letter";
    el.textContent = item.letra;
    el.style.left = 50 + radio * Math.sin(ang) + "%";
    el.style.top = 50 - radio * Math.cos(ang) + "%";
    el.dataset.index = i;
    rosco.appendChild(el);
  });
  ajustarTamanoLetras(dot);
}
function ajustarTamanoLetras(dotPct) {
  const rosco = $("rosco");
  const pct = dotPct ?? (estado.items.length > 16 ? 10.5 : 14);
  rosco.style.setProperty("--dot", (rosco.clientWidth * pct) / 100 + "px");
}
window.addEventListener("resize", () => { if (!$("screen-game").hidden) ajustarTamanoLetras(); });

function pintarRosco() {
  document.querySelectorAll("#rosco .letter").forEach((el) => {
    const i = Number(el.dataset.index);
    const item = estado.items[i];
    el.className = "letter";
    if (item.status === "ok") el.classList.add("is-ok");
    if (item.status === "ko") el.classList.add("is-ko");
    if (item.status === "pass") el.classList.add("is-pass");
    if (i === estado.actual && (item.status === "pending" || item.status === "pass")) el.classList.add("is-active");
    const estadoTexto = { pending: "por jugar", ok: "acertada", ko: "para repasar", pass: "pasapalabra" }[item.status];
    el.setAttribute("aria-label", `Letra ${item.letra}: ${estadoTexto}`);
  });
  const c = (s) => estado.items.filter((it) => it.status === s).length;
  $("count-ok").textContent = c("ok");
  $("count-ko").textContent = c("ko");
  $("count-pass").textContent = c("pass");
  $("count-left").textContent = c("pending") + c("pass");
}

/* ---------- Pregunta ---------- */
function mostrarPregunta() {
  const item = estado.items[estado.actual];
  const q = item.q;
  estado.pistaUsada = false;

  $("center-letter").textContent = q.letra;
  $("center-label").textContent = q.tipo === "contiene" ? "Contiene la" : "Empieza por";
  $("q-pill").textContent = textoPista(q);
  $("q-icon").textContent = q.icono;
  $("q-icon").style.animation = "none"; void $("q-icon").offsetWidth; $("q-icon").style.animation = "";
  $("q-def").textContent = q.def;

  $("hint").hidden = true;
  $("hint").innerHTML = "";
  $("btn-hint").disabled = false;
  $("answer").value = "";
  $("answer-zone").hidden = false;
  $("feedback").hidden = true;

  pintarRosco();
  $("answer").focus({ preventScroll: true });
  if (estado.autoLeer) leerPregunta();
}

function leerPregunta() {
  const q = estado.items[estado.actual].q;
  const tipo = q.tipo === "contiene" ? "Contiene la" : "Empieza por";
  voz.hablar(`${tipo} ${NOMBRE_LETRA[q.letra]}. ${q.def}`);
}

function darPista() {
  const q = estado.items[estado.actual].q;
  const letras = Array.from(q.palabra.toLowerCase());
  const objetivo = normalizar(q.letra) || q.letra.toLowerCase();
  const cajas = letras.map((ch, i) => {
    const mostrarla = i === 0 || (q.tipo === "contiene" && (ch === q.letra.toLowerCase() || normalizar(ch) === objetivo));
    return `<span class="hint-box">${mostrarla ? ch : ""}</span>`;
  }).join("");
  $("hint").innerHTML = `💡 Tiene <b>${letras.length} letras</b><div class="hint-boxes text-adapt">${cajas}</div>`;
  $("hint").hidden = false;
  $("btn-hint").disabled = true;
  estado.pistaUsada = true;
  voz.hablar(`Pista: tiene ${letras.length} letras y empieza por ${NOMBRE_LETRA[letras[0].toUpperCase()] || letras[0]}.`);
  $("answer").focus({ preventScroll: true });
}

function comprobar() {
  const input = $("answer");
  if (!normalizar(input.value)) {
    input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
    voz.hablar("Escribe una palabra o pulsa Pasapalabra.");
    input.focus();
    return;
  }
  const item = estado.items[estado.actual];
  const ok = esCorrecta(input.value, item.q);
  item.status = ok ? "ok" : "ko";
  mostrarFeedback(ok);
}

function mostrarFeedback(ok) {
  const q = estado.items[estado.actual].q;
  const fb = $("feedback");
  fb.className = "feedback " + (ok ? "ok" : "ko");
  const titulo = ok ? pick(MSG_OK) : pick(MSG_KO);
  $("fb-title").textContent = titulo;
  $("fb-word").textContent = (ok ? "" : "La palabra es: ") + q.palabra;
  $("fb-info").textContent = q.info;
  $("answer-zone").hidden = true;
  fb.hidden = false;
  pintarRosco();
  // la letra respondida deja de ser activa
  document.querySelector(`#rosco .letter[data-index="${estado.actual}"]`)?.classList.remove("is-active");
  $("btn-next").focus({ preventScroll: true });
  leerFeedback();
}

function leerFeedback() {
  const item = estado.items[estado.actual];
  const titulo = $("fb-title").textContent.replace(/[^\p{L}\p{N}\s¡!¿?,.]/gu, "");
  const frase = item.status === "ok" ? `${titulo} La palabra es ${item.q.palabra}.` : `${titulo} La palabra es ${item.q.palabra}.`;
  voz.hablar(`${frase} ${item.q.info}`);
}

function pasapalabra() {
  estado.items[estado.actual].status = "pass";
  voz.hablar("Pasapalabra. ¡La volveremos a ver luego!");
  siguiente();
}

function siguiente() {
  const n = estado.items.length;
  for (let paso = 1; paso <= n; paso++) {
    const i = (estado.actual + paso) % n;
    const s = estado.items[i].status;
    if (s === "pending" || s === "pass") {
      estado.actual = i;
      mostrarPregunta();
      return;
    }
  }
  terminar();
}

/* ---------- Final ---------- */
function terminar() {
  voz.parar();
  const total = estado.items.length;
  const ok = estado.items.filter((i) => i.status === "ok").length;
  const ko = total - ok;
  const ratio = ok / total;
  $("stars").textContent = ratio >= 0.8 ? "⭐⭐⭐" : ratio >= 0.5 ? "⭐⭐" : "⭐";
  $("end-title").textContent = ratio >= 0.8 ? "¡Rosco de campeones!" : ratio >= 0.5 ? "¡Muy buen trabajo!" : "¡Rosco terminado!";
  $("end-msg").textContent = ratio >= 0.8
    ? "Has aprendido un montón de palabras. ¡Enhorabuena!"
    : ratio >= 0.5
      ? "Has acertado muchas palabras. ¡Repasa las rojas y verás qué bien!"
      : "Cada palabra nueva es un tesoro. ¡Juega otra vez y verás cómo mejoras!";
  $("end-ok").textContent = ok;
  $("end-ko").textContent = ko;
  $("review").innerHTML = estado.items.map((it) =>
    `<li class="${it.status === "ok" ? "ok" : "ko"}"><span class="r-letter">${it.letra}</span><span aria-hidden="true">${it.q.icono}</span><span class="text-adapt">${it.q.palabra}</span></li>`
  ).join("");
  mostrar("screen-end");
  voz.hablar(`${$("end-title").textContent} Has acertado ${ok} de ${total} palabras.`);
}

/* ---------- Inicio ---------- */
function empezar() {
  estado.modo = document.querySelector('input[name="mode"]:checked').value;
  estado.autoLeer = $("opt-autoread").checked;
  document.body.classList.toggle("upper", $("opt-upper").checked);
  crearPartida();
  mostrar("screen-game");
  dibujarRosco();
  mostrarPregunta();
}

/* ---------- Eventos ---------- */
$("btn-start").addEventListener("click", empezar);
$("btn-again").addEventListener("click", empezar);
$("btn-menu").addEventListener("click", () => { voz.parar(); mostrar("screen-start"); });
$("btn-home").addEventListener("click", () => { voz.parar(); mostrar("screen-start"); });
$("btn-check").addEventListener("click", comprobar);
$("btn-pass").addEventListener("click", pasapalabra);
$("btn-hint").addEventListener("click", darPista);
$("btn-next").addEventListener("click", siguiente);
$("btn-speak").addEventListener("click", leerPregunta);
$("btn-fb-speak").addEventListener("click", leerFeedback);
$("btn-enye").addEventListener("click", () => {
  const input = $("answer");
  const ini = input.selectionStart ?? input.value.length;
  const fin = input.selectionEnd ?? input.value.length;
  input.value = input.value.slice(0, ini) + "ñ" + input.value.slice(fin);
  input.focus();
  input.setSelectionRange(ini + 1, ini + 1);
});
$("answer").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); comprobar(); }
});

if (!voz.disponible) {
  $("btn-speak").hidden = true;
  $("btn-fb-speak").hidden = true;
  $("opt-autoread").closest("label").hidden = true;
}
