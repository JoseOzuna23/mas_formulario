import React, {useState} from 'react'

const Formulario = () => {
    const[getNombre, setNombre] = useState("");
    const[getApellido, setApellido] = useState("");
    const[getCorreo, setCorreo] = useState("");
    const[getContraseña, setContraseña] = useState("");
    const[getContcont, setContcont] = useState("");

    const crearUsuario = (evento) =>{
        evento.preventDefault();
    }
return (
    <>
    <form onSubmit={crearUsuario}>
        <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
            <input onChange={(evento) => setNombre(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>    
            {(getNombre.length < 2 && getNombre !== "") ? <p className='text-danger'> EL nombre tiene que tener almenos 2 caracteres</p> : null}
        </div>

        <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
            <input onChange={(evento) => setApellido(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>    
            {(getApellido.length < 2 && getApellido !== "") ? <p className='text-danger'> EL Apellido tiene que tener almenos 2 caracteres</p> : null}
        </div>

        <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input onChange={(evento) => setCorreo(evento.target.value)} type="email" className="form-control" id="exampleInputPassword1"/>
            {(getCorreo.length < 5 && getCorreo !== "") ? <p className='text-danger'> EL Correo tiene que tener almenos 5 caracteres</p> : null}
        </div>

        <div className="mb-2 form-check">            
            <label className="form-check-label" htmlFor="exampleCheck1">Contraseña</label>
            <input onChange={(evento) => setContraseña(evento.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
            {(getContraseña.length < 8 && getContraseña !== "") ? <p className='text-danger'> La Contraseña tiene que tener 8 caracteres o mas</p> : null}
        </div>

        <div className="mb-2 form-check">            
            <label className="form-check-label" htmlFor="exampleCheck1">Confirmar Contraseña</label>
            <input onChange={(evento) => setContcont (evento.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
            {(getContcont.length < 8 && getContcont !== "") ? <p className='text-danger'> La Contraseña tiene que tener 8 caracteres o mas</p> : null}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <div>
        <p> Nombre: {getNombre}</p>
        <p> Apellido: {getApellido}</p>
        <p> Correo: {getCorreo}</p>
        <p> Contraseña:{getContraseña}</p>
        <p> Confirmar Contraseña: {getContcont}</p>
    </div>


    
    </>
)
}

export default Formulario
