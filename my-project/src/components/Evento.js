function Evento({ numero }) {

    function meuEvento() {
        console.log(`Evento disparado! ${numero}`)
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativa!</button>
        </div>
    )
}

export default Evento;