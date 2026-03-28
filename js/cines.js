import { getCines } from './conexion.js';

const cines = await getCines();
let html = `<br/><h1>Nuestros Cines</h1><br/>`

const imgBase = "https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/cine/";

cines.forEach(item => {
    let cine = item.data()
    html += `
        <div class="contenido-cine">
            <img src="${imgBase}${cine.id}.1.jpg" width="227" height="170"/>
            <div class="datos-cine">
                <h4>${cine.RazonSocial}</h4><br/>
                <span>${cine.Direccion} - ${cine.Distrito}<br/><br/>Teléfono: ${cine.Telefonos}</span>
            </div>
            <br/>
            <a href="cine.html?id=${cine.id}">
                <img src="https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/varios/ico-info2.png" width="150" height="40"/>
            </a>

        </div>
    `
})
document.getElementById('contenido-interno').innerHTML = html
