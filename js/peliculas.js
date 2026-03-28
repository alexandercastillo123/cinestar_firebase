import { getPeliculas } from "./conexion.js";

let idParam = new URLSearchParams(window.location.search).get('id')
let idEstado = idParam == 'cartelera' ? '1' : '2'
let titulo = idParam == 'cartelera' ? 'Cartelera' : 'Próximos Estrenos'

const peliculas = await getPeliculas(idEstado)
let html = `<br/><h1>${titulo}</h1><br/>`

const imgBase = "https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/pelicula/";

peliculas.forEach(doc => {
    let pelicula = doc.data()
    html += `
			<div class="contenido-pelicula">
				<div class="datos-pelicula">
					<h2>${pelicula.Titulo}</h2><br/>
					<p>${pelicula.Sinopsis}</p>
					<br/>
					<div class="boton-pelicula"> 
						<a href="pelicula.html?id=${pelicula.id}" >
							<img src="https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
						</a>
					</div>
					<div class="boton-pelicula"> 
						<a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
							<img src="https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
						</a>
					</div> 
				</div>
				<img src="${imgBase}${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
			</div>
		`
});

document.getElementById('contenido-interno').innerHTML = html
