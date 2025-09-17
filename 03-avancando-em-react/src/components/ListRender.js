
import { useState } from 'react'

const ListRender = () => {
    const [list, setList] = useState(["Matheus", "João", "Maria", "Pedro", "Ana"])

    const [user, setUsers] = useState([
        { id: 1, name: "João", age: 30, profession: "Programador Front-End" },
        { id: 2, name: "Deivid", age: 30, profession: "DBA" },
        { id: 3, name: "Rafa", age: 30, profession: "Programador Back-End" },
        { id: 4, name: "Thiago", age: 30, profession: "DevOps" }
    ])

    const addNome = () => {
        setList([...list, "Carlos"])
    }

    const removeNome = () => {        
        setList(list.filter((item, index) => index !== list.length - 1))
    }

    const deleteRandom = () => {
        
        const randomNumber = Math.floor(Math.random() * 5 );
        setUsers((prevUsers) =>{
            return prevUsers.filter((user) => user.id !== randomNumber);
        });
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addNome}>Adicionar Nome</button>
            <button onClick={removeNome}>Remove Nome</button>

            <ol>
                {user.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} - {user.profession}</li>
                ))}
            </ol>

            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender