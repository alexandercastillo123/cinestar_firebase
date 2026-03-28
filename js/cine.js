import { getCine } from './conexion.js';

const id = new URLSearchParams(window.location.search).get('id');
const cine = await getCine(id);

if (!cine) {
	document.getElementById('contenido-interno').innerHTML = "<h1>Cine no encontrado</h1>";
} else {
	let htmlTarifas = '';
	cine.tarifas.forEach((tarifa, index) => {
		let claseImpar = index % 2 !== 0 ? ' impar' : '';
		htmlTarifas += `
            <div class="fila${claseImpar}">
                <div class="celda-titulo">${tarifa.DiasSemana}</div>
                <div class="celda">${tarifa.Precio}</div>
            </div>
        `;
	});

	let htmlPeliculasCine = '';
	cine.peliculas.forEach((peliculaCine, index) => {
		let claseImpar = index % 2 !== 0 ? ' impar' : '';
		htmlPeliculasCine += `
            <div class="fila${claseImpar}">
                <div class="celda-titulo">${peliculaCine.Titulo}</div>
                <div class="celda">${peliculaCine.Horarios}</div>
            </div>
        `;
	});

	let html = `<br/><h1>Nuestros Cines</h1><br/>
			<h2>${cine.RazonSocial}</h2>
			<div class="cine-info">
				<div class="cine-info datos">
					<p>${cine.Direccion} - ${cine.Distrito}</p>
					<p>Teléfono: ${cine.Telefonos}</p>
					<br/>
					<div class="tabla">
						${htmlTarifas}
					</div>
					<div class="aviso">
						<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
					</div>
				</div>
                <img src="https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/cine/${cine.id}.2.jpg"/>
				<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
				<div class="cine-info peliculas">
					<div class="tabla">
						<div class="fila">
							<div class="celda-cabecera">Películas</div>
							<div class="celda-cabecera">Horarios</div>
						</div>
						${htmlPeliculasCine}
					</div>
				</div>
			</div>
			<div>
				<img style="float:left;" src="https://raw.githubusercontent.com/alexandercastillo123/img_cinestar/main/cine/${cine.id}.3.jpg" alt="Imagen del cine"/>
				<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
					Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
					<br/><br/>
					Visitános y diviértete con nosotros. 
					<br/><br/>
					<b>CINESTAR</b>, siempre pensando en tí. 
				</span>		
			</div>`;

	document.getElementById('contenido-interno').innerHTML = html;
}


