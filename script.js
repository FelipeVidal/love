// Agregar imágenes al collage dinámicamente
const collage = document.querySelector('.collage');
let index1 = 0;
let index2 = 0;
const imagenes1 = [
  './imagenes/img1.jpg', './imagenes/img2.jpg', './imagenes/img3.jpg', './imagenes/img4.jpg', './imagenes/img5.jpg',
  './imagenes/img6.jpg',
  './imagenes/img7.jpg',
  './imagenes/img8.jpg',
  './imagenes/img9.jpg',
  './imagenes/img10.jpg',
  './imagenes/img11.jpg',
  './imagenes/img12.jpg',


]; // Cambia estos nombres por tus imágenes

const imagenes2 = [
  './imagenes/img13.jpg',
  './imagenes/img14.jpg',
  './imagenes/img15.jpg',
  './imagenes/img16.jpg',
  './imagenes/img17.jpg',
  './imagenes/img18.jpg',
  './imagenes/img19.jpg',
  './imagenes/img20.jpg',
  './imagenes/img21.jpg',
  './imagenes/img22.jpg',
  './imagenes/img23.jpg',
  './imagenes/img24.jpg',
  './imagenes/img25.jpg',

];

// Control de música
const musica = document.getElementById('musica');
const botonMusica = document.getElementById('control-musica');


botonMusica.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    botonMusica.textContent = 'Pausar Música';
  } else {
    musica.pause();
    botonMusica.textContent = 'Reproducir Música';
  }
});


cicloImagenes1();
cicloImagenes2();

function cicloImagenes1() {
  imagenes1.forEach((imagenSrc, index) => {
    setTimeout(() => {
      const img = document.createElement('img');
      img.src = imagenSrc;
      img.style.left = `${Math.random() * 20}vw`;
      img.style.top = `-10%`;
      img.style.animationDuration = '5s';
      collage.appendChild(img);
      index1++;
    }, index * 2000);
  })

}

setInterval(cicloImagenes1, 24000);



function cicloImagenes2() {
  imagenes2.forEach((imagenSrc, index) => {
    setTimeout(() => {
      const img = document.createElement('img');
      img.src = imagenSrc;
      img.style.right = `${Math.random() * 20}vw`;
      img.style.top = `-10%`;
      img.style.animationDuration = '5s';
      collage.append(img);
    }, index * 2000);
  });
}

setInterval(cicloImagenes2, 24000);

// Dibujar un corazón SVG cada cierto tiempo
function dibujarCorazonSVG() {
  const corazonDibujado = document.getElementById('corazon-dibujado');
  corazonDibujado.innerHTML = `
    <svg viewBox="0 0 32 29.6">
      <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="#ff6f61"/>
    </svg>
  `;
  corazonDibujado.style.display = 'block';

  // Ocultar el corazón después de 3 segundos
  setTimeout(() => {
    corazonDibujado.style.display = 'none';
  }, 3000);
}

setInterval(dibujarCorazonSVG, 5000); // Dibuja un corazón cada 5 segundos

