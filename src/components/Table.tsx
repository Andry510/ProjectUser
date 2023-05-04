import users from '../data/users.json'  
import { Link } from 'react-router-dom'


const Table = () => {    
    const dataUsers = users       
    return (
        <table className='table table-hover  table-striped-columns shadow p-3 mb-5 rounded text-center'>
            <thead>
                <tr>
                    <th scope='col'>id </th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Apellido</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Telefono</th>
                    <th scope='col'>Ver usuario</th>
                </tr>
            </thead>        
            <tbody>              
               {
                    dataUsers.map(({id, nombre, apellido, email, numero_de_celular }) => {
                        return (                            
                            <tr key={id}>
                                <th scope='row'>{id}</th>
                                <td>{nombre}</td>
                                <td>{apellido}</td>
                                <td>{email}</td>
                                <td>{numero_de_celular}</td>
                                <td>
                                    <Link to={`user/${id}`}>
                                        <button type="button" className="btn btn-outline-secondary">Ver</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }                
            </tbody>
        </table>
    )
}

export default Table;