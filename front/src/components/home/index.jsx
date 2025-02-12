import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUser, FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import './styles.css'

export default function Home() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')

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
    }, [dados])

    const apagar = async (id)=>{
        try {
             await axios.delete(`http://127.0.0.1:8000/api/professor/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setDados(dados.filter((professor)=>{professor.id !== id}))
        } catch (error) {
            alert("Faça Login Novamente! ")
            console.log(error)
        }
    }

    return (
        <>
            <h2>Lista de Professores</h2>

            <table>
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ocupação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((dado) => (
                        <tr key={dado.ni}>
                            <td>
                                <FaSearch className="icon" /> 
                                <FaTrash className="icon" onClick={() => apagar(dado.id)} /> 
                            </td>
                            <td>{dado.n1}</td>
                            <td>{dado.nome}</td>
                            <td>{dado.email}</td>
                            <td>{dado.tel}</td>
                            <td>{dado.ocupacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <footer>
                <div className="btn1">
                    <FaPlus className="adicionar" />
                    <p>Adicionar</p>
                </div>
                <div className="btn2">
                    <FaPlus className="delete" />
                    <p>Delete</p>
                </div>
                
            </footer>
        </>
    );
}
