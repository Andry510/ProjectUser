import { useParams } from "react-router-dom"
import users from '../data/users.json'

export const User = () => {
    const { id } = useParams()
    const user = users.find(u => u.id === parseInt(id ?? ''));    
    return(       
         <div className="container mt-3">
            <form>
                <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="number" className="form-control" disabled id="id" name="id" value={user?.id}/>
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={user?.nombre}                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido   </label>
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    value={user?.apellido}                
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label"> Emai</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user?.email}                
                  />
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                    type="text"
                    className="form-control"
                    id="numero_de_celular"
                    name="numero_de_celular"
                    value={user?.numero_de_celular}                    
                />
            </div> 
            <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                <input
                    type="date"
                    className="form-control"
                    id="fecha_de_nacimiento"
                    name="fecha_de_nacimiento"
                    value={user?.fecha_de_nacimiento}                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    value={user?.descripcion}                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Imagen</label>
                <input
                    type="text"
                    className="form-control"
                    id="imagen"
                    name="imagen"
                    value={user?.imagen}                    
                />
            </div>                 
            </form>
        </div>       
    )
}