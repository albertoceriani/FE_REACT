export default function Biglietto({nome="Viaggiatore anonimo", destinazione}) {
    return (
        <section className="biglietto">
            <p>Nome viaggiatore: {nome}</p>
            <p>Destinazione: {destinazione}</p>
        </section>
    );
}

//oppure alla fine export defaulf Biglietto;