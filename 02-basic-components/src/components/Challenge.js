const Challenge = () => {
    var n1 = 10, n2 = 5 ;

    const handleSomar = () =>{
        console.log(n1 + n2);
    }
    
    return (
        <div>
            <h1>Desafio</h1>
            <p>Para somar {n1} e {n2} clique no botão!</p>
            <button onClick={handleSomar}>Somar</button>
        </div>
    )
};

export default Challenge