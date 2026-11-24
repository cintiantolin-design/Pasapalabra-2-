# Pasapalabra de la clase · 2º de Primaria

Juego de Pasapalabra educativo e inclusivo (DUA) para alumnado de 7-8 años.

## Cómo usarlo
- **En el ordenador:** abre `index.html` con doble clic. No hace falta instalar nada.
- **En GitHub Pages:** sube los tres archivos a un repositorio, ve a *Settings → Pages*, elige la rama `main` y la carpeta raíz. En un minuto tendrás un enlace para la clase.

## Archivos
- `index.html` – estructura de las pantallas (inicio, rosco y final).
- `styles.css` – colores y diseño (los colores están al principio, en `:root`).
- `script.js` – preguntas y funcionamiento del juego.

## Añadir o cambiar palabras
Abre `script.js` y edita la lista `PREGUNTAS`. Cada letra puede tener varias preguntas; en cada partida se elige una al azar.

```js
{ letra: "G", tipo: "empieza", palabra: "gato", otras: ["gata"], icono: "🐱",
  def: "Animal de compañía con bigotes que dice «miau».",
  info: "Los gatos duermen muchas horas al día." }
```

- `tipo`: `"empieza"` o `"contiene"` (para Ñ, W, X…).
- `otras`: otras respuestas que también valen (plural, femenino…).
- Las respuestas se aceptan sin tildes y en mayúsculas o minúsculas.

## Apoyos DUA incluidos
- Lectura en voz alta (voz en español del navegador) de la definición y de la respuesta.
- Lectura automática opcional y modo MAYÚSCULAS.
- Icono visual en cada palabra, pista con número de letras y botón «ñ».
- Mensajes siempre positivos y explicación breve de cada palabra.
- Sin tiempo límite: cada niño y niña va a su ritmo.
- Partida rápida (12 letras) o rosco completo (27 letras).
