function OutraList ({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Nada para mostrar</p>
            )}
        </>
    )
}

export default OutraList;