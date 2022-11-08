

import '../css/components.css'
import img from '../assets/img/webpack-logo.png';

//method to test webpack
export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!!`;

    document.body.append( h1 );

    const newImg = document.createElement('img');
    newImg.src = img;

    document.body.append(newImg);        
}


