function Saudacao ({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}! Como você está?`
    }

    return (

    <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    
    )
}

export default Saudacao;