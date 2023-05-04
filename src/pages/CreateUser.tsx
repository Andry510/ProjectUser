import users from '../data/users.json'
import { user }  from '../interfaces/user'
import { useState } from 'react';

export const CreateUser = () =>{
    
    const [user, setUser] = useState<user>({
        id: users.length + 1,
        nombre: "",
        apellido: "",
        email: "",
        numero_de_celular: "",      
        descripcion: "",      
        fecha_de_nacimiento: "",    
        imagen: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();                
        const data = JSON.stringify(user);
        localStorage.setItem('data', data);
        
      };     

    return(        
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="number" className="form-control" disabled id="id" name="id" value={user.id} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={user.nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido   </label>
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    value={user.apellido}
                onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label"> Emai</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                onChange={handleChange}
                  />
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                    type="text"
                    className="form-control"
                    id="numero_de_celular"
                    name="numero_de_celular"
                    value={user.numero_de_celular}
                    onChange={handleChange}
                />
            </div> 
            <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input
                    type="date"
                    className="form-control"
                    id="fecha_de_nacimiento"
                    name="fecha_de_nacimiento"
                    value={user.fecha_de_nacimiento}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    value={user.descripcion}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Imagen</label>
                <input
                    type="text"
                    className="form-control"
                    id="imagen"
                    name="imagen"
                    value={user.imagen}
                    onChange={handleChange}
                />
            </div> 
                <button type="submit" className="btn btn-primary">
                    Crear Usuario
                </button>
            </form>
        </div>
    )
}