const imagenes = document.querySelectorAll( '.img-galeria' );
const imagenesLight = document.querySelector( '.agregar-imagen' );
const contenedorLight = document.querySelector( '.imagen-light' );
const quitarHamburguesa = document.querySelector( '.hamburguesa' );


imagenes.forEach( imagen => {
    imagen.addEventListener( 'click', () => {
        agregarSrcImagen( imagen.getAttribute( 'src' ) );
    } );
} );

contenedorLight.addEventListener( 'click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle( 'show' );
        imagenesLight.classList.toggle( 'showImage' );    
        quitarHamburguesa.style.opacity = '1';
    }
} );

const agregarSrcImagen = ( imagen ) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle( 'show' );
    imagenesLight.classList.toggle( 'showImage' );
    quitarHamburguesa.style.opacity = '0';

}