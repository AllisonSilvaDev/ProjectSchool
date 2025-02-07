import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUser, FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import './styles.css'

export default function Home() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    console.log("Token Home", token)

    useEffect(() => {

        if (!token) return;

        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/professores',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="container-home">
            <header>
                <h1>Lista de Professores</h1>
                <input className="search" type="search" placeholder="Buscar" />
            </header>
            
            <section className="body">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Ocupação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((dado) => (
                            <tr key={dado.id}>
                                <td>{dado.n1}</td>
                                <td>{dado.nome}</td>
                                <td>{dado.email}</td>
                                <td>{dado.tel}</td>
                                <td>{dado.ocupacao}</td>
                                <td>
                                    <FaSearch /> <FaEdit /> <FaPlus /> <FaTrash />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            
            <footer></footer>
        </div>
    )
}
