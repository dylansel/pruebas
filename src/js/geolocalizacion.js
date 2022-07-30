const d = document,
n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    opcions = {
        enableHighAccuracy: true, //para que tome la mejor lectura
        timeout:5000, // el tiempo que va a esperar para tomar lectura
        maximumAge:0 //lo pongo en 0 para que no guarde en cache las lecturas anteriores
    };
    const success = (position)=>{
        let coords = position.coords;
        $id.innerHTML = `
        <h4>Tu posicion actual es:</h4>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy}</b> Metros</li>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener" title="Abrir en Google Maps">Ver en google Maps</a>
        </ul>
        `;
    }
    const error = (err)=>{
        $id.innerHTML = `Error ${err.code}: ${err.message}`;
        console.error(`Error ${err.code}: ${err.message}`);
    }
    n.geolocation.getCurrentPosition(success,error,opcions)
}