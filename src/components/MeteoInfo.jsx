import sunny from "../assets/img/sunny.png";

export default function Meteo() {
    let urlImmagine = sunny;
    let localita = "Verona";
    let meteo = "Soleggiato";
    let temperatura = "26";
    let pressione = "1000";
    let umidita = "20";

    return (
        <div className="meteo">
        <img src={urlImmagine} alt="immagine meteo" className="icon" />
        <p className="localita">{localita}</p>
        <p>{meteo}</p>
        <p>Temperatura {temperatura}°C</p>
        <p>Pressione {pressione} mbar</p>
        <p>Umidità {umidita}%</p>
        </div>
    );
}