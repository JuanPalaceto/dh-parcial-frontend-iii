import React from 'react'

const Card = ({name, email, tel, message}) => {
  return (
    <div >
        <h3>¡Mensaje enviado, {name}!</h3>
        <p>Nos pondremos en contacto pronto, revisa tu bandeja de entrada {email}.</p>
        <p>Alternativamente, un asesor podría comunicarse contigo mediante el teléfono proporcionado. {tel}.</p>
        <span>Mensaje: {message}</span>
    </div>
  )
}

export default Card