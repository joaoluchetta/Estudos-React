const TemplateExpressions = () => {
    const name = "João";
    const data = {
        age: 27,
        job: 'Programador'
    };
    return (
        <div>
            <h1>Olá, eu sou o {name}!</h1>
            <p>Tenho {data.age} anos e sou {data.job}.</p>
        </div>
    )
}

export default TemplateExpressions;