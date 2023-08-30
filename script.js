const automaticCarouselImages = [
  'IMAGENES/CARNEE.jpeg',
  'IMAGENES/PALITOS.jpeg',
  'IMAGENES/PLATO1.jpeg',
  'IMAGENES/PLATO2.jpeg',
  'IMAGENES/PLATO3.jpeg',
  'IMAGENES/PLATO4.jpeg',
  'IMAGENES/PLATOO.jpeg',
  'IMAGENES/PARRILLA.jpeg',
  'IMAGENES/PAST.jpeg',
  'IMAGENES/2PLATOS.jpeg',
  'IMAGENES/POSTRE (2).jpeg',
  'IMAGENES/POSTRE.jpeg',
];

const carousel = document.querySelector('.carousel');

        function autoCarousel() {
            const firstImage = carousel.firstElementChild;
            carousel.appendChild(firstImage);
        }

        // Llama a la función autoCarousel cada 2 segundos (2000 ms)
        setInterval(autoCarousel, 2000);

        // Inicializa el carrusel
        autoCarousel();




        var footer = document.querySelector('footer');
        var spacer = document.getElementById('spacer');

        window.addEventListener('scroll', function() {
            var scrollHeight = document.documentElement.scrollHeight;
            var clientHeight = document.documentElement.clientHeight;
            var scrollTop = window.scrollY;

            // Muestra el footer cuando se llega al final de la página
            if (scrollTop + clientHeight >= scrollHeight - footer.clientHeight) {
                footer.style.opacity = 1;
            } else {
                footer.style.opacity = 0;
            }
        });





