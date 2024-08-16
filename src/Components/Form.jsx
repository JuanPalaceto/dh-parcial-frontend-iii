import React, { useState } from 'react'
import Card from './Card';
import Error from './Error';

const Form = () => {
    const [visitor, setVisitor] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    })

    const [flag, setFlag] = useState(null);

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const handleName = (e) => {
        setVisitor({...visitor, name: e.target.value });
    }
    
    const handleEmail = (e) => {
        setVisitor({...visitor, email: e.target.value });
    }

    const handleTel = (e) => {
        setVisitor({...visitor, tel: e.target.value });
    }

    const handleMessage = (e) => {
        setVisitor({...visitor, message: e.target.value });
    }

    const validarNombre = (nombre) => {
        return nombre.trimStart().length > 2
    }

    const validarEmail = (email) => {
        return email.length > 5
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realizar vlidaciones para después mostrar un mensaje de error
        if (!validarNombre(visitor.name) || !validarEmail(visitor.email)) {
            setFlag(false);
        }
        else {
            setFlag(true);
        }

        // emailRegex.test(email); // true o false
    };

    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit} >
                <label>Nombre completo:</label>
                <input type="text" value={visitor.name} onChange={handleName}/>

                <label>Correo electrónico:</label>
                <input type="email" value={visitor.email} onChange={handleEmail} />

                <label >Número de teléfono:</label>
                <input type="tel" value={visitor.tel} onChange={handleTel} />

                <label >Mensaje:</label>
                <textarea rows="4" cols="50" value={visitor.message} onChange={handleMessage}></textarea>

                <button>Enviar</button>
            </form>

            {flag !== null ? flag ? <Card name={visitor.name} email={visitor.email} tel={visitor.tel} message={visitor.message}/> : <Error /> : null}
        </div>
    )
}

export default Form